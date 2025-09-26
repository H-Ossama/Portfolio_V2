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
    github: "https://github.com/hattanoussama",
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
          image: "/certificates/MultyHexa.jpg"
        },
        {
          name: "Akademisches Zeugnis",
          image: "/certificates/MultyHexa-Releve-de-Notes.jpg"
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
      description: "Interaktives Schulverwaltungssystem mit Kursanmeldung, Notenverfolgung, Studentenprofilen und Verwaltungsdashboard. Erstellt mit modernen Webtechnologien und Datenbankdesign-Prinzipien.",
      certificates: [
        {
          name: "Technisches Diplom",
          image: "/certificates/EFET.jpg"
        }
      ],
      projectUrl: "https://web-production-20d60.up.railway.app",
      screenshots: [
        "/images/efet-screenshots/efet-screenshot-1.png",
        "/images/efet-screenshots/efet-screenshot-2.png",
        "/images/efet-screenshots/efet-screenshot-3.png",
        "/images/efet-screenshots/efet-screenshot-4.png"
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
      image: "/images/project-1.svg",
      featured: true,
      period: "09/2024 - 04/2025"
    },
    {
      id: 2,
      title: "AIRBNB-KLON",
      description: "Vollständige Airbnb-Klon-Webanwendung mit sicherer Registrierung und Authentifizierung (OAuth, JWT), Suche mit Filtern, Immobilienverwaltung (Gastgeber) und Buchungen, RESTful API-Integration.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OAuth", "JWT"],
      githubUrl: "https://github.com/hattanoussama/airbnb-clone",
      liveUrl: "", // Hinzufügen wenn verfügbar
      image: "/images/project-2.svg",
      featured: true
    },
    {
      id: 3,
      title: "SCHULVERWALTUNGSSYSTEM",
      description: "Vollständige Schulverwaltungsanwendung mit HTML5-Oberfläche, Noten- und Zahlungsmanagement und optimierter relationaler Datenbank für Bildungseinrichtungen.",
      techStack: ["Python", "MySQL", "HTML5"],
      githubUrl: "https://github.com/hattanoussama/school-management-system",
      liveUrl: "", // Hinzufügen wenn verfügbar
      image: "/images/project-3.svg",
      featured: true,
      period: "06/2023"
    },
    {
      id: 4,
      title: "Portfolio-Website",
      description: "Moderne und responsive Portfolio-Website, erstellt mit Next.js und Tailwind CSS. Beinhaltet flüssige Animationen, ein Kontaktformular und optimierte Leistung.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubUrl: "https://github.com/hattanoussama/portfolio",
      liveUrl: "", // Aktuelle Website
      image: "/images/project-4.svg",
      featured: false
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