export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Oussama HATTAN",
    title: "Full-Stack Web-Entwickler | React & Node.js Spezialist",
    tagline: "Web-Entwickler mit starken Full-Stack-Fähigkeiten, spezialisiert auf die Erstellung responsiver und skalierbarer Webanwendungen.",
    bio: "Web-Entwickler mit starken Full-Stack-Fähigkeiten, spezialisiert auf die Erstellung responsiver und skalierbarer Webanwendungen. Erfahren in Front-End (HTML, CSS, JS) und Back-End (PHP, Python, SQL, MongoDB) mit Kenntnissen in TDD, APIs und Netzwerksicherheit.",
    location: "M'RIRT, MAROKKO",
    location_description: "Ich bin in Marokko ansässig und freue mich immer auf neue Herausforderungen.",
    interests: "Wenn ich nicht gerade code, erkunde ich die neuesten Webentwicklungstrends.",
    profileImage: "/images/Ousaama.jpg?v=1",
  },

  contact: {
    email: "ossamahattan@gmail.com",
    phone: "+212 658559662",
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    whatsapp: "+212 658559662",
  },

  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"],
    backend: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "REST-APIs"],
    database: ["MongoDB", "MySQL"],
    networking: ["Netzwerksicherheit", "Computernetzwerke", "Datenbankarchitektur", "IT-Sicherheit"],
    development: ["TDD", "APIs", "OAuth", "JWT", "Git", "Agile/Scrum"],
    languages: ["Englisch (Profi)", "Arabisch (Muttersprache)", "Französisch (Fortgeschritten)"],
    soft_skills: ["Schnelles Lernen", "Technische Analyse", "Problemlösung", "Teamarbeit"]
  },

  education: [
    {
      degree: "Bachelor in Webentwicklung",
      institution: "MULTIHEXA, Meknès",
      year: "09/2024 - 08/2025",
      description: "Umfassendes Webentwicklungsprogramm mit Schwerpunkt auf Datenbankarchitektur und Netzwerksicherheit.",
      certificates: [
        { name: "Diplomzertifikat", image: "/certificates/FEDE Bachelor Diplomat.jpg" },
        { name: "Akademisches Zeugnis", image: "/certificates/FEDE Relever de note.jpg" }
      ]
    }
  ],

  projects: [
    {
      id: 102,
      title: "FinTracker",
      category: "Mobile Entwicklung",
      description: "Offline-first persönlicher Finanz-Tracker, erstellt mit Expo + React Native und TypeScript.",
      techStack: ["Expo", "React Native", "TypeScript", "SQLite"],
      githubUrl: "https://github.com/H-Ossama/FINEX",
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
      strategy: "Local-First-Speicherung und privates Datenhandling",
      client: "FinTracker",
      technology: "Expo, React Native"
    },
    {
      id: 1,
      title: "CAR RENTAL PLATFORM",
      category: "Webentwicklung",
      description: "Eine komplette Webanwendung für Autovermietungen mit responsiver HTML5/CSS3-Oberfläche.",
      techStack: ["PHP", "Laravel", "JavaScript"],
      githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
      image: "/images/cars_rental_screenshots/Capture%20d%27%C3%A9cran.png",
      featured: false,
      strategy: "Komponentenbasierte Architektur mit robustem Zustandsmanagement",
      client: "Vermietungsagentur",
      technology: "Laravel, PHP, JavaScript"
    }
  ],

  mobileProjects: [
    {
      id: 101,
      title: "Parental Guard",
      category: "Mobile Sicherheit",
      description: "Android-Kindersicherungslösung mit Echtzeit-Überwachung.",
      techStack: ["Kotlin", "Jetpack Compose", "Ktor"],
      githubUrl: "https://github.com/H-Ossama/Family-Guard",
      image: "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021123.jpg",
      featured: true,
      strategy: "Privilegierte Agentenüberwachung mit sicherem Relay",
      client: "Parental Guard",
      technology: "Kotlin, Jetpack Compose"
    }
  ],

  social: {
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    whatsapp: "+212 658559662",
  },

  resume: "/certificates/Oussma_Hattan_Resume.pdf",

  meta: {
    title: "Oussama HATTAN - Backend-Webentwickler",
    description: "Portfolio von Oussama HATTAN, Backend-Webentwickler spezialisiert auf Node.js und Python.",
    keywords: "Oussama HATTAN, Backend-Entwickler, Node.js, Python, API-Architektur, Datenbankdesign",
    author: "Oussama HATTAN",
    url: "https://hattan-portfolio.vercel.app",
  },

  sections: {
    about: { yearsExperience: "Jahre Erfahrung", projectsCompleted: "Abgeschlossene Projekte" },
    skills: { coreSkills: "Kernkompetenzen", description: "Technologien, die ich beherrsche.", summary: "Erworbene Fähigkeiten durch Ausbildung." },
    projects: { featuredProjects: "Top-Projekte", description: "Ein Einblick in meine neuesten Arbeiten.", moreProjects: "Weitere Projekte", wantToSeeMore: "Wollen Sie mehr sehen?", githubDescription: "Besuchen Sie mein GitHub-Profil.", viewGithubProfile: "GitHub-Profil ansehen" },
    mobileProjects: { title: "Mobile Projekte", subtitle: "(KI-gestützt)", description: "Mobile Apps, die mit KI-Unterstützung erstellt wurden." },
    education: { description: "Meine akademische Grundlage.", continuousLearning: "Lebenslanges Lernen", learningDescription: "Lernen hört nie auf." },
    contact: { letsStartConversation: "Lassen Sie uns ein Gespräch beginnen", description: "Bereit, Ihr nächstes Projekt zu besprechen?" }
  }
};

export default portfolioConfig;