/* =========================================================
   DATA SEMUA PROJECT
   Urutannya menentukan urutan nav "previous / next project".
   Samakan dengan urutan card di landing page.

   Cara nambah project:
   1. Buat folder assets/project/<slug>/
   2. Isi cover.png dan screenshot 01-web.png, 02-mobile.png, dst
   3. Tambah satu object di array di bawah

   Field yang dikosongkan ("") otomatis tidak ditampilkan.
   ========================================================= */

const PROJECTS = [
  {
    slug: "kaloka",
    name: "Kaloka",
    tagline: "Preserving local wisdom, sparking village literacy.",
    overview:
      "KALOKA is a web-based library information system built for Desa Sobokerto in Boyolali, Central Java. " +
      "It brings four modules into one platform: a local wisdom repository, tourism information for Waduk Cengklik, " +
      "a UMKM gallery, and an administration dashboard. The project ran on a Participatory Action Research approach " +
      "with two institutional partners, the Central Java Provincial Archives and Library Office and the Sobokerto " +
      "Village Government. I worked across the stack over three agile sprints, ending with user acceptance testing " +
      "alongside the village library staff. The dashboard is server-rendered with Blade while the " +
      "public portal is a React SPA, with both sides talking to the same REST API.",
    role: "Fullstack Developer",
    tech: [
      "Laravel (Backend & Session Auth)",
      "MySQL + Eloquent ORM (Database)",
      "REST API (JSON Layer)",
      "Blade + Bootstrap (Admin Dashboard)",
      "React 18 + React Router + Vite (Public Portal)",
      "TanStack Query (Client Data Fetching)",
      "Tailwind CSS (Public Portal Styling)"
    ],
    year: "2026",
    link: "https://kaloka.my.id",
    slides: ["01-web", "02-web", "03-web", "04-web", "05-web"]
  },

  {
    slug: "excellera",
    name: "Excellera",
    tagline: "Start over, move forward",
    overview:
      "ExCellera is a digital reintegration platform that helps formerly incarcerated people return to " +
      "work with dignity. Instead of behaving like an ordinary job board, it moves each user through a " +
      "fixed sequence: an AI-driven initial assessment, a personalised course path, twelve months of " +
      "guided on-the-job training, and job matching backed by a work-readiness certificate. A " +
      "RAG-based assistant named CELLA supports users throughout, drawing only on a curated internal " +
      "knowledge base so its answers stay safe, consistent, and free of stigma. The project was built " +
      "for HackAttack 2025 in Bandung, where it placed first nationally. I designed the whole " +
      "experience, from research and user flow to the interface itself.",
    role: "UI/UX Designer",
    tech: [
      "Figma (Design & Prototyping)",
      "Next.js (Frontend & API Routes)",
      "PostgreSQL + Prisma ORM (Database)",
      "Gemini AI + pgvector (CELLA RAG Assistant)",
      "JWT + bcryptjs (Authentication)"
    ],
    year: "2025",
    link: [
      { label: "", url: "https://excellera.vercel.app" },
      { label: "Excellera-Figma", url: "https://bit.ly/excellera-figma" }
    ],
    slides: ["01-web", "02-web", "03-web", "04-web", "05-web"]
  },

  {
    slug: "agrivo",
    name: "Agrivo",
    tagline: "Climate-Smart Irrigation, Powered by AI.",
    taglineGap: 16,
    overview:
      "AGRIVO is an irrigation decision support platform for Indonesian rice farmers. Most farmers still " +
      "flood their fields continuously because that is how it has always been done, which wastes water and " +
      "leaves harvests exposed to an increasingly unpredictable climate. AGRIVO reads field conditions, " +
      "live weather, and historical data, then recommends when and how much to irrigate, with a dashboard " +
      "tracking water use, projected yield, and estimated methane emissions. Its engine is a hybrid: a rule " +
      "engine filters out scientifically invalid options first, then an XGBoost model picks the final " +
      "strategy. Built with team NEXUSZ for Garuda Hacks 2026, a national hackathon competition.",
    role: "Frontend Developer",
    tech: [
      "Next.js + TypeScript (Frontend, App Router)",
      "Tailwind CSS + shadcn/ui (UI Components)",
      "Leaflet + OpenStreetMap (Field Mapping)",
      "FastAPI + Pydantic (Backend API)",
      "PostgreSQL + Alembic (Database)",
      "Rule Engine + XGBoost (Hybrid AI Engine)",
      "Open-Meteo (Weather Data)"
    ],
    year: "2026",
    link: "https://agrivo-zeta.vercel.app/landing",
    slides: ["01-web", "02-web", "03-web"]
  },

  {
    slug: "jangkau",
    name: "Jangkau",
    tagline: "",
    overview:
      "Jangkau is a mobile app that tells wheelchair users whether a government office in Yogyakarta is " +
      "actually accessible before they travel there. Indonesian law guarantees accessible public services, " +
      "but conditions on the ground vary and are rarely documented anywhere a user can check beforehand, so " +
      "a wasted trip is often only discovered on arrival. The app breaks each facility down element by " +
      "element, covering ramps, accessible toilets, guiding blocks, lifts, and priority seating, then keeps " +
      "that picture current through low-friction reports from users themselves. Those same reports flow to " +
      "the city's official inclusion forum, turning scattered field observations into something institutions " +
      "can act on. Accessibility shaped the interface itself, from WCAG contrast ratios to the Atkinson " +
      "Hyperlegible typeface.",
    role: "UI/UX Designer & Project Manager",
    tech: [
      "Figma (Wireframe, UI Design & Prototype)",
    ],
    year: "2026",
    link: [
      { label: "Jangkau-Prototype", url: "https://www.figma.com/proto/9fvx2Ill1nY6oOl1s60Rdq/UI-UX?node-id=22-2&t=eDZaYGKAmRO2rol1-1" }
    ],
    slides: ["01-mobile", "02-mobile", "03-mobile", "04-mobile", "05-mobile", "06-mobile", "07-mobile"]
  },

  {
    slug: "nestica",
    name: "Nestica",
    tagline: "A furniture marketplace built for student life.",
    overview:
      "Nestica is a web marketplace where students buy and sell furniture among themselves. Students move " +
      "in and out of rented rooms almost every year, and furniture is the hardest thing to carry along: too " +
      "bulky to move, too useful to throw away, and too expensive to keep replacing. General marketplaces " +
      "rarely help here, since listings come from anywhere and rarely match what a student room needs or " +
      "what a student budget allows. Nestica keeps the whole marketplace inside the student circle, so " +
      "listings stay nearby, affordable, and relevant to the way students actually live.",
    role: "Frontend Developer",
    tech: [
      "Laravel + PHP (Backend)",
      "Blade (Views & Templating)",
      "MySQL (Database)"
    ],
    year: "2025",
    link: [
      { label: "", url: "https://github.com/nicholasgunawann/ProjectPPL" },
      { label: "Nestica-Figma", url: "https://www.figma.com/design/zel9YB6mwT6qSyl1qCWUdI/PPL?node-id=113-18&t=9ETnsiRT6bK3s6mI-1" }
    ],
    slides: ["01-web", "02-web", "03-web", "04-web", "05-web"]
  },

  {
    slug: "dust-bunny",
    name: "Dust Bunny Unite!",
    tagline: "Cleaning house, one hidden bunny at a time.",
    overview:
      "Dust Bunny Unite! is an educational game that turns house cleaning into a treasure hunt for children " +
      "aged four and up. Players move through four rooms, a bedroom, a bathroom, a kitchen, and a living " +
      "room, tidying what is out of place and working through small cleaning mini-games along the way: " +
      "dragging a wiper across a window, flushing a toilet, scrubbing dishes in circles. Each room stays " +
      "locked until the one before it is spotless, and every room hides a bunny that only turns up if the " +
      "player looks carefully, with each one found joining a gallery worth coming back to. The whole game " +
      "is a fully interactive prototype built in Figma, shaped by Norman's design principles and Nielsen's " +
      "heuristics, then tested with thirteen users whose feedback drove a round of fixes to the in-game " +
      "guidance.",
    role: "UI/UX Designer & Prototyper",
    tech: [
      "Figma (Design & Interactive Prototype)",
    ],
    year: "2024",
    link: [
      { label: "Dust-Bunny-Prototype", url: "https://www.figma.com/proto/p9PL2lZrqoNPNnwGISb4TX/DBU-?node-id=447-78&viewport=479%2C-424%2C0.02&t=ulJ76lriTmY4MW3h-1&scaling=contain&content-scaling=fixed&starting-point-node-id=447%3A78&show-proto-sidebar=1&page-id=447%3A77" }
    ],
    slides: ["01-web", "02-web", "03-web", "04-web", "05-web", "06-web", "07-web"]
  }
];
