// All editable content for the site lives in this file.
// Fields marked "fill in" were not supplied yet; leave a field as "" to hide it.

const SITE = {
  name: "Gu Jungun",
  role: "Architecture, renovation and furniture",
  tagline: "Architecture, renovation and furniture. Two large renovations in Myoko, Japan, and cabinetry made by hand.",
  city: "",                          // fill in, e.g. "Calgary" or "Myoko"
  email: "gu.jungun@gmail.com",
  instagram: "",                     // e.g. "https://instagram.com/…"; leave "" to hide
  issued: "2026",
  portrait: "images/portrait.jpg",   // shown in About; leave "" to hide
  // Photos of Gu on site and on the tools. The section hides if the list is empty.
  onSite: {
    text: "Gu is on site through construction, and often on the tools herself. The cabinetry is made by hand, and much of the renovation work in Myoko was carried out with the crew rather than only drawn for them.",
    photos: [
      { src: "images/tampopo-1/chimney.jpg", caption: "Fitting the stove flue, Tampopo 1" },
      { src: "images/site/roof-framing.jpg", caption: "Cutting roof framing" },
      { src: "images/site/nail-gun.jpg", caption: "Lining a room" },
      { src: "images/site/table-saw.jpg", caption: "At the table saw" },
      { src: "images/kitchen/carcasses.jpg", caption: "Kitchen island carcasses in the workshop" },
      { src: "images/kitchen/painting.jpg", caption: "Painting a cabinet" }
    ]
  },
  intro: [
    "Gu Jungun works across architecture, renovation and furniture. Her built work includes two large renovations in Myoko, in the snow country of Niigata, Japan, called Tampopo 1 and Tampopo 2.",
    "Alongside buildings she designs and makes furniture and built-in cabinetry: kitchens, bathroom vanity counters and storage.",
    "She began her career as an electrical engineer in South Korea's shipbuilding industry, working for Hanwha Ocean and BP (British Petroleum), before turning to architecture. Her training runs from engineering at Pusan National University through architecture at Digital Seoul Culture Arts University to the Master of Architecture program at the University of Calgary."
  ],
  cv: [
    ["Master of Architecture", "University of Calgary"],
    ["Architecture", "Digital Seoul Culture Arts University"],
    ["Engineering", "Pusan National University"],
    ["Earlier career", "Electrical engineer, shipbuilding: Hanwha Ocean and BP (British Petroleum)"],
    ["Furniture and cabinetry", "Kitchens, bathroom vanities, storage"]
  ]
};

// Series group the work on the home page. "wide" shows that group two tiles per row instead of three.
const SERIES = [
  { id: "built",     title: "Built work", wide: true },
  { id: "academic",  title: "Academic work" },
  { id: "furniture", title: "Furniture and cabinetry" }
];

// Each project can have: cover, beforeAfter (pairs), process (during the work),
// photos (finished work, shown in a grid), drawings (full width, with captions).
const PROJECTS = [
  {
    slug: "tampopo-1",
    series: "built",
    title: "Tampopo 1",
    location: "Myoko, Japan",
    year: "",                        // fill in
    status: "Built",
    type: "Renovation of a timber farmhouse",
    area: "",                        // fill in
    role: "Design and construction",
    cover: "images/tampopo-1/exterior-autumn.jpg",
    summary: "The first of two large renovations in Myoko, a town in the heavy-snow country of Niigata Prefecture: an old post-and-beam farmhouse of tatami rooms, rebuilt inside as one tall kitchen and dining room and re-clad in wood under its red metal roof.",
    body: [
      // fill in: what the building was, what changed, materials, how the snow was handled.
      "The house was a traditional farmhouse: dark timber posts and beams, plastered panels and tatami rooms opening into one another. It was taken back to its frame and rebuilt from the inside out.",
      "Downstairs, the kitchen, dining and living rooms became one tall room under an exposed roof, lit by a row of high windows. A kitchen island, made in the workshop, sits at its centre. Outside, the walls were wrapped, insulated and clad in vertical boards. The red roof was kept, and a new stove flue was fitted through it."
    ],
    beforeAfter: [
      { before: "images/tampopo-1/before-exterior.jpg", after: "images/tampopo-1/exterior-autumn.jpg", caption: "the front" },
      { before: "images/tampopo-1/before-main-room.jpg", after: "images/tampopo-1/dining.jpg", caption: "the main room became the dining room" }
    ],
    before: [
      { src: "images/tampopo-1/before-front.jpg", caption: "The house from the lane" }
    ],
    photos: [
      { src: "images/tampopo-1/kitchen-hall.jpg", caption: "The kitchen under the roof" }
    ],
    process: [
      { src: "images/tampopo-1/before-winter.jpg", caption: "Wrapping the frame, midwinter" },
      { src: "images/tampopo-1/chimney.jpg", caption: "Fitting the stove flue" }
    ],
    drawings: [
      { src: "images/tampopo-1/view-first-floor.jpg", caption: "First floor, design model" },
      { src: "images/tampopo-1/view-second-floor.jpg", caption: "Second floor, design model" },
      { src: "images/tampopo-1/view-second-floor-section.jpg", caption: "Section through the second floor" },
      { src: "images/tampopo-1/view-kitchen-living.jpg", caption: "Kitchen towards the living room" },
      { src: "images/tampopo-1/view-living-dining.jpg", caption: "Living room towards the dining room" },
      { src: "images/tampopo-1/view-dining-kitchen.jpg", caption: "Dining room towards the kitchen" },
      { src: "images/tampopo-1/view-entrance-kitchen.jpg", caption: "Entrance towards the kitchen" },
      { src: "images/tampopo-1/view-living-entrance.jpg", caption: "Living room towards the entrance" },
      { src: "images/tampopo-1/view-entrance-bath.jpg", caption: "Entrance towards the bath" }
    ]
  },
  {
    slug: "tampopo-2",
    series: "built",
    title: "Tampopo 2",
    location: "Myoko, Japan",
    year: "",                        // fill in
    status: "Built",
    type: "Renovation of a family house",
    area: "",                        // fill in
    role: "Design and construction",
    cover: "images/tampopo-2/kitchen.jpg",
    summary: "The second large renovation in Myoko: a green-sided family house of small tatami rooms, opened up and refitted with a new kitchen, washroom and living room.",
    body: [
      // fill in
      "The house had a narrow hall, a stainless-steel kitchen from the 1970s and a run of tatami rooms divided by sliding screens, with the family altar in the main room. The main room became the kitchen, the screened rooms beside it the dining room, and the old kitchen the washroom and dressing counter. A run of coral-coloured cabinets and a long wooden table make the kitchen; the washroom has a double basin on a timber stand and a dressing counter under the window."
    ],
    beforeAfter: [
      { before: "images/tampopo-2/before-altar.jpg", after: "images/tampopo-2/kitchen-run.jpg", caption: "the main room with the family altar became the kitchen" },
      { before: "images/tampopo-2/before-rooms.jpg", after: "images/tampopo-2/kitchen.jpg", caption: "the rooms divided by screens became the dining room" },
      { before: "images/tampopo-2/before-kitchen.jpg", after: "images/tampopo-2/washroom-wide.jpg", caption: "the old kitchen became the washroom and dressing counter" },
      { before: "images/tampopo-2/before-living.jpg", after: "images/tampopo-2/living.jpg", caption: "the living room" }
    ],
    photos: [
      { src: "images/tampopo-2/washroom.jpg", caption: "Double basin on a timber stand" },
      { src: "images/tampopo-2/vanity.jpg", caption: "Dressing counter" }
    ],
    before: [
      { src: "images/tampopo-2/before-exterior.jpg", caption: "The house before the work" },
      { src: "images/tampopo-2/before-hall.jpg", caption: "Entrance hall" },
      { src: "images/tampopo-2/before-tatami.jpg", caption: "Tatami room" },
      { src: "images/tampopo-2/before-tatami-rooms.jpg", caption: "Tatami rooms, cleared out" }
    ],
    process: [
      { src: "images/tampopo-2/during-interior.jpg", caption: "Rooms stripped back, midwinter" },
      { src: "images/tampopo-2/during-kitchen.jpg", caption: "Kitchen carcasses going in" }
    ]
  },
  {
    slug: "calgary-foundation-year",
    series: "academic",
    title: "Foundation year studio",
    location: "University of Calgary",
    year: "",                        // fill in
    status: "Master of Architecture",
    type: "Studio projects and models",
    area: "",
    role: "Student work",
    cover: "images/calgary/render-5.jpg",
    summary: "Projects from the foundation year of the Master of Architecture program at the University of Calgary: a courtyard building in rammed earth around a single tree, and study models of a faceted shell over a stepped stage.",
    body: [
      // fill in: split this into one entry per project once names are ready.
      "In the courtyard project, thick earthen walls wrap a paved court around one tree. Openings are cut as deep reveals, and a mirrored wall on one side doubles the garden.",
      "The models, in card and paper, test a faceted shell over a stepped stage, with cut-out figures to check the scale of the spaces beneath it."
    ],
    drawings: [
      { src: "images/calgary/render-5.jpg", caption: "Courtyard project, the court" },
      { src: "images/calgary/render-1.jpg", caption: "Courtyard project, entrance" },
      { src: "images/calgary/render-3.jpg", caption: "Courtyard project, openings in the earth wall" },
      { src: "images/calgary/render-4.jpg", caption: "Courtyard project, terrace" },
      { src: "images/calgary/render-6.jpg", caption: "Courtyard project, looking into the court" },
      { src: "images/calgary/render-2.jpg", caption: "Courtyard project, approach" },
      { src: "images/calgary/render-7.jpg", caption: "Courtyard project, car court" }
    ],
    photos: [
      { src: "images/calgary/model-1.jpg", caption: "Model, entry ramp" },
      { src: "images/calgary/model-2.jpg", caption: "Model, under the arch" },
      { src: "images/calgary/model-3.jpg", caption: "Model, the upper walk" },
      { src: "images/calgary/model-4.jpg", caption: "Model, the shell" }
    ]
  },
  // Digital Seoul Culture Arts University: add an entry here once there are photographs.
  {
    slug: "kitchen-cabinets",
    series: "furniture",
    title: "Kitchen cabinets",
    location: "",
    year: "",
    status: "Made",
    type: "Built-in cabinetry",
    area: "",
    role: "Design and making",
    cover: "images/kitchen/island-1.jpg",
    summary: "Kitchen islands and cabinets, designed and built for the Myoko houses.",
    body: [
      "The island for Tampopo 1 is a painted timber frame with a hardwood butcher-block top, three drawers on full-extension runners and open shelves below for plates. A second run of white cabinets carries the range and its counters.",
      "Carcasses are built in the workshop and finished in place."
    ],
    photos: [
      { src: "images/kitchen/island-2.jpg", caption: "Island with drawers open" },
      { src: "images/kitchen/island-3.jpg", caption: "Island in the kitchen" },
      { src: "images/kitchen/island-4.jpg", caption: "Drawer fronts and pulls" },
      { src: "images/kitchen/island-6.jpg", caption: "Drawers on runners" },
      { src: "images/kitchen/island-7.jpg", caption: "Butcher-block top" },
      { src: "images/kitchen/white-kitchen.jpg", caption: "Range cabinets" }
    ],
    process: [
      { src: "images/kitchen/carcasses.jpg", caption: "Carcasses in the workshop" },
      { src: "images/kitchen/painting.jpg", caption: "Painting" }
    ]
  },
  {
    slug: "bathroom-vanities",
    series: "furniture",
    title: "Bathroom vanity counters",
    location: "",
    year: "",
    status: "Made",
    type: "Built-in cabinetry",
    area: "",
    role: "Design and making",
    cover: "images/bathroom/washstand.jpg",
    summary: "Washstands and vanity counters on timber frames, with open shelves below.",
    body: [
      "Each basin sits on a simple softwood frame, left open underneath so the room stays light. Counters are solid timber, oiled."
    ],
    photos: [
      { src: "images/bathroom/washstand.jpg", caption: "Washstand" },
      { src: "images/tampopo-2/washroom.jpg", caption: "Double basin, Tampopo 2" },
      { src: "images/tampopo-2/vanity.jpg", caption: "Dressing counter, Tampopo 2" },
      { src: "images/bathroom/small-sink.jpg", caption: "Small basin on a shelf" }
    ],
    process: [
      { src: "images/bathroom/spraying.jpg", caption: "Spraying a vanity frame" }
    ]
  },
  {
    slug: "furniture",
    series: "furniture",
    title: "Furniture",
    location: "",
    year: "",
    status: "Made",
    type: "Freestanding pieces",
    area: "",
    role: "Design and making",
    cover: "images/furniture/console.jpg",
    summary: "Tables and small pieces made alongside the cabinetry.",
    body: [
      "A console table in dark-stained softwood and a slatted white side table, both built from stock timber."
    ],
    photos: [
      { src: "images/furniture/console.jpg", caption: "Console table" },
      { src: "images/furniture/side-table.jpg", caption: "Side table" }
    ]
  }
];
