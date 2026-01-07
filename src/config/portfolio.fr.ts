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
      period: "09/2024 - 04/2025"
    },
    {
      id: 2,
      title: "CLONE AIRBNB",
      description: "Application web complète clone d'Airbnb avec inscription et authentification sécurisée (OAuth, JWT), recherche avec filtres, gestion des propriétés (hôtes) et réservations, intégration de API RESTful.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OAuth", "JWT"],
      githubUrl: "https://github.com/H-Ossama/airbnb-clone",
      liveUrl: "", // Ajouter si disponible
      image: "/images/project-2.svg",
      featured: true
    },
    {
      id: 3,
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
      period: "06/2023"
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