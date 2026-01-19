export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Oussama HATTAN",
    title: "Développeur Web Full-Stack | Spécialiste React & Node.js",
    tagline: "Développeur Web avec de solides compétences full-stack, spécialisé dans la création d'applications web responsives et évolutives.",
    bio: "Développeur Web avec de solides compétences full-stack, spécialisé dans la création d'applications web responsives et évolutives. Expérimenté en front-end (HTML, CSS, JS) et back-end (PHP, Python, SQL, MongoDB) avec des connaissances en TDD, APIs et sécurité réseau.",
    location: "M'RIRT, MAROC",
    location_description: "Basé au Maroc, je suis toujours enthousiaste à l'idée de relever de nouveaux défis.",
    interests: "Quand je ne code pas, vous pouvez me trouver en train d'explorer les dernières tendances du développement web.",
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
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Design Responsive"],
    backend: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "APIs REST"],
    database: ["MongoDB", "MySQL"],
    networking: ["Sécurité Réseau", "Réseaux Informatiques", "Architecture de BDD", "Sécurité Informatique"],
    development: ["TDD", "APIs", "OAuth", "JWT", "Git", "Agile/Scrum"],
    languages: ["Anglais (Pro)", "Arabe (Natif)", "Français (Intermédiaire)"],
    soft_skills: ["Apprentissage Rapide", "Analyse Technique", "Résolution de Problèmes", "Collaboration"]
  },

  education: [
    {
      degree: "Licence en Développement Web",
      institution: "MULTIHEXA, Meknès",
      year: "09/2024 - 08/2025",
      description: "Programme complet couvrant l'Architecture de BDD et la Sécurité Réseau.",
      certificates: [
        { name: "Certificat de Diplôme", image: "/certificates/FEDE Bachelor Diplomat.jpg" },
        { name: "Relevé de Notes", image: "/certificates/FEDE Relever de note.jpg" }
      ]
    },
    {
      degree: "Certificat d'Ingénierie Logicielle",
      institution: "ALX, Casablanca",
      year: "08/2023 - 10/2024",
      description: "Bootcamp intensif de 12 mois couvrant le développement full-stack."
    }
  ],

  projects: [
    {
      id: 102,
      title: "FinTracker",
      category: "Développement Mobile",
      description: "Suivi de finances personnelles offline-first avec Expo/React Native et TypeScript (données stockées localement par défaut).",
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
      strategy: "Stockage local-first et gestion privée des données",
      client: "FinTracker",
      technology: "Expo, React Native"
    },
    {
      id: 1,
      title: "CAR RENTAL PLATFORM",
      category: "Développement Web",
      description: "Une application web complète de location de voitures avec interface responsive HTML5/CSS3.",
      techStack: ["PHP", "Laravel", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
      image: "/images/cars_rental_screenshots/Capture%20d%27%C3%A9cran.png",
      featured: false,
      strategy: "Architecture basée sur les composants avec gestion d'état robuste",
      client: "Agence de Location",
      technology: "Laravel, PHP, JavaScript"
    },
    {
      id: 2,
      title: "CinemaHalal",
      category: "Média & Streaming",
      description: "Centre média personnel orienté famille avec filtrage avancé et architecture de streaming hybride.",
      techStack: ["JavaScript", "Node.js", "Tailwind CSS", "WebTorrent"],
      githubUrl: "https://github.com/H-Ossama/CinimaHalal",
      image: "/images/Cinima-Halal/screenshot-1.png",
      featured: true,
      strategy: "Nœuds de streaming hybrides avec sanitization des métadonnées",
      client: "Projet Personnel",
      technology: "JavaScript, Node.js, WebTorrent"
    }
  ],

  mobileProjects: [
    {
      id: 101,
      title: "Parental Guard",
      category: "Sécurité Mobile",
      description: "Solution de contrôle parental Android avec monitoring en temps réel.",
      techStack: ["Kotlin", "Jetpack Compose", "Ktor"],
      githubUrl: "https://github.com/H-Ossama/Family-Guard",
      image: "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021123.jpg",
      featured: true,
      strategy: "Surveillance par agent privilégié avec relais sécurisé",
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
    title: "Oussama HATTAN - Développeur Backend Web",
    description: "Portfolio d'Oussama HATTAN, Développeur Backend Web spécialisé en Node.js et Python.",
    keywords: "Oussama HATTAN, développeur backend, Node.js, Python, Architecture API, Base de données",
    author: "Oussama HATTAN",
    url: "https://hattan-portfolio.vercel.app",
  },

  sections: {
    about: { yearsExperience: "Années d'Expérience", projectsCompleted: "Projets Réalisés" },
    skills: { coreSkills: "Compétences Clés", description: "Technologies maîtrisées.", summary: "Compétences acquises en formation." },
    projects: { featuredProjects: "Projets Phares", description: "Vitrines de mes travaux récents.", moreProjects: "Plus de Projets", wantToSeeMore: "En voir plus ?", githubDescription: "Consultez mon GitHub pour plus.", viewGithubProfile: "Voir Profil GitHub" },
    mobileProjects: { title: "Projets Mobiles", subtitle: "(IA assistée)", description: "Apps mobiles construites avec l'aide de l'IA." },
    education: { description: "Mes fondations académiques.", continuousLearning: "Apprentissage Continu", learningDescription: "L'apprentissage ne s'arrête jamais." },
    contact: { letsStartConversation: "Commençons une conversation", description: "Prêt à discuter de votre projet ?" }
  }
};

export default portfolioConfig;