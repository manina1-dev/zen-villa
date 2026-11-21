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
    "contact.lead": "See available dates and book securely through Airbnb. We're here to answer any question you have – send us a WhatsApp message, an email or give us a call.",
    "footer.addr": "Faidras 11, Schinias, 19007 Attica, Greece",
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
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  document.getElementById("langToggle").addEventListener("click", () => setLang(lang === "en" ? "el" : "en"));

  // ---------- Links from config ----------
  document.querySelectorAll(".airbnb-link").forEach((a) => { a.href = C.airbnbUrl || "#"; });
  document.querySelectorAll(".contact-phone").forEach((a) => {
    if (!C.phone) return a.remove();
    a.href = "tel:" + C.phone.replace(/\s/g, "");
    a.querySelector(".phone-num").textContent = C.phone;
  });
  document.querySelectorAll(".contact-email").forEach((a) => {
    if (!C.email) return a.remove();
    a.href = "mailto:" + C.email;
    a.querySelector(".email-addr").textContent = C.email;
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
      grid.appendChild(b);
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

  // ---------- Initial language ----------
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const initial = saved || ((navigator.language || "el").toLowerCase().startsWith("el") ? "el" : "en");
  if (initial === "en") setLang("en"); else renderGallery();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
