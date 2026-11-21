# Zen Villa Schinias

Στατικό site για τη Zen Villa στον Σχινιά (ελληνικά / English).

## Πώς αλλάζω τα στοιχεία
Όλα τα βασικά (σύνδεσμος Airbnb, τηλέφωνο, email, WhatsApp, Instagram, φωτογραφίες και λεζάντες) είναι στο `js/config.js`.
Οι φωτογραφίες είναι στον φάκελο `images/gallery/` και οι μικρές εκδοχές τους στο `images/gallery/thumbs/`.

## Δημοσίευση (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → `main` και `/ (root)`.
Domain: `www.zenvilla.gr` (αρχείο `CNAME`). DNS στο easy.gr (nameservers dns3/dns4.easy.gr):
- A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME `www` → `manina1-dev.github.io`

## Ημερολόγιο διαθεσιμότητας (Airbnb)
Το `.github/workflows/airbnb-calendar.yml` διαβάζει κάθε 3 ώρες το ημερολόγιο του Airbnb και γράφει το `data/availability.json` (μόνο κλεισμένες ημερομηνίες).
Ο σύνδεσμος iCal του Airbnb μπαίνει ως secret: Settings → Secrets and variables → Actions → `AIRBNB_ICAL_URL`.
Χειροκίνητος συγχρονισμός: Actions → *Airbnb calendar sync* → *Run workflow*.
