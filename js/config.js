// ===========================================================
//  ΡΥΘΜΙΣΕΙΣ — Αλλάξτε εδώ τα στοιχεία της βίλας.
//  SETTINGS — Edit the villa details here.
// ===========================================================
window.VILLA = {
  // Ο σύνδεσμος της αγγελίας στο Airbnb
  airbnbUrl: "https://www.airbnb.gr/rooms/26647630",

  // Στοιχεία επικοινωνίας (αφήστε κενό "" για να κρυφτεί το κουμπί)
  phone: "+30 697 404 6224",
  whatsapp: "",   // αριθμός για WhatsApp χωρίς + και κενά, π.χ. "306974046224" (κενό "" = κρυφό)
  email: "zenvillabookings@gmail.com",
  instagram: "https://www.instagram.com/zenvillaschinias/",

  // Φωτογραφίες ανά χώρο. Αρχεία στο images/gallery/ (μικρές εκδοχές στο images/gallery/thumbs/).
  // Λεζάντα σε ελληνικά (el) και αγγλικά (en). Η σειρά εδώ είναι η σειρά στο site.
  galleries: {
    ground: [
      { src: "ground-01", el: "Σαλόνι – από την κουζίνα ως τη μεγάλη σκεπαστή βεράντα", en: "Living room – from the kitchen to the large covered veranda" },
      { src: "ground-02", el: "Το σαλόνι από την κουζίνα", en: "Living room from kitchen area" },
      { src: "ground-03", el: "Τζάκι και τηλεόραση", en: "Fireplace and TV" },
      { src: "ground-04", el: "Το τζάκι – λεπτομέρεια", en: "Fireplace – detail" },
      { src: "ground-05", el: "Σαλόνι – προαιρετικός χώρος ύπνου με κουρτίνες αριστερά", en: "Living room – optional sleeping area with curtains on the left" },
      { src: "ground-06", el: "Καθιστικό", en: "Seating area" },
      { src: "ground-07", el: "Καθιστικό", en: "Seating area" },
      { src: "ground-08", el: "Σαλόνι προς την κουζίνα – χώρος για επιπλέον ύπνο δεξιά", en: "Living room towards the kitchen – extra sleeping area on the right" },
      { src: "ground-09", el: "Καναπές-κρεβάτι για 2 στο σαλόνι", en: "Bed settee sleeps 2 in the living area" },
      { src: "ground-10", el: "Κουζίνα με μπαρ φαγητού", en: "Kitchen with dining bar" },
      { src: "ground-11", el: "Η κουζίνα από τη σκεπαστή βεράντα", en: "Kitchen seen from the covered veranda" },
      { src: "ground-12", el: "Το μπαρ φαγητού", en: "Dining bar – close up" },
      { src: "ground-13", el: "Χώρος μαγειρέματος", en: "Cooking area" },
      { src: "ground-14", el: "…και ο νεροχύτης!", en: "…and the kitchen sink!" },
      { src: "ground-15", el: "Διάδρομος – υπνοδωμάτια δεξιά και αριστερά", en: "Hall – bedrooms to the right and left" },
      { src: "ground-16", el: "Υπνοδωμάτιο 1 – το κύριο υπνοδωμάτιο", en: "Bedroom 1 – main bedroom" },
      { src: "ground-17", el: "Υπνοδωμάτιο 1 – προς το ιδιωτικό μπάνιο", en: "Bedroom 1 – towards the en-suite" },
      { src: "ground-18", el: "Μπάνιο 1 – ιδιωτικό μπάνιο του κύριου υπνοδωματίου", en: "Bathroom 1 – en-suite of the main bedroom" },
      { src: "ground-19", el: "Υπνοδωμάτιο 2", en: "Bedroom 2" },
      { src: "ground-20", el: "Υπνοδωμάτιο 2 – τα κρεβάτια ενώνονται κατόπιν αιτήματος", en: "Bedroom 2 – beds can be moved together on request" },
      { src: "ground-21", el: "Μπάνιο 2 – δίπλα στο υπνοδωμάτιο 2", en: "Bathroom 2 – next door to Bedroom 2" },
    ],
    garden: [
      { src: "garden-16", el: "Βράδυ στην πισίνα – απολαύστε το κρασί σας!", en: "Evening by the pool – enjoy your wine!" },
      { src: "garden-05", el: "Πισίνα – χαλάρωση και δροσιά", en: "Pool – relax and refresh" },
      { src: "garden-04", el: "Κήπος και πισίνα – η θέα από την αιώρα", en: "Garden & pool – view from the hammock" },
      { src: "garden-06", el: "Η πισίνα από τα ρηχά", en: "Pool – from the shallow end" },
      { src: "garden-07", el: "Πέργκολα δίπλα στην πισίνα – κλείστε τη θέση σας εδώ :-)", en: "Poolside pergola – book your spot here :-)" },
      { src: "garden-08", el: "Κάτω από τη μικρή μουριά – εδώ φυσάει δροσερό αεράκι!", en: "Under the small mulberry tree – nice breeze here!" },
      { src: "garden-01", el: "Η είσοδος από τον κήπο", en: "Garden – front door entrance" },
      { src: "garden-02", el: "Ο σκύλος δεν περιλαμβάνεται – αλλά τα κατοικίδια είναι ευπρόσδεκτα!", en: "Dog not included – but pets are welcome!" },
      { src: "garden-03", el: "Η εξώπορτα με τον «φύλακα»", en: "Front door with guard dog" },
      { src: "garden-09", el: "Σκεπαστή βεράντα – από το σαλόνι", en: "Covered veranda – from inside the living area" },
      { src: "garden-10", el: "Σκεπαστή βεράντα – τραπέζια με ρόδες, τα μετακινείτε όπου θέλετε!", en: "Covered veranda – tables on wheels, move them where it suits you!" },
      { src: "garden-20", el: "Σκεπαστή βεράντα – εύκολο σερβίρισμα από την κουζίνα", en: "Covered veranda – easier to carry your food out here" },
      { src: "garden-11", el: "Η αιώρα – ιδανική για ξεκούραση", en: "Hammock – great to relax in" },
      { src: "garden-12", el: "Η χελώνα περιλαμβάνεται! Λατρεύει τις φλούδες καρπουζιού!", en: "Tortoise included! – he loves watermelon skins!" },
      { src: "garden-13", el: "Υπαίθρια τραπεζαρία κάτω από τη μεγάλη μουριά", en: "Outdoor dining under the big mulberry tree" },
      { src: "garden-14", el: "Υπαίθρια τραπεζαρία – λεπτομέρεια", en: "Outdoor dining area – detail" },
      { src: "garden-15", el: "Βράδυ στην πισίνα – δροσιά και χαλάρωση", en: "Evening by the pool – cool and relaxing" },
      { src: "garden-17", el: "Η πισίνα το βράδυ, κάτω από τη μουριά", en: "Evening pool – view from under the mulberry tree" },
      { src: "garden-18", el: "Υπαίθρια τραπεζαρία φωταγωγημένη για το βράδυ", en: "Outdoor dining – fully lit for the evening" },
      { src: "garden-19", el: "Δείπνο κάτω από τα φανάρια", en: "Dinner under the lanterns" },
      { src: "garden-21", el: "Φρούτα και δροσιστικά – μην ξεχάσετε τη φλούδα του καρπουζιού για τη χελώνα!", en: "Fruit and drinks – remember the tortoise for the watermelon skin!" },
    ],
    first: [
      { src: "first-01", el: "Υπνοδωμάτιο 3 – με μπαλκόνι προς τον κήπο", en: "Bedroom 3 – with balcony overlooking the garden" },
      { src: "first-02", el: "Υπνοδωμάτιο 3 – δύο άνετα κρεβάτια", en: "Bedroom 3 – two comfortable beds" },
      { src: "first-03", el: "Υπνοδωμάτιο 4 – άλλα δύο κρεβάτια", en: "Bedroom 4 – another two beds" },
      { src: "first-04", el: "Υπνοδωμάτιο 5 – το μικρότερο, πάλι με δύο κρεβάτια", en: "Bedroom 5 – our smallest bedroom, still two beds" },
      { src: "first-05", el: "Διάδρομος – υπνοδωμάτια 3 και 4 αριστερά και δεξιά", en: "Hall – Bedroom 3 & Bedroom 4 left and right" },
      { src: "first-06", el: "Μπάνιο 3 – ντουζιέρα και μπανιέρα", en: "Bathroom 3 – shower and bath" },
    ],
  },
};
