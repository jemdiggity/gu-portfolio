// All editable content for the site lives in this file.
// Fields marked "fill in" were not supplied yet; leave a field as "" to hide it.

const SITE = {
  name: "Gu Jungun",
  role: "Architecture, renovation and furniture",
  tagline: "Architecture, renovation and furniture. Two large renovations in Myoko, Japan, and cabinetry made by hand.",
  city: "",                          // fill in, e.g. "Calgary" or "Myoko"
  email: "gu@example.com",           // fill in the real address
  instagram: "",                     // e.g. "https://instagram.com/…"; leave "" to hide
  issued: "2026",
  heroImage: "",                     // e.g. "images/site/gu-on-the-tools.jpg"; leave "" to show the line drawing
  heroImageAlt: "",
  // Photos of Gu on site and on the tools. Add as many as you like; the section hides if empty.
  onSite: {
    text: "Gu is on site through construction, and often on the tools herself. The cabinetry is made by hand, and much of the renovation work in Myoko was carried out with the crew rather than only drawn for them.",
    photos: [
      { src: "images/placeholder-site.svg", caption: "Replace with an on-site photo" },
      { src: "images/placeholder-site.svg", caption: "Replace with an on-site photo" },
      { src: "images/placeholder-site.svg", caption: "Replace with an on-site photo" }
    ]
  },
  intro: [
    "Gu Jungun works across architecture, renovation and furniture. Her built work includes two large renovations in Myoko, in the snow country of Niigata, Japan, called Tampopo 1 and Tampopo 2.",
    "Alongside buildings she designs and makes furniture and built-in cabinetry: kitchens, bathroom vanity counters and storage. Her training runs from engineering at Pusan National University through architecture at Seoul Cyber University to the Master of Architecture program at the University of Calgary."
  ],
  cv: [
    ["Master of Architecture", "University of Calgary"],
    ["Architecture", "Seoul Cyber University"],
    ["Engineering", "Pusan National University"],
    ["Furniture and cabinetry", "Kitchens, bathroom vanities, storage"]
  ]
};

// Series group the index. Sheet prefixes follow them: A-1xx built, A-2xx academic, F-1xx furniture.
const SERIES = [
  { id: "built",     title: "Built work" },
  { id: "academic",  title: "Academic work" },
  { id: "furniture", title: "Furniture and cabinetry" }
];

const PROJECTS = [
  {
    slug: "tampopo-1",
    series: "built",
    sheet: "A-101",
    title: "Tampopo 1",
    location: "Myoko, Japan",
    year: "",                        // fill in
    status: "Built",
    type: "Renovation",
    area: "",                        // fill in
    role: "Design",
    drawing: "drawings/tampopo-1.svg",
    summary: "The first of two large renovations in Myoko, a town in the heavy-snow country of Niigata Prefecture.",
    body: [
      // fill in: what the building was, what changed, materials, how the snow was handled.
      "Tampopo 1 is a full renovation of an existing building in Myoko. A description of the existing condition, the brief and the work carried out will follow."
    ],
    drawings: [
      { src: "drawings/tampopo-1.svg", caption: "Plan, placeholder drawing" }
    ],
    // Before-and-after pairs. Each pair is shown side by side; put matching views together.
    beforeAfter: [
      { before: "images/placeholder-before.svg", after: "images/placeholder-after.svg", caption: "Replace with a matching before-and-after view" },
      { before: "images/placeholder-before.svg", after: "images/placeholder-after.svg", caption: "Replace with a matching before-and-after view" }
    ],
    // Photos taken during the work.
    process: [
      { src: "images/placeholder-site.svg", caption: "Replace with a photo from the site" }
    ]
  },
  {
    slug: "tampopo-2",
    series: "built",
    sheet: "A-102",
    title: "Tampopo 2",
    location: "Myoko, Japan",
    year: "",                        // fill in
    status: "Built",
    type: "Renovation",
    area: "",                        // fill in
    role: "Design",
    drawing: "drawings/tampopo-2.svg",
    summary: "The second large renovation in Myoko, following Tampopo 1.",
    body: [
      // fill in
      "Tampopo 2 is the second of the two Myoko renovations. A description of the existing condition, the brief and the work carried out will follow."
    ],
    drawings: [
      { src: "drawings/tampopo-2.svg", caption: "Section, placeholder drawing" }
    ],
    // Before-and-after pairs. Each pair is shown side by side; put matching views together.
    beforeAfter: [
      { before: "images/placeholder-before.svg", after: "images/placeholder-after.svg", caption: "Replace with a matching before-and-after view" },
      { before: "images/placeholder-before.svg", after: "images/placeholder-after.svg", caption: "Replace with a matching before-and-after view" }
    ],
    // Photos taken during the work.
    process: [
      { src: "images/placeholder-site.svg", caption: "Replace with a photo from the site" }
    ]
  },
  {
    slug: "calgary-foundation-year",
    series: "academic",
    sheet: "A-201",
    title: "Foundation year studio",
    location: "University of Calgary",
    year: "",                        // fill in
    status: "Master of Architecture",
    type: "Studio projects",
    area: "",
    role: "Student work",
    drawing: "drawings/calgary-foundation.svg",
    summary: "Projects from the foundation year of the Master of Architecture program at the University of Calgary.",
    body: [
      // fill in: split this into one entry per project once names and drawings are ready.
      "Studio projects from the foundation year of the MArch program. Individual projects, with drawings and models, will be listed here."
    ],
    drawings: [
      { src: "drawings/calgary-foundation.svg", caption: "Placeholder drawing" }
    ]
  },
  {
    slug: "seoul-cyber-undergraduate",
    series: "academic",
    sheet: "A-202",
    title: "Undergraduate studio",
    location: "Seoul Cyber University",
    year: "",                        // fill in
    status: "Bachelor's, architecture",
    type: "Studio projects",
    area: "",
    role: "Student work",
    drawing: "drawings/seoul-cyber.svg",
    summary: "Projects from the architecture program at Seoul Cyber University.",
    body: [
      // fill in: split this into one entry per project once names and drawings are ready.
      "Studio projects from the undergraduate architecture program. Individual projects, with drawings and models, will be listed here."
    ],
    drawings: [
      { src: "drawings/seoul-cyber.svg", caption: "Placeholder drawing" }
    ]
  },
  {
    slug: "kitchen-cabinets",
    series: "furniture",
    sheet: "F-101",
    title: "Kitchen cabinets",
    location: "",
    year: "",
    status: "Made",
    type: "Built-in cabinetry",
    area: "",
    role: "Design and making",
    drawing: "drawings/kitchen-cabinets.svg",
    summary: "Fitted kitchen cabinetry, designed and built for specific rooms.",
    body: [
      // fill in: materials, joinery, the kitchens they were made for.
      "Kitchen cabinets designed and made to fit particular rooms. Notes on materials, hardware and finishes will follow."
    ],
    drawings: [
      { src: "drawings/kitchen-cabinets.svg", caption: "Elevation, placeholder drawing" }
    ]
  },
  {
    slug: "bathroom-vanities",
    series: "furniture",
    sheet: "F-102",
    title: "Bathroom vanity counters",
    location: "",
    year: "",
    status: "Made",
    type: "Built-in cabinetry",
    area: "",
    role: "Design and making",
    drawing: "drawings/bathroom-vanity.svg",
    summary: "Lavatory counters and vanity units with integrated storage.",
    body: [
      // fill in
      "Bathroom vanity counters with storage below. Notes on countertop materials, basins and finishes will follow."
    ],
    drawings: [
      { src: "drawings/bathroom-vanity.svg", caption: "Elevation and section, placeholder drawing" }
    ]
  },
  {
    slug: "furniture",
    series: "furniture",
    sheet: "F-103",
    title: "Furniture",
    location: "",
    year: "",
    status: "Made",
    type: "Freestanding pieces",
    area: "",
    role: "Design and making",
    drawing: "drawings/furniture.svg",
    summary: "Tables, shelving and other freestanding pieces.",
    body: [
      // fill in
      "Freestanding furniture made alongside the cabinetry work. Individual pieces will be listed here."
    ],
    drawings: [
      { src: "drawings/furniture.svg", caption: "Elevation, placeholder drawing" }
    ]
  }
];
