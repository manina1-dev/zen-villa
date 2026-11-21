"""Fetch the Airbnb iCal export and write data/availability.json.

Only booked/blocked date ranges are stored (no names, prices or notes).
The iCal URL comes from the AIRBNB_ICAL_URL environment variable (a GitHub secret).
"""
import datetime as dt
import json
import os
import sys
import urllib.request

OUT = os.path.join(os.path.dirname(__file__), "..", "data", "availability.json")
REFRESH_DAYS = 7  # rewrite the file at least this often, even with no changes


def parse_date(value):
    value = value.strip()[:8]
    return dt.date(int(value[:4]), int(value[4:6]), int(value[6:8]))


def parse_ics(text):
    # Unfold folded lines (RFC 5545: continuation lines start with a space or tab)
    lines = []
    for raw in text.splitlines():
        if raw[:1] in (" ", "\t") and lines:
            lines[-1] += raw[1:]
        else:
            lines.append(raw)
    ranges, cur = [], None
    for line in lines:
        if line == "BEGIN:VEVENT":
            cur = {}
        elif line == "END:VEVENT" and cur is not None:
            if "start" in cur:
                end = cur.get("end", cur["start"] + dt.timedelta(days=1))
                if end > cur["start"]:
                    ranges.append((cur["start"], end))
            cur = None
        elif cur is not None and ":" in line:
            key, val = line.split(":", 1)
            name = key.split(";", 1)[0].upper()
            if name == "DTSTART":
                cur["start"] = parse_date(val)
            elif name == "DTEND":
                cur["end"] = parse_date(val)
    return ranges


def merge(ranges, today):
    out = []
    for s, e in sorted(ranges):
        if e <= today:
            continue
        if out and s <= out[-1][1]:
            out[-1][1] = max(out[-1][1], e)
        else:
            out.append([s, e])
    return [[s.isoformat(), e.isoformat()] for s, e in out]


def main():
    url = os.environ.get("AIRBNB_ICAL_URL", "").strip()
    if not url:
        sys.exit("AIRBNB_ICAL_URL is not set")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (calendar sync)"})
    with urllib.request.urlopen(req, timeout=60) as r:
        text = r.read().decode("utf-8", "replace")
    if "BEGIN:VCALENDAR" not in text:
        sys.exit("The URL did not return an iCal calendar")

    now = dt.datetime.now(dt.timezone.utc)
    booked = merge(parse_ics(text), now.date())

    old = {}
    if os.path.exists(OUT):
        try:
            with open(OUT, encoding="utf-8") as f:
                old = json.load(f)
        except ValueError:
            old = {}
    if old.get("booked") == booked and old.get("updated"):
        last = dt.datetime.fromisoformat(old["updated"].replace("Z", "+00:00"))
        if now - last < dt.timedelta(days=REFRESH_DAYS):
            print("No changes")
            return

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "booked": booked}, f, indent=1)
        f.write("\n")
    print(f"Wrote {len(booked)} booked ranges")


if __name__ == "__main__":
    main()
