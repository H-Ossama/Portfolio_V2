export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Oussama HATTAN",
    title: "Full-Stack Web Developer | React & Node.js Specialist",
    tagline: "Web Developer with strong full-stack skills, specialized in building responsive and scalable web applications. Experienced in front-end (HTML, CSS, JS) and back-end (PHP, Python, SQL, MongoDB) with knowledge of TDD, APIs, and network security.",
    bio: "Web Developer with strong full-stack skills, specialized in building responsive and scalable web applications. Experienced in front-end (HTML, CSS, JS) and back-end (PHP, Python, SQL, MongoDB) with knowledge of TDD, APIs, and network security. Proven ability to deliver clean, maintainable code through academic and real-world projects.",
    location: "M'RIRT, MOROCCO",
    location_description: "Based in Morocco, I'm always excited to take on new challenges and collaborate with teams that share a passion for innovation and quality. Whether it's building responsive user interfaces or developing robust backend systems, I approach every project with enthusiasm and attention to detail.",
    interests: "When I'm not coding, you can find me exploring the latest web development trends, contributing to open-source projects, or learning new technologies to stay ahead in this rapidly evolving field.",
    profileImage: "/images/Ousaama.jpg?v=1", // Professional headshot with transparent background
  },

  // Contact Information
  contact: {
    email: "ossamahattan@gmail.com",
    phone: "+212 658559662",
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    whatsapp: "+212 658559662",
  },

  // Skills organized by category
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "Python",
      "REST APIs"
    ],
    database: [
      "MongoDB",
      "MySQL"
    ],
    networking: [
      "Network Security",
      "Computer Networks",
      "Database Architecture",
      "Computer Security"
    ],
    development: [
      "Test Driven Development (TDD)",
      "APIs",
      "OAuth",
      "JWT",
      "Git",
      "Agile/Scrum"
    ],
    languages: [
      "English (Professional)",
      "Arabic (Native)",
      "French (Intermediate)"
    ],
    soft_skills: [
      "Rapid Learning",
      "Technical Analysis",
      "Technical Communication",
      "Technical Documentation",
      "Complex Problem Solving",
      "Team Collaboration"
    ]
  },

  // Education
  education: [
    {
      degree: "Bachelor in Web Development",
      institution: "MULTIHEXA, Meknes",
      year: "09/2024 - 08/2025",
      grade: "17.67/20",
      description: "Comprehensive web development program covering Database Architecture, Network Security, Computer Security, and Agile/Scrum methodologies.",
      certificates: [
        {
          name: "Diploma Certificate",
          image: "/certificates/FEDE Bachelor Diplomat.jpg"
        },
        {
          name: "Academic Transcript",
          image: "/certificates/FEDE Relever de note.jpg"
        }
      ]
    },
    {
      degree: "Software Engineering Certificate (12-month Bootcamp)",
      institution: "ALX, Casablanca",
      year: "08/2023 - 10/2024",
      grade: "",
      description: "Intensive 12-month software engineering bootcamp covering full-stack development, algorithms, data structures, system design, and modern development practices."
    },
    {
      degree: "Technicien Spécialisé en Systèmes et Réseaux Informatiques",
      institution: "GROUPE EFET - ECOLE FRANÇAISE D'ENSEIGNEMENT TECHNIQUE",
      year: "2021 - 2023",
      grade: "",
      description: "Administration des réseaux, Configuration des équipements réseau, Sécurité informatique, Virtualisation et cloud computing.",
      certificates: [
        {
          name: "Technical Diploma",
          image: "/certificates/EFET.jpg"
        }
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "CAR RENTAL PLATFORM",
      description: "A complete car rental web application with responsive HTML5/CSS3 interface, secure reservation system, and optimized database.",
      techStack: ["PHP", "Laravel", "JavaScript", "Git", "HTML5", "CSS3"],
      githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
      liveUrl: "", // Add if available
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
      role: "Lead Developer responsible for the complete application architecture, database design, and implementation of the booking system.",
      problemsSolved: [
        "Implemented secure authentication with role-based access control (customer/admin)",
        "Designed an optimized MySQL schema for fast search and booking management",
        "Built a responsive reservation flow with date validation and availability checks",
        "Added booking history and administration tooling for fleet management"
      ],
      purpose: "Provide a complete, user-friendly car rental platform with reliable booking management and admin tools."
    },
    {
      id: 2,
      title: "CinemaHalal",
      description: "A family-first personal media center and content aggregator with advanced content filtering, TMDB integration, and hybrid streaming architecture.",
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
      role: "Full-stack implementation across UI, data integration, and media relay components.",
      problemsSolved: [
        "Implemented Family Mode to hide explicit/horror/thriller categories",
        "Added metadata/subtitle sanitization and profanity filtering",
        "Integrated TMDB browsing with rich metadata and recommendations",
        "Designed a hybrid delivery flow combining relay server and WebTorrent"
      ],
      purpose: "Demonstrate a premium streaming-like UI with family-safe discovery and flexible media delivery architecture."
    },
    {
      id: 3,
      title: "Job Finder & CV AI Assistant",
      description: "AI-driven platform to build ATS-compliant CVs and streamline job search with authentication, tracking, and automation-ready workflows.",
      techStack: ["Next.js", "React", "Supabase", "PostgreSQL", "OAuth"],
      githubUrl: "https://github.com/H-Ossama/Job-Finder",
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Implemented secure auth with email/password and OAuth providers",
        "Built an AI-assisted CV builder optimized for ATS requirements",
        "Added job discovery/matching and application tracking",
        "Prepared automation integration via n8n workflows"
      ],
      purpose: "Help job seekers create strong CVs and manage their job search in one place with modern UX."
    },
    {
      id: 4,
      title: "Smart E-Commerce Platform",
      description: "A modern e-commerce platform built with React and TypeScript, designed for performance, responsive UI, and future AI-powered features.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
      githubUrl: "https://github.com/H-Ossama/Smart_E-Commerce_Platform",
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Designed a responsive catalog and browsing experience",
        "Implemented cart management and state handling",
        "Established a scalable frontend architecture for upcoming features",
        "Planned integrations for recommendations, chat, and admin tooling"
      ],
      purpose: "Serve as a foundation for a full-featured modern e-commerce product with room to grow."
    },
    {
      id: 5,
      title: "SCHOOL MANAGEMENT SYSTEM",
      description: "Complete school management application with HTML5 interface, grade and payment management, and optimized relational database for educational institutions.",
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
      role: "Backend-focused development: database design, business logic, and reporting.",
      problemsSolved: [
        "Modeled educational data with a normalized relational schema",
        "Implemented grade calculation with configurable weights",
        "Built reporting for student performance analytics",
        "Added payment tracking with installment handling"
      ],
      purpose: "Modernize school administration by centralizing grades, payments, and reporting into a single system."
    },
    {
      id: 6,
      title: "Universal Admin Panel",
      description: "A modern, scalable, business-agnostic admin dashboard with modular architecture, reusable CRUD engine, and role-based access control.",
      techStack: ["React", "Next.js", "Tailwind CSS", "JWT", "Fetch/Axios"],
      liveUrl: "",
      image: "/images/project-2.svg",
      featured: true,
      problemsSolved: [
        "Designed a reusable CRUD system with pagination, search, and filters",
        "Planned role-based access control and pluggable modules",
        "Created a clean, responsive UI foundation (dark/light ready)",
        "Structured analytics/dashboard widgets for extensibility"
      ],
      purpose: "Avoid rebuilding the same admin dashboard logic for each new product by using a modular, reusable base."
    }
  ],

  // Mobile Projects (AI-assisted)
  mobileProjects: [
    {
      id: 101,
      title: "Parental Guard",
      description: "Android parental control solution with a Parent Controller app and a Child Agent for real-time monitoring, app locking, and usage reporting.",
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
        "Real-time device monitoring and app usage reporting",
        "Remote app lock/unlock and category time limits",
        "Secure device pairing via QR and biometric protection",
        "Stealth child-agent protections with unskippable lock screens"
      ],
      purpose: "Provide parents with robust tools to help protect children online and manage device usage safely."
    },
    {
      id: 102,
      title: "FinTracker",
      description: "Offline-first personal finance tracker built with Expo + React Native and TypeScript, storing data locally by default.",
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
        "Multiple wallets with transfers and budget tracking",
        "Local-first storage for privacy and offline access",
        "Charts and insights for spending analysis",
        "Extensible architecture for optional backend API"
      ],
      purpose: "Give users full control of personal finances with an offline-first approach and a clean mobile UX."
    },
    {
      id: 103,
      title: "Tijarati (تجارتي)",
      description: "Premium bookkeeping solution for merchants with a modern UI, inventory, partner splits, localization, and AI-powered insights (Gemini).",
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
        "Fast transaction tracking with real-time profit insights",
        "Inventory and debt book management for merchants",
        "Multi-language support (Darija/Arabic/French/English)",
        "AI assistant for business data analysis and insights"
      ],
      purpose: "Help small businesses manage bookkeeping, stock, and profits with a premium mobile-first experience."
    }
  ],

  // Certifications (optional)
  certifications: [
    {
      name: "IBM Certificate in Computer Networks and Network Security",
      issuer: "IBM - Coursera",
      date: "12/2024",
      description: "Certification in network security, network protocols, and network architecture.",
      image: "/certificates/ibm-networks-security.pdf", // or .jpg
      url: "https://www.coursera.org/account/accomplishments/verify/EQIGIS8IV9VK"
    },
    {
      name: "Computer Networks and Network Security",
      issuer: "Coursera",
      date: "11/2024",
      description: "Advanced certification covering computer networks architecture, protocols, and comprehensive network security principles.",
      image: "/certificates/computer-networks-security.pdf", // or .jpg
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

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    twitter: "", // Add if available
    instagram: "", // Add if available
  },

  // Resume/CV link
  resume: "/certificates/Oussma_Hattan_Resume.pdf", // Updated to match actual resume file

  // Website metadata
  meta: {
    title: "Oussama HATTAN - Full-Stack Web Developer | React & Node.js Specialist",
    description: "Portfolio of Oussama HATTAN, Full-Stack Web Developer from Morocco specialized in React, Node.js and modern web technologies. Hire Oussama for your next web project.",
    keywords: "Oussama HATTAN, Oussama, HATTAN, web developer Morocco, Moroccan developer, full-stack developer, React developer, Node.js developer, JavaScript developer, PHP developer, Python developer, portfolio, hire web developer, freelance developer",
    author: "Oussama HATTAN",
    url: "https://hattan-portfolio.vercel.app", // Replace with actual domain
  },

  // Section content for translations
  sections: {
    about: {
      yearsExperience: "Years Experience",
      projectsCompleted: "Projects Completed"
    },
    skills: {
      coreSkills: "Core Skills", 
      description: "Key technologies and skills I master to develop modern and secure web solutions.",
      summary: "Skills acquired through web development training and specialization in network administration."
    },
    projects: {
      featuredProjects: "Featured Projects",
      description: "A showcase of my recent work, demonstrating various technologies and problem-solving approaches",
      moreProjects: "More Projects",
      wantToSeeMore: "Want to see more?",
      githubDescription: "Check out my GitHub profile for more projects, contributions, and code samples. I'm constantly building and experimenting with new technologies.",
      viewGithubProfile: "View GitHub Profile"
    },
    mobileProjects: {
      title: "Mobile Projects",
      subtitle: "(AI-assisted)",
      description: "Mobile apps built with AI assistance during development, focusing on real-world reliability, offline-first storage, and polished UX."
    },
    education: {
      description: "My academic foundation and continuous learning journey in web development",
      continuousLearning: "Continuous Learning Mindset",
      learningDescription: "Beyond formal education, I believe in the importance of continuous learning in the rapidly evolving tech industry. I regularly engage with online courses, technical blogs, developer communities, and open-source projects to stay current with the latest technologies and best practices. My goal is to never stop learning and growing as a developer."
    },
    contact: {
      letsStartConversation: "Let's start a conversation",
      description: "Ready to discuss your next project or just want to say hello? I'd love to hear from you!"
    }
  }
};

export default portfolioConfig;
