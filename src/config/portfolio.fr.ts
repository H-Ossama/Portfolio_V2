export const portfolioConfig = {
  // Personal Information - Informations Personnelles
  personal: {
    name: "Oussama HATTAN",
    title: "Développeur Web Full-Stack | Spécialiste React & Node.js",
    tagline: "Développeur Web avec de solides compétences full-stack, spécialisé dans la création d'applications web responsives et évolutives. Expérimenté en front-end (HTML, CSS, JS) et back-end (PHP, Python, SQL, MongoDB) avec des connaissances en TDD, APIs et sécurité réseau.",
    bio: "Développeur Web avec de solides compétences full-stack, spécialisé dans la création d'applications web responsives et évolutives. Expérimenté en front-end (HTML, CSS, JS) et back-end (PHP, Python, SQL, MongoDB) avec des connaissances en TDD, APIs et sécurité réseau. Capacité prouvée à livrer un code propre et maintenable à travers des projets académiques et réels.",
    location: "M'RIRT, Moroccco",
    location_description: "Basé au Maroc, je suis toujours enthousiaste à l'idée de relever de nouveaux défis et de collaborer avec des équipes qui partagent une passion pour l'innovation et la qualité. Que ce soit pour créer des interfaces utilisateur responsives ou développer des systèmes backend robustes, j'aborde chaque projet avec enthousiasme et attention aux détails.",
    interests: "Quand je ne code pas, vous pouvez me trouver en train d'explorer les dernières tendances du développement web, de contribuer à des projets open-source, ou d'apprendre de nouvelles technologies pour rester à la pointe dans ce domaine en évolution rapide.",
    profileImage: "/images/Ousaama.jpg?v=1", // Photo professionnelle avec arrière-plan transparent
  },

  // Contact Information - Informations de Contact
  contact: {
    email: "ossamahattan@gmail.com",
    phone: "+212 658559662",
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    whatsapp: "+212 658559662",
  },

  // Skills organized by category - Compétences organisées par catégorie
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Design Responsive"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Python",
      "APIs REST"
    ],
    database: [
      "MongoDB",
      "MySQL"
    ],
    networking: [
      "Sécurité Réseau",
      "Réseaux Informatiques",
      "Architecture de Base de Données",
      "Sécurité informatique"
    ],
    development: [
      "Développement Dirigé par les Tests (TDD)",
      "APIs",
      "OAuth",
      "JWT",
      "Git",
      "Agile/Scrum"
    ],
    languages: [
      "Anglais (Professionnel)",
      "Arabe (Natif)",
      "Français (Intermédiaire)"
    ],
    soft_skills: [
      "Apprentissage Rapide",
      "Analyse Technique",
      "Communication Technique",
      "Documentation Technique",
      "Résolution de Problèmes Complexes",
      "Collaboration d'Équipe"
    ]
  },

  // Education - Éducation
  education: [
    {
      degree: "Licence en Développement Web",
      institution: "MULTIHEXA, Meknès",
      year: "09/2024 - 08/2025",
      grade: "17,67/20",
      description: "Programme complet de développement web couvrant l'Architecture de Base de Données, la Sécurité Réseau, la Sécurité informatique et les méthodologies Agile/Scrum.",
      certificates: [
        {
          name: "Certificat de Diplôme",
          image: "/certificates/FEDE Bachelor Diplomat.jpg"
        },
        {
          name: "Relevé de Notes Académique",
          image: "/certificates/FEDE Relever de note.jpg"
        }
      ]
    },
    {
      degree: "Certificat d'Ingénierie Logicielle (Bootcamp de 12 mois)",
      institution: "ALX, Casablanca",
      year: "08/2023 - 10/2024",
      grade: "",
      description: "Bootcamp intensif de 12 mois en ingénierie logicielle couvrant le développement full-stack, les algorithmes, les structures de données, la conception de systèmes et les pratiques de développement modernes."
    },
    {
      degree: "Technicien Spécialisé en Systèmes et Réseaux Informatiques",
      institution: "GROUPE EFET - ÉCOLE FRANÇAISE D'ENSEIGNEMENT TECHNIQUE",
      year: "2021 - 2023",
      grade: "",
      description: "Système de gestion scolaire interactif avec inscription aux cours, suivi des notes, profils d'étudiants et tableau de bord administratif.",
      certificates: [
        {
          name: "Diplôme Technique",
          image: "/certificates/EFET.jpg"
        }
      ]
    }
  ],

  // Projects - Projets
  projects: [
    {
      id: 1,
      title: "PLATEFORME DE LOCATION DE VOITURES",
      description: "Une application web complète de location de voitures avec interface responsive HTML5/CSS3, système de réservation sécurisé et base de données optimisée.",
      techStack: ["PHP", "Laravel", "JavaScript", "Git", "HTML5", "CSS3"],
      githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
      liveUrl: "", // Ajouter si disponible
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
      role: "Lead developer responsable de l'architecture, de la conception BDD et de l'implémentation du système de réservation.",
      problemsSolved: [
        "Authentification sécurisée avec contrôle d'accès par rôles (client/admin)",
        "Schéma MySQL optimisé pour la recherche et la gestion des réservations",
        "Flux de réservation responsive avec validation des dates et disponibilité",
        "Historique et outils d'administration pour la gestion de flotte"
      ],
      purpose: "Fournir une plateforme complète de location de voitures avec une expérience utilisateur fluide et des outils administratifs fiables."
    },
    {
      id: 2,
      title: "CinemaHalal",
      description: "Centre média personnel orienté famille avec filtrage avancé, intégration TMDB et architecture de streaming hybride.",
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
        "Family Mode pour masquer contenus explicites/horreur/thriller",
        "Sanitization des métadonnées et filtre de grossièretés",
        "Navigation TMDB avec metadata riche et recommandations",
        "Streaming hybride relay server + WebTorrent"
      ],
      purpose: "Démontrer une expérience 'streaming premium' avec découverte sécurisée et architecture média flexible."
    },
    {
      id: 3,
      title: "Job Finder & CV AI Assistant",
      description: "Plateforme pilotée par l'IA pour créer des CV compatibles ATS et organiser la recherche d'emploi (auth, suivi, automatisation).",
      techStack: ["Next.js", "React", "Supabase", "PostgreSQL", "OAuth"],
      githubUrl: "https://github.com/H-Ossama/Job-Finder",
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Authentification sécurisée (email + OAuth)",
        "Générateur de CV assisté par IA (ATS-friendly)",
        "Recherche et suivi des candidatures",
        "Structure prête pour l'automatisation via n8n"
      ],
      purpose: "Aider les candidats à créer de bons CV et à gérer leurs candidatures dans une seule plateforme."
    },
    {
      id: 4,
      title: "Smart E-Commerce Platform",
      description: "Plateforme e-commerce moderne en React/TypeScript, pensée pour la performance et des évolutions IA à venir.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      githubUrl: "https://github.com/H-Ossama/Smart_E-Commerce_Platform",
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Catalogue responsive et navigation produits",
        "Gestion du panier et de l'état applicatif",
        "Architecture front évolutive",
        "Préparation pour recommandations, chat et admin"
      ],
      purpose: "Servir de base solide pour un produit e-commerce complet et moderne."
    },
    {
      id: 5,
      title: "SYSTÈME DE GESTION SCOLAIRE",
      description: "Application de gestion scolaire complète avec interface HTML5, gestion des notes et paiements, et base de données relationnelle optimisée pour les établissements scolaires.",
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
      role: "Développement backend : conception BDD, logique métier et reporting.",
      problemsSolved: [
        "Conception d'un schéma relationnel normalisé",
        "Calcul de notes avec pondérations configurables",
        "Module de reporting pour le suivi des performances",
        "Suivi des paiements avec gestion des échéances"
      ],
      purpose: "Centraliser les notes, paiements et rapports pour moderniser l'administration scolaire."
    },
    {
      id: 6,
      title: "Universal Admin Panel",
      description: "Dashboard admin moderne et extensible avec modules plug-and-play, CRUD générique et gestion des rôles.",
      techStack: ["React", "Next.js", "Tailwind CSS", "JWT", "Fetch/Axios"],
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "CRUD réutilisable (pagination, recherche, filtres)",
        "Structure modulaire pour s'adapter à différents métiers",
        "UI responsive prête pour dark/light mode",
        "Base pour analytics et tableaux de bord"
      ],
      purpose: "Éviter de reconstruire un dashboard admin à chaque nouveau projet grâce à une base réutilisable."
    }
  ],

  // Mobile Projects (AI-assisted) - Projets Mobiles (assistés par IA)
  mobileProjects: [
    {
      id: 101,
      title: "Parental Guard",
      description: "Solution Android de contrôle parental avec une app Parent Controller et un Child Agent pour monitoring, blocage d'apps et rapports d'usage.",
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
        "Monitoring en temps réel et rapports d'utilisation",
        "Verrouillage distant d'apps et limites par catégories",
        "Appairage sécurisé via QR + protection biométrique",
        "Protection 'child agent' avec écrans de blocage non contournables"
      ],
      purpose: "Donner aux parents des outils solides pour protéger les enfants et gérer l'usage du smartphone."
    },
    {
      id: 102,
      title: "FinTracker",
      description: "Suivi de finances personnelles offline-first avec Expo/React Native et TypeScript (données stockées localement par défaut).",
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
        "Portefeuilles multiples avec transferts et budgets",
        "Stockage local pour la confidentialité et l'accès hors-ligne",
        "Graphiques et insights pour analyser les dépenses",
        "Architecture extensible avec backend optionnel"
      ],
      purpose: "Offrir un suivi financier simple, privé et utilisable sans connexion."
    },
    {
      id: 103,
      title: "Tijarati (تجارتي)",
      description: "Application premium de comptabilité pour commerçants avec UI moderne, stock, partage des profits, localisation et insights IA (Gemini).",
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
        "Suivi rapide des transactions et profits en temps réel",
        "Gestion du stock et carnet de dettes",
        "Multi-langues (Darija/Arabe/Français/Anglais)",
        "Assistant IA pour analyser les données business"
      ],
      purpose: "Aider les petits commerçants à gérer comptabilité, stock et profits dans une expérience mobile premium."
    }
  ],

  // Certifications (optionnel)
  certifications: [
    {
      name: "Certificat IBM en Réseaux Informatiques et Sécurité Réseau",
      issuer: "IBM - Coursera",
      date: "12/2024",
      description: "Certification en sécurité des réseaux, protocoles réseau et architecture réseau.",
      image: "/certificates/ibm-networks-security.pdf", // ou .jpg
      url: "https://www.coursera.org/account/accomplishments/verify/EQIGIS8IV9VK"
    },
    {
      name: "Réseaux Informatiques et Sécurité Réseau",
      issuer: "Coursera",
      date: "11/2024",
      description: "Certification avancée couvrant l'architecture des réseaux informatiques, les protocoles et les principes complets de sécurité réseau.",
      image: "/certificates/computer-networks-security.pdf", // ou .jpg
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

  // Social Media Links - Liens Réseaux Sociaux
  social: {
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    twitter: "", // Ajouter si disponible
    instagram: "", // Ajouter si disponible
  },

  // Resume/CV link - Lien CV
  resume: "/certificates/Oussma_Hattan_Resume.pdf", // Mis à jour pour correspondre au fichier CV actuel

  // Website metadata - Métadonnées du site web
  meta: {
    title: "Oussama HATTAN - Développeur Web Full-Stack | Spécialiste React & Node.js",
    description: "Portfolio d'Oussama HATTAN, Développeur Web Full-Stack du Maroc spécialisé en React, Node.js et technologies web modernes. Engagez Oussama pour votre prochain projet web.",
    keywords: "Oussama HATTAN, Oussama, HATTAN, développeur web Maroc, développeur marocain, développeur full-stack, développeur React, développeur Node.js, développeur JavaScript, développeur PHP, développeur Python, portfolio, embaucher développeur web, développeur freelance",
    author: "Oussama HATTAN",
    url: "https://hattan-portfolio.vercel.app", // Remplacer par le domaine actuel
  },

  // Section content for translations - Contenu des sections pour les traductions
  sections: {
    about: {
      yearsExperience: "Années d'Expérience",
      projectsCompleted: "Projets Réalisés"
    },
    skills: {
      coreSkills: "Compétences Clés",
      description: "Technologies et compétences clés que je maîtrise pour développer des solutions web modernes et sécurisées.",
      summary: "Compétences acquises à travers une formation en développement web et une spécialisation en administration réseau."
    },
    projects: {
      featuredProjects: "Projets Phares",
      description: "Une vitrine de mon travail récent, démontrant diverses technologies et approches de résolution de problèmes",
      moreProjects: "Plus de Projets",
      wantToSeeMore: "Vous voulez en voir plus ?",
      githubDescription: "Consultez mon profil GitHub pour plus de projets, contributions et échantillons de code. Je construis et expérimente constamment avec de nouvelles technologies.",
      viewGithubProfile: "Voir le Profil GitHub"
    },
    mobileProjects: {
      title: "Projets Mobiles",
      subtitle: "(assistés par IA)",
      description: "Applications mobiles développées avec l'aide de l'IA, orientées fiabilité, stockage offline-first et UX soignée."
    },
    education: {
      description: "Mes fondations académiques et mon parcours d'apprentissage continu en développement web",
      continuousLearning: "Mentalité d'Apprentissage Continu",
      learningDescription: "Au-delà de l'éducation formelle, je crois en l'importance de l'apprentissage continu dans l'industrie technologique en évolution rapide. Je m'engage régulièrement avec des cours en ligne, des blogs techniques, des communautés de développeurs et des projets open-source pour rester à jour avec les dernières technologies et meilleures pratiques. Mon objectif est de ne jamais arrêter d'apprendre et de grandir en tant que développeur."
    },
    contact: {
      letsStartConversation: "Commençons une conversation",
      description: "Prêt à discuter de votre prochain projet ou voulez-vous simplement dire bonjour ? J'aimerais avoir de vos nouvelles !"
    }
  }
};

export default portfolioConfig;