(function () {
  const C = window.VILLA || {};

  // ---------- English translations (Greek is the default in the HTML) ----------
  const EN = {
    "nav.about": "The villa", "nav.spaces": "Spaces", "nav.gallery": "Photos",
    "nav.location": "Location", "nav.contact": "Contact",
    "cta.book": "Book", "cta.checkAvailability": "Check availability & book",
    "cta.more": "Discover the villa", "cta.book.airbnb": "Check availability & book on Airbnb",
    "cta.call": "Phone",
    "hero.eyebrow": "Schinias · Attica · Greece",
    "hero.lead": "A private villa with its own pool and a lush garden, a short walk from Schinias National Park and its beaches.",
    "stat.guests": "guests", "stat.bedrooms": "bedrooms", "stat.baths": "bathrooms",
    "stat.floors": "levels", "stat.pets": "pet friendly",
    "about.eyebrow": "Welcome", "about.title": "The whole villa, just for you",
    "about.p1": "Zen Villa is a spacious two-level private villa in Schinias, rented exclusively as a whole home for families and groups of up to 12 guests.",
    "about.p2": "Spread over two floors, the villa offers 5 bedrooms and 3 bathrooms. On the ground floor, a very large covered veranda opens onto the garden – the perfect spot for long summer dinners and relaxing in the shade.",
    "about.p3": "Outside, guests enjoy their own private swimming pool with sunbathing area and a lush garden full of shady trees and Mediterranean herbs.",
    "about.p4": "Sleeps up to 12 guests (10 in the bedrooms, plus 2 in a sleeping area in the living room).",
    "about.p5": "Pet friendly – your four-legged friends are more than welcome!",
    "spaces.eyebrow": "The spaces", "spaces.title": "Two floors, one garden, one pool",
    "sp.ground.t": "Ground floor",
    "sp.ground.1": "Living room with fireplace and TV",
    "sp.ground.2": "Kitchen with dining bar",
    "sp.ground.3": "Main bedroom with en-suite bathroom",
    "sp.ground.4": "Bedroom 2 (beds can be moved together) & bathroom 2",
    "sp.ground.5": "Bed settee for 2 in the living area",
    "sp.garden.t": "Garden & pool",
    "sp.garden.1": "Private pool with sunbathing area",
    "sp.garden.2": "Very large covered veranda",
    "sp.garden.3": "Outdoor dining under the mulberry tree",
    "sp.garden.4": "Hammock and poolside pergola",
    "sp.garden.5": "Shady trees and Mediterranean herbs",
    "sp.first.t": "First floor",
    "sp.first.1": "Bedroom 3 with balcony overlooking the garden",
    "sp.first.2": "Bedrooms 4 and 5",
    "sp.first.3": "Two beds in every bedroom",
    "sp.first.4": "Bathroom 3 with shower and bath",
    "sp.see.ground": "See the ground floor →", "sp.see.garden": "See the garden & pool →", "sp.see.first": "See the first floor →",
    "gallery.eyebrow": "Photos", "gallery.title": "A look around Zen Villa",
    "tab.garden": "Garden & pool", "tab.ground": "Ground floor", "tab.first": "First floor",
    "loc.eyebrow": "Location", "loc.title": "Peace, sea and nature",
    "loc.p1": "The villa is located in a quiet community within easy walking distance of Schinias National Park, the Olympic Rowing Centre and some of the best beaches in Attica.",
    "loc.p2": "The villa is the perfect place to chill out on holiday or to use as a base to explore the sights of nearby Athens and the surrounding area.",
    "near.1": "Schinias National Park", "near.2": "Schinias beaches",
    "near.3": "Olympic Rowing Centre", "near.4": "Athens and the sights of Attica",
    "loc.address": "Faidras 11, Schinias, 19007 Attica, Greece", "loc.directions": "Get directions",
    "contact.eyebrow": "Booking & contact", "contact.title": "Ask us anything!",
    "contact.lead": "To book or for any question, contact us directly – send us a WhatsApp message, an email or give us a call. If you prefer, you can also book through Airbnb.",
    "cta.book.direct": "Booking & contact", "air.k": "Prefer Airbnb? You can book there too", "air.l": "Book on Airbnb →", "cta.airbnb": "Book on Airbnb",
    "footer.addr": "Faidras 11, Schinias, 19007 Attica, Greece",
    "nav.availability": "Availability",
    "footer.ama": "Reg. no. (AMA)",
    "nav.exp": "Experiences",
    "band.k1": "experiences",
    "band.l1": "A day at the villa",
    "exp.eyebrow": "Experiences",
    "exp.title": "A day at Zen Villa",
    "exp.lead": "It's not just a place to stay. It's the way the day goes by: slowly, in the shade, with your people and the sea close by.",
    "exp.m1.w": "Morning",
    "exp.m1.t": "Breakfast under the mulberry tree",
    "exp.m1.d": "Wake up with no rush and lay breakfast on the long table under the mulberry tree. Fresh coffee, fruit and the cool of the garden before the day warms up.",
    "exp.m2.w": "Midday",
    "exp.m2.t": "Swims in your own pool",
    "exp.m2.d": "The pool is only for your group. Sunbeds in the sun, shade under the pergola and a swim whenever you like, with no other guests.",
    "exp.m3.w": "Afternoon",
    "exp.m3.t": "Hammock hour",
    "exp.m3.d": "A book in the hammock, a nap in the shade, or a walk to Schinias National Park and the beach. And don't forget the watermelon skin for the garden tortoise!",
    "exp.m4.w": "Evening",
    "exp.m4.t": "Dinner under the lanterns",
    "exp.m4.d": "When the sun goes down, the garden lights up. Cook in the fully equipped kitchen and set the table on the covered veranda or under the lanterns, for long summer dinners with everyone.",
    "exp.m5.w": "Night",
    "exp.m5.t": "A glass of wine by the water",
    "exp.m5.d": "The pool lit up, silence and the Schinias sky. The best spot to end the day – and in winter, by the fireplace in the living room.",
    "exp.around.k": "Around the villa",
    "exp.around.t": "Sea, nature and history",
    "exp.a1.t": "Schinias beaches",
    "exp.a1.d": "One of the longest sandy beaches in Attica, with pine trees down to the water, shallow sea for children and spots for windsurfing and kitesurfing.",
    "exp.a2.t": "The National Park",
    "exp.a2.d": "Pine forest, wetland and birdlife. Perfect for walking, running and cycling, a short walk from the villa.",
    "exp.a3.t": "Olympic Rowing Centre",
    "exp.a3.d": "The venue of the 2004 Olympic Games – for a morning walk or run by the water.",
    "exp.a4.t": "Marathon & Rhamnous",
    "exp.a4.d": "The Tomb of Marathon, the Marathon Run Museum and the archaeological site of Rhamnous, all close to the villa.",
    "exp.a5.t": "Seaside fish tavernas",
    "exp.a5.d": "Fresh fish and mezedes with a view, in Schinias and the nearby seaside villages.",
    "exp.a6.t": "A day in Athens",
    "exp.a6.d": "The Acropolis, Plaka and the museums of Athens are an easy day trip from the villa.",
    "nav.place": "Schinias, Attica",
    "hero.title": "Your own villa in Schinias",
    "stat.pool": "private pool",
    "spaces.lead": "Two floors, one garden, one pool.",
    "sp.more": "Photos",
        "band.k2": "calendar", "band.l2": "Availability",
    "band.k3": "the area", "band.l3": "What's nearby",
    "quote": "Slow mornings in the shade of the mulberry tree, swims in the pool and long dinners under the lanterns.",
    "loc.big": "Schinias",
    "cal.eyebrow": "Availability", "cal.title": "When the villa is free",
    "cal.lead": "This calendar updates automatically. Found free dates? Send us a message and we'll book them for you, or book on Airbnb.",
    "cal.free": "Available", "cal.booked": "Booked", "cal.book": "Ask about your dates",
  };

  const nodes = document.querySelectorAll("[data-i18n]");
  const EL = {};
  nodes.forEach((n) => { EL[n.dataset.i18n] = n.textContent; });

  let lang = "el";
  function setLang(l) {
    lang = l;
    const dict = l === "en" ? EN : EL;
    nodes.forEach((n) => { const v = dict[n.dataset.i18n]; if (v) n.textContent = v; });
    document.documentElement.lang = l;
    document.getElementById("langToggle").textContent = l === "en" ? "ΕΛ" : "EN";
    renderGallery();
    renderCalendar();
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  document.getElementById("langToggle").addEventListener("click", () => setLang(lang === "en" ? "el" : "en"));

  // ---------- Links from config ----------
  document.querySelectorAll(".airbnb-link").forEach((a) => { a.href = C.airbnbUrl || "#"; });
  document.querySelectorAll(".contact-phone").forEach((a) => {
    if (!C.phone) return a.remove();
    a.href = "tel:" + C.phone.replace(/\s/g, "");
    const pn = a.querySelector(".phone-num"); if (pn) pn.textContent = C.phone;
  });
  document.querySelectorAll(".contact-email").forEach((a) => {
    if (!C.email) return a.remove();
    a.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Κράτηση Zen Villa / Booking request");
    const e = a.querySelector(".email-addr"); if (e) e.textContent = C.email;
  });
  document.querySelectorAll(".wa-book").forEach((a) => {
    if (!C.whatsapp) { a.href = "#contact"; a.removeAttribute("target"); return; }
    const msg = "Γεια σας! Θα θέλαμε να κάνουμε κράτηση στη Zen Villa. Ημερομηνίες: … Άτομα: …";
    a.href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);
  });
  document.querySelectorAll(".contact-whatsapp").forEach((a) => {
    if (!C.whatsapp) return a.remove();
    const msg = "Γεια σας! Ενδιαφέρομαι για τη Zen Villa.";
    a.href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);
  });
  document.querySelectorAll(".instagram-link").forEach((a) => {
    if (C.instagram) a.href = C.instagram; else a.remove();
  });

  // ---------- Gallery (tabs) + lightbox ----------
  const G = C.galleries || {};
  const grid = document.getElementById("galleryGrid");
  const tabs = document.querySelectorAll("[data-tab]");
  let group = "garden";
  const list = () => G[group] || [];
  const cap = (p) => (lang === "en" ? p.en : p.el) || "";
  const full = (p) => "images/gallery/" + p.src + ".jpg";
  const thumb = (p) => "images/gallery/thumbs/" + p.src + ".jpg";

  function renderGallery() {
    tabs.forEach((t) => {
      const on = t.dataset.tab === group;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on);
      const n = (G[t.dataset.tab] || []).length;
      t.dataset.count = n;
    });
    grid.innerHTML = "";
    list().forEach((p, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "ph";
      const img = document.createElement("img");
      img.src = thumb(p); img.alt = cap(p) || "Zen Villa"; img.loading = "lazy";
      b.appendChild(img);
      b.addEventListener("click", () => openLb(i));
      b.style.transitionDelay = (i % 4) * 0.08 + "s";
      grid.appendChild(b);
      if (window.__revealObs) window.__revealObs.observe(b); else b.classList.add("in");
    });
  }
  function selectGroup(g, scroll) {
    if (!G[g]) return;
    group = g; renderGallery();
    if (scroll) document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  }
  tabs.forEach((t) => t.addEventListener("click", () => selectGroup(t.dataset.tab)));
  document.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => selectGroup(b.dataset.open, true)));

  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
  let cur = 0;
  function show(i) {
    const L = list();
    cur = (i + L.length) % L.length;
    lbImg.src = full(L[cur]); lbImg.alt = cap(L[cur]);
    lbCap.textContent = (cap(L[cur]) ? cap(L[cur]) + " · " : "") + `${cur + 1}/${L.length}`;
  }
  function openLb(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; }
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
  lb.querySelector(".lb-close").addEventListener("click", closeLb);
  lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(cur - 1); });
  lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(cur + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  let tx = null;
  lb.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
    tx = null;
  });


  // ---------- Availability calendar (data/availability.json, synced from Airbnb) ----------
  const calMonths = document.getElementById("calMonths");
  const calPrev = document.getElementById("calPrev"), calNext = document.getElementById("calNext");
  const calUpdated = document.getElementById("calUpdated");
  const MAX_AHEAD = 12; // months shown ahead
  let booked = [], updatedAt = null, offset = 0;
  const iso = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const isBooked = (k) => booked.some(([s, e]) => k >= s && k < e); // nights: check-out day stays free
  function perView() { return window.matchMedia("(max-width: 960px)").matches ? 1 : 2; }
  function renderCalendar() {
    if (!calMonths) return;
    const loc = lang === "en" ? "en-GB" : "el-GR";
    const now = new Date(); const todayKey = iso(now);
    const n = perView();
    offset = Math.max(0, Math.min(offset, MAX_AHEAD - n));
    calPrev.disabled = offset === 0; calNext.disabled = offset >= MAX_AHEAD - n;
    const dows = [];
    for (let i = 0; i < 7; i++) dows.push(new Date(2024, 0, 1 + i).toLocaleDateString(loc, { weekday: "short" })); // Mon..Sun
    calMonths.innerHTML = "";
    for (let m = 0; m < n; m++) {
      const first = new Date(now.getFullYear(), now.getMonth() + offset + m, 1);
      const box = document.createElement("div"); box.className = "cal-month";
      const h = document.createElement("h3");
      h.textContent = first.toLocaleDateString(loc, { month: "long", year: "numeric" });
      const grid = document.createElement("div"); grid.className = "cal-grid";
      dows.forEach((w) => { const c = document.createElement("div"); c.className = "dow"; c.textContent = w.replace(".", ""); grid.appendChild(c); });
      const lead = (first.getDay() + 6) % 7;
      for (let i = 0; i < lead; i++) grid.appendChild(document.createElement("div"));
      const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
      for (let d = 1; d <= days; d++) {
        const k = iso(new Date(first.getFullYear(), first.getMonth(), d));
        const c = document.createElement("div"); c.className = "d"; c.textContent = d;
        if (k < todayKey) c.classList.add("past");
        else if (isBooked(k)) { c.classList.add("booked"); c.title = lang === "en" ? "Booked" : "Κλεισμένη"; }
        if (k === todayKey) c.classList.add("today");
        grid.appendChild(c);
      }
      box.append(h, grid); calMonths.appendChild(box);
    }
    calUpdated.textContent = updatedAt
      ? (lang === "en" ? "Last updated: " : "Τελευταία ενημέρωση: ") +
        updatedAt.toLocaleString(loc, { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })
      : "";
  }
  if (calMonths) {
    calPrev.addEventListener("click", () => { offset -= perView(); renderCalendar(); });
    calNext.addEventListener("click", () => { offset += perView(); renderCalendar(); });
    window.matchMedia("(max-width: 960px)").addEventListener("change", renderCalendar);
    fetch("data/availability.json?t=" + Date.now(), { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!j) return;
        booked = Array.isArray(j.booked) ? j.booked : [];
        updatedAt = j.updated ? new Date(j.updated) : null;
        renderCalendar();
      })
      .catch(() => {});
  }


  // ---------- Header on scroll, menu overlay ----------
  const nav = document.getElementById("top");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 60);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const menu = document.getElementById("menu");
  function openMenu() { menu.hidden = false; requestAnimationFrame(() => menu.classList.add("open")); document.body.style.overflow = "hidden"; }
  function closeMenu() { menu.classList.remove("open"); document.body.style.overflow = ""; setTimeout(() => { menu.hidden = true; }, 350); }
  document.getElementById("menuOpen").addEventListener("click", openMenu);
  document.getElementById("menuClose").addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) closeMenu(); });

  // ---------- Reveal on scroll ----------
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); obs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    window.__revealObs = obs;
    document.querySelectorAll(".reveal, .reveal-img, .ph").forEach((el) => obs.observe(el));
  } else {
    document.querySelectorAll(".reveal, .reveal-img, .ph").forEach((el) => el.classList.add("in"));
  }

  // ---------- Gentle parallax on the band ----------
  const bandBg = document.querySelector(".band-bg");
  if (bandBg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const band = bandBg.parentElement;
    const par = () => {
      const r = band.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const t = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      bandBg.style.transform = "translateY(" + (t * -60).toFixed(1) + "px)";
    };
    window.addEventListener("scroll", par, { passive: true }); par();
  }

  // ---------- Initial language ----------
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const initial = saved || ((navigator.language || "el").toLowerCase().startsWith("el") ? "el" : "en");
  if (initial === "en") setLang("en"); else { renderGallery(); renderCalendar(); }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
