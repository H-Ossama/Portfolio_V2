export const portfolioConfig = {
  // Personal Information - Persönliche Informationen
  personal: {
    name: "Oussama HATTAN",
    title: "Full-Stack-Webentwickler | React & Node.js Spezialist",
    tagline: "Web-Entwickler mit starken Full-Stack-Fähigkeiten, spezialisiert auf die Entwicklung responsiver und skalierbarer Webanwendungen. Erfahren in Frontend (HTML, CSS, JS) und Backend (PHP, Python, SQL, MongoDB) mit Kenntnissen in TDD, APIs und Netzwerksicherheit.",
    bio: "Web-Entwickler mit starken Full-Stack-Fähigkeiten, spezialisiert auf die Entwicklung responsiver und skalierbarer Webanwendungen. Erfahren in Frontend (HTML, CSS, JS) und Backend (PHP, Python, SQL, MongoDB) mit Kenntnissen in TDD, APIs und Netzwerksicherheit. Bewiesene Fähigkeit, sauberen, wartbaren Code durch akademische und reale Projekte zu liefern.",
    location: "M'RIRT, MOROCCO",
    location_description: "Mit Sitz in Marokko bin ich immer begeistert, neue Herausforderungen anzunehmen und mit Teams zu arbeiten, die eine Leidenschaft für Innovation und Qualität teilen. Ob es um die Erstellung responsiver Benutzeroberflächen oder die Entwicklung robuster Backend-Systeme geht, ich gehe jedes Projekt mit Enthusiasmus und Liebe zum Detail an.",
    interests: "Wenn ich nicht programmiere, finden Sie mich dabei, die neuesten Webentwicklungstrends zu erkunden, zu Open-Source-Projekten beizutragen oder neue Technologien zu lernen, um in diesem sich schnell entwickelnden Bereich vorne zu bleiben.",
    profileImage: "/images/Ousaama.jpg?v=1", // Professionelles Foto mit transparentem Hintergrund
  },

  // Contact Information - Kontaktinformationen
  contact: {
    email: "ossamahattan@gmail.com",
    phone: "+212 658559662",
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    whatsapp: "+212 658559662",
  },

  // Skills organized by category - Fähigkeiten nach Kategorien geordnet
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsives Design"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Python",
      "REST-APIs"
    ],
    database: [
      "MongoDB",
      "MySQL"
    ],
    networking: [
      "Netzwerksicherheit",
      "Computernetzwerke",
      "Datenbankarchitektur",
      "Computersicherheit"
    ],
    development: [
      "Testgetriebene Entwicklung (TDD)",
      "APIs",
      "OAuth",
      "JWT",
      "Git",
      "Agile/Scrum"
    ],
    languages: [
      "Englisch (Beruflich)",
      "Arabisch (Muttersprache)",
      "Französisch (Mittelstufe)"
    ],
    soft_skills: [
      "Schnelles Lernen",
      "Technische Analyse",
      "Technische Kommunikation",
      "Technische Dokumentation",
      "Komplexe Problemlösung",
      "Teamzusammenarbeit"
    ]
  },

  // Education - Bildung
  education: [
    {
      degree: "Bachelor in Webentwicklung",
      institution: "MULTIHEXA, Meknès",
      year: "09/2024 - 08/2025",
      grade: "17,67/20",
      description: "Umfassendes Webentwicklungsprogramm, das Datenbankarchitektur, Netzwerksicherheit, Computersicherheit und Agile/Scrum-Methodologien abdeckt.",
      certificates: [
        {
          name: "Diplomzertifikat",
          image: "/certificates/FEDE Bachelor Diplomat.jpg"
        },
        {
          name: "Akademisches Zeugnis",
          image: "/certificates/FEDE Relever de note.jpg"
        }
      ]
    },
    {
      degree: "Zertifikat in Software-Engineering (12-Monats-Bootcamp)",
      institution: "ALX, Casablanca",
      year: "08/2023 - 10/2024",
      grade: "",
      description: "Intensives 12-monatiges Software-Engineering-Bootcamp, das Full-Stack-Entwicklung, Algorithmen, Datenstrukturen, Systemdesign und moderne Entwicklungspraktiken abdeckt."
    },
    {
      degree: "Spezialisierter Techniker für Computer- und Netzwerksysteme",
      institution: "GROUPE EFET - ÉCOLE FRANÇAISE D'ENSEIGNEMENT TECHNIQUE",
      year: "2021 - 2023",
      grade: "",
      description: "Interaktives Schulverwaltungssystem mit Kursanmeldung, Notenverfolgung, Studentenprofilen und Verwaltungsdashboard.",
      certificates: [
        {
          name: "Technisches Diplom",
          image: "/certificates/EFET.jpg"
        }
      ]
    }
  ],

  // Projects - Projekte
  projects: [
    {
      id: 1,
      title: "AUTOVERMIETUNGSPLATTFORM",
      description: "Eine vollständige Autovermietungs-Webanwendung mit responsiver HTML5/CSS3-Oberfläche, sicherem Buchungssystem und optimierter Datenbank.",
      techStack: ["PHP", "Laravel", "JavaScript", "Git", "HTML5", "CSS3"],
      githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
      liveUrl: "", // Hinzufügen wenn verfügbar
      screenshots: [
        "/images/cars_rental_screenshots/Capture%20d%27%C3%A9cran.png",
        "/images/cars_rental_screenshots/Capture_d%27%C3%A9cran1.png",
        "/images/cars_rental_screenshots/Capture_d%27%C3%A9cran2.png",
        "/images/cars_rental_screenshots/Capture_d%27%C3%A9cran3.png",
        "/images/cars_rental_screenshots/Capture_d%27%C3%A9cran4.png",
        "/images/cars_rental_screenshots/Capture_d%27%C3%A9cran5.png",
        "/images/cars_rental_screenshots/Capture_d%27%C3%A9cran6.png"
      ],
      image: "/images/project-1.svg",
      featured: true,
      period: "09/2024 - 04/2025",
      role: "Lead Developer für Architektur, Datenbankdesign und Implementierung des Buchungssystems.",
      problemsSolved: [
        "Sichere Authentifizierung mit rollenbasierter Zugriffskontrolle (Kunde/Admin)",
        "Optimiertes MySQL-Schema für Suche und Buchungsverwaltung",
        "Responsiver Buchungsflow mit Datumsvalidierung und Verfügbarkeitschecks",
        "Admin-Tools für Flotten- und Buchungsmanagement"
      ],
      purpose: "Eine vollständige Autovermietungsplattform mit zuverlässigem Buchungs- und Admin-Workflow bereitstellen."
    },
    {
      id: 2,
      title: "CinemaHalal",
      description: "Familienfreundliches persönliches Media-Center mit Content-Filtering, TMDB-Integration und hybrider Streaming-Architektur.",
      techStack: ["JavaScript", "Node.js", "Tailwind CSS", "WebTorrent", "TMDB API", "HTML", "CSS"],
      githubUrl: "https://github.com/H-Ossama/CinimaHalal",
      liveUrl: "",
      screenshots: [
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033426.png",
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033435.png",
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033448.png",
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033454.png",
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033501.png",
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033512.png",
        "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033526.png"
      ],
      image: "/images/Cinima-Halal/Capture%20d%27%C3%A9cran%202026-01-08%20033426.png",
      featured: true,
      problemsSolved: [
        "Family Mode zum Ausblenden expliziter/ Horror/ Thriller-Kategorien",
        "Sanitizing von Metadaten und Profanity-Filtering",
        "TMDB-Browsing mit reichhaltigen Infos und Empfehlungen",
        "Hybrider Media-Flow: Relay-Server + WebTorrent"
      ],
      purpose: "Eine Premium-Streaming-ähnliche UX mit familiengerechter Discovery und flexibler Media-Delivery demonstrieren."
    },
    {
      id: 3,
      title: "Job Finder & CV AI Assistant",
      description: "KI-gestützte Plattform für ATS-kompatible CVs und effizientere Jobsuche mit Auth, Tracking und Automatisierung.",
      techStack: ["Next.js", "React", "Supabase", "PostgreSQL", "OAuth"],
      githubUrl: "https://github.com/H-Ossama/Job-Finder",
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Sichere Authentifizierung (E-Mail + OAuth)",
        "KI-unterstützter CV Builder (ATS-friendly)",
        "Jobsuche und Bewerbungs-Tracking",
        "Automations-ready Struktur (n8n)"
      ],
      purpose: "Jobsuchenden helfen, bessere CVs zu erstellen und Bewerbungen zentral zu verwalten."
    },
    {
      id: 4,
      title: "Smart E-Commerce Platform",
      description: "Moderne E-Commerce-Plattform mit React und TypeScript, ausgelegt auf Performance, Responsive UI und zukünftige AI-Features.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      githubUrl: "https://github.com/H-Ossama/Smart_E-Commerce_Platform",
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Responsive Produktnavigation und Katalog",
        "Warenkorb- und State-Management",
        "Skalierbare Frontend-Architektur",
        "Grundlage für Empfehlungen, Chat und Admin"
      ],
      purpose: "Als Grundlage für ein vollständiges, modernes E-Commerce-Produkt dienen."
    },
    {
      id: 5,
      title: "SCHULVERWALTUNGSSYSTEM",
      description: "Vollständige Schulverwaltungsanwendung mit HTML5-Oberfläche, Noten- und Zahlungsmanagement und optimierter relationaler Datenbank für Bildungseinrichtungen.",
      techStack: ["Python", "MySQL", "HTML5"],
      githubUrl: "https://github.com/H-Ossama/school-management-system",
      liveUrl: "https://web-production-20d60.up.railway.app",
      projectUrl: "https://web-production-20d60.up.railway.app",
      screenshots: [
        "/images/efet-screenshots/efet-screenshot-1.png",
        "/images/efet-screenshots/efet-screenshot-2.png",
        "/images/efet-screenshots/efet-screenshot-3.png",
        "/images/efet-screenshots/efet-screenshot-4.png"
      ],
      image: "/images/project-3.svg",
      featured: true,
      period: "06/2023",
      role: "Backend-Fokus: Datenbankdesign, Business-Logik und Reporting.",
      problemsSolved: [
        "Normalisiertes relationales Datenmodell für Schuldaten",
        "Notenberechnung mit konfigurierbaren Gewichtungen",
        "Reporting für Leistungsanalysen",
        "Zahlungs-Tracking inkl. Ratenplanung"
      ],
      purpose: "Schulverwaltung modernisieren, indem Noten, Zahlungen und Reports zentralisiert werden."
    },
    {
      id: 6,
      title: "Universal Admin Panel",
      description: "Modernes, skalierbares Admin-Dashboard mit modularer Architektur, wiederverwendbarem CRUD-System und Rollenverwaltung.",
      techStack: ["React", "Next.js", "Tailwind CSS", "JWT", "Fetch/Axios"],
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Wiederverwendbares CRUD (Pagination, Suche, Filter)",
        "Modulare Struktur für unterschiedliche Business-Use-Cases",
        "Responsive UI (Dark/Light ready)",
        "Basis für Analytics und Dashboard-Widgets"
      ],
      purpose: "Admin-Dashboard-Logik nicht jedes Mal neu bauen, sondern als wiederverwendbare Basis nutzen."
    }
  ],

  // Mobile Projects (AI-assisted)
  mobileProjects: [
    {
      id: 101,
      title: "Parental Guard",
      description: "Android-Parental-Control-Lösung mit Parent Controller und Child Agent für Monitoring, App-Locks und Usage-Reports.",
      techStack: ["Kotlin", "Jetpack Compose", "Ktor", "Room", "WorkManager"],
      githubUrl: "https://github.com/H-Ossama/Family-Guard",
      liveUrl: "",
      screenshots: [
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021123.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021143.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021157.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021226.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021231.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021241.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_022151.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_022247.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_022252.jpg"
      ],
      image: "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021123.jpg",
      featured: true,
      problemsSolved: [
        "Echtzeit-Monitoring und App-Nutzungsberichte",
        "Remote App-Lock/Unlock und Kategorie-Limits",
        "Sicheres Pairing via QR + Biometrie",
        "Robuster Child-Agent mit nicht überspringbaren Lockscreens"
      ],
      purpose: "Eltern robuste Tools für digitale Sicherheit und Nutzungssteuerung geben."
    },
    {
      id: 102,
      title: "FinTracker",
      description: "Offline-first Personal Finance Tracker mit Expo/React Native + TypeScript (lokale Speicherung als Default).",
      techStack: ["Expo", "React Native", "TypeScript", "SQLite", "React Navigation"],
      githubUrl: "https://github.com/H-Ossama/FINEX",
      liveUrl: "",
      screenshots: [
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-1.png",
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-2.png",
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-3.png",
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-4.png",
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-5.png",
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-6.png"
      ],
      image: "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-1.png",
      featured: true,
      problemsSolved: [
        "Mehrere Wallets, Transfers und Budgeting",
        "Local-first Storage für Privacy und Offline-Nutzung",
        "Charts und Insights",
        "Erweiterbar für optionales Backend"
      ],
      purpose: "Finanztracking mit Fokus auf Privacy, Offline-Fähigkeit und guter UX."
    },
    {
      id: 103,
      title: "Tijarati (تجارتي)",
      description: "Premium Buchhaltungs-App für Händler mit moderner UI, Lagerverwaltung, Partner-Splits, Lokalisierung und KI-Insights (Gemini).",
      techStack: ["Expo", "React Native", "SQLite", "Firebase", "Node.js", "Gemini API"],
      githubUrl: "https://github.com/H-Ossama/TIJARATI",
      liveUrl: "",
      screenshots: [
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021801_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021812_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021820_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021827_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021835_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021848_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021857_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021905_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021922_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021936_TIJARATI.jpg"
      ],
      image: "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021801_TIJARATI.jpg",
      featured: true,
      problemsSolved: [
        "Schnelles Transaction-Tracking und Profit-Insights",
        "Stock-Management und Debt-Book",
        "Mehrsprachigkeit (Darija/Arabisch/Französisch/Englisch)",
        "KI-Assistent für Business-Analysen"
      ],
      purpose: "Kleinen Businesses eine premium mobile Buchhaltungslösung mit KI-unterstützten Insights bieten."
    }
  ],

  // Certifications - Zertifizierungen (optional)
  certifications: [
    {
      name: "IBM Zertifikat in Computernetzwerken und Netzwerksicherheit",
      issuer: "IBM - Coursera",
      date: "12/2024",
      description: "Zertifizierung in Netzwerksicherheit, Netzwerkprotokollen und Netzwerkarchitektur.",
      image: "/certificates/ibm-networks-security.pdf", // oder .jpg
      url: "https://www.coursera.org/account/accomplishments/verify/EQIGIS8IV9VK"
    },
    {
      name: "Computernetzwerke und Netzwerksicherheit",
      issuer: "Coursera",
      date: "11/2024",
      description: "Erweiterte Zertifizierung, die Computernetzwerkarchitektur, Protokolle und umfassende Netzwerksicherheitsprinzipien abdeckt.",
      image: "/certificates/computer-networks-security.pdf", // oder .jpg
      url: "https://www.coursera.org/account/accomplishments/verify/EQIGIS8IV9VK"
    }
  ] as Array<{
    name: string;
    issuer: string;
    date: string;
    description?: string;
    image?: string;
    url?: string;
  }>,

  // Social Media Links - Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    twitter: "", // Hinzufügen wenn verfügbar
    instagram: "", // Hinzufügen wenn verfügbar
  },

  // Resume/CV link - Lebenslauf-Link
  resume: "/certificates/Oussma_Hattan_Resume.pdf", // Aktualisiert, um der aktuellen CV-Datei zu entsprechen

  // Website metadata - Website-Metadaten
  meta: {
    title: "Oussama HATTAN - Full-Stack-Webentwickler | React & Node.js Spezialist",
    description: "Portfolio von Oussama HATTAN, Full-Stack-Webentwickler aus Marokko, spezialisiert auf React, Node.js und moderne Webtechnologien. Engagieren Sie Oussama für Ihr nächstes Webprojekt.",
    keywords: "Oussama HATTAN, Oussama, HATTAN, Webentwickler Marokko, Marokkanischer Entwickler, Full-Stack Entwickler, React Entwickler, Node.js Entwickler, JavaScript Entwickler, PHP Entwickler, Python Entwickler, Portfolio, Webentwickler einstellen, Freiberuflicher Entwickler",
    author: "Oussama HATTAN",
    url: "https://hattan-portfolio.vercel.app", // Durch aktuelle Domain ersetzen
  },

  // Section content for translations - Abschnittsinhalt für Übersetzungen
  sections: {
    about: {
      yearsExperience: "Jahre Erfahrung",
      projectsCompleted: "Abgeschlossene Projekte"
    },
    skills: {
      coreSkills: "Kernkompetenzen",
      description: "Schlüsseltechnologien und -fähigkeiten, die ich beherrsche, um moderne und sichere Weblösungen zu entwickeln.",
      summary: "Fähigkeiten, die durch Webentwicklungsausbildung und Spezialisierung in Netzwerkverwaltung erworben wurden."
    },
    projects: {
      featuredProjects: "Hervorgehobene Projekte",
      description: "Eine Präsentation meiner jüngsten Arbeit, die verschiedene Technologien und Problemlösungsansätze demonstriert",
      moreProjects: "Weitere Projekte",
      wantToSeeMore: "Möchten Sie mehr sehen?",
      githubDescription: "Schauen Sie sich mein GitHub-Profil für weitere Projekte, Beiträge und Code-Beispiele an. Ich entwickle und experimentiere ständig mit neuen Technologien.",
      viewGithubProfile: "GitHub-Profil ansehen"
    },
    mobileProjects: {
      title: "Mobile Projekte",
      subtitle: "(mit KI-Unterstützung)",
      description: "Mobile Apps, die während der Entwicklung mit KI-Unterstützung gebaut wurden – Fokus auf Offline-First, Zuverlässigkeit und saubere UX."
    },
    education: {
      description: "Meine akademische Grundlage und kontinuierliche Lernreise in der Webentwicklung",
      continuousLearning: "Kontinuierliche Lernmentalität",
      learningDescription: "Über die formale Bildung hinaus glaube ich an die Bedeutung des kontinuierlichen Lernens in der sich schnell entwickelnden Tech-Industrie. Ich beschäftige mich regelmäßig mit Online-Kursen, technischen Blogs, Entwicklergemeinschaften und Open-Source-Projekten, um mit den neuesten Technologien und Best Practices auf dem Laufenden zu bleiben. Mein Ziel ist es, niemals aufzuhören zu lernen und als Entwickler zu wachsen."
    },
    contact: {
      letsStartConversation: "Lassen Sie uns ein Gespräch beginnen",
      description: "Bereit, über Ihr nächstes Projekt zu diskutieren oder möchten Sie einfach nur Hallo sagen? Ich würde gerne von Ihnen hören!"
    }
  }
};

export default portfolioConfig;