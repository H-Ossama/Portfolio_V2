export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Oussama HATTAN",
    title: "Backend Web Developer | Node.js & Python Specialist",
    tagline: "Backend Developer tailored for scalable, high-performance systems. Specialized in designing robust APIs, secure database architectures, and efficient microservices using Node.js, Python, and SQL/NoSQL databases.",
    bio: "I am a Backend Developer with a passion for system architecture and data efficiency. While capable of full-stack development, my true expertise lies in the server-side logic—optimizing database queries, ensuring network security, and building RESTful/GraphQL APIs that scale. My background in network administration gives me a unique edge in deploying secure and reliable backend solutions.",
    location: "M'RIRT, MOROCCO",
    location_description: "Based in Morocco, I focus on building the hidden engines that power modern web applications. I strive for code quality, security, and performance in every backend system I architect.",
    interests: "When I'm not designing schemas or optimizing endpoints, I explore system security, contribute to open-source backend tools, and stay updated on the latest in cloud infrastructure.",
    profileImage: "/images/Ousaama.jpg?v=1",
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
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Python", "FastAPI", "PHP", "Laravel", "REST/GraphQL APIs"],
    database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design"],
    networking: ["Network Security", "Linux Administration", "Docker", "CI/CD", "Cloud Deployment"],
    development: ["TDD", "System Architecture", "OAuth2.0", "JWT", "Git/GitHub", "Agile"],
    languages: ["English (Professional)", "Arabic (Native)", "French (Intermediate)"],
    soft_skills: ["Problem Solving", "System Analysis", "Technical Documentation", "API Design", "Team Collaboration"]
  },

  // Education
  education: [
    {
      degree: "Bachelor in Web Development",
      institution: "MULTIHEXA, Meknes",
      year: "09/2024 - 08/2025",
      grade: "17.67/20",
      description: "Advanced curriculum focusing on Backend Architecture, Database Optimization, and Secure Web Systems.",
      certificates: [
        { name: "Diploma Certificate", image: "/certificates/FEDE Bachelor Diplomat.jpg" },
        { name: "Academic Transcript", image: "/certificates/FEDE Relever de note.jpg" }
      ]
    },
    {
      degree: "Software Engineering Certificate (12-month Bootcamp)",
      institution: "ALX, Casablanca",
      year: "08/2023 - 10/2024",
      description: "Intensive backend-focused training on data structures, algorithms, system design, and scalable software engineering."
    },
    {
      degree: "Technicien Spécialisé en Systèmes et Réseaux Informatiques",
      institution: "GROUPE EFET - ECOLE FRANÇAISE D'ENSEIGNEMENT TECHNIQUE",
      year: "2021 - 2023",
      description: "Network Administration, Server Configuration, Network Security, and Virtualization.",
      certificates: [
        { name: "Technical Diploma", image: "/certificates/EFET.jpg" }
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: 101,
      title: "Parental Guard",
      category: "Mobile Development",
      description: "Advanced Android parental control system with real-time WebSocket monitoring, background service agents, and secure app locking.",
      techStack: ["Kotlin", "Jetpack Compose", "WebSockets", "Room DB", "Background Services"],
      githubUrl: "https://github.com/H-Ossama/Family-Guard",
      screenshots: [
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021123.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021143.jpg",
        "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021157.jpg"
      ],
      image: "/images/Mobile_apps_screenshots/Familly_Guard-screenshots/Screenshot_20260108_021123.jpg",
      featured: true,
      problemsSolved: [
        "Real-time device monitoring via persistent WebSockets",
        "Stealth background agent architecture",
        "Remote command execution for device lock/unlock",
        "Secure local database synchronization"
      ],
      purpose: "Enterprise-grade mobile security solution for family protection.",
      strategy: "Agent-Controller architecture with real-time relay",
      client: "Parental Guard",
      technology: "Kotlin, WebSocket"
    },
    {
      id: 102,
      title: "FinTracker",
      category: "Mobile Development",
      description: "Secure, offline-first financial tracking app. Uses local encryption and efficient state management for instant transaction recording.",
      techStack: ["Expo", "TypeScript", "SQLite", "Encryption", "React Native"],
      githubUrl: "https://github.com/H-Ossama/FINEX",
      liveUrl: "",
      screenshots: [
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-1.png",
        "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-2.png"
      ],
      image: "/images/Mobile_apps_screenshots/FINEX-screenshots/screen-1.png",
      featured: false,
      problemsSolved: [
        "Zero-latency local data access",
        "Encrypted local storage for financial privacy",
        "Complex SQL queries for spending analysis",
        "Background data sync capability"
      ],
      purpose: "Privacy-focused financial management.",
      strategy: "Local-first architecture",
      client: "Personal Project",
      technology: "TypeScript, SQLite"
    },
    {
      id: 103,
      title: "Tijarati",
      category: "Mobile Development",
      description: "Business management platform for merchants, integrating inventory, debt tracking, and AI-powered business insights.",
      techStack: ["React Native", "Firebase", "Gemini AI", "Node.js Function"],
      githubUrl: "https://github.com/H-Ossama/TIJARATI",
      screenshots: [
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021801_TIJARATI.jpg",
        "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021812_TIJARATI.jpg"
      ],
      image: "/images/Mobile_apps_screenshots/TIJARATI-screenshots/Screenshot_20260108_021801_TIJARATI.jpg",
      featured: true,
      problemsSolved: [
        "Real-time multi-device inventory sync",
        "AI-driven sales analysis and predictions",
        "Offline-capable transaction logging",
        "Automated debt calculation and alerts"
      ],
      purpose: "Empowering small merchants with enterprise tools.",
      strategy: "Cloud-synced inventory with AI layer",
      client: "Merchant Community",
      technology: "React Native, AI"
    },
    {
      id: 5,
      title: "Universal Admin Panel",
      category: "Web Development",
      description: "A highly scalable, module-based Admin Dashboard designed for SaaS platforms. Features dynamic role-based access control and analytics.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
      githubUrl: "https://github.com/your-username/universal-admin-panel", // Verify URL if possible or use generic
      screenshots: [], // Add generic or keep empty
      image: "/images/General_Admin_Panel-screenshots/README.md", // Need a real image, fallback to others or generic
      featured: true,
      problemsSolved: [
        "Modular architecture for plug-and-play features",
        "Role-Based Access Control (RBAC) implementation",
        "Dynamic chart generation from API data",
        "Theme-aware adaptable UI"
      ],
      purpose: "Accelerate development of backend administration tools.",
      strategy: "Component-driven development",
      client: "SaaS Startups",
      technology: "React, TypeScript"
    },
    {
      id: 6,
      title: "Smart E-Commerce",
      category: "Web Development",
      description: "Modern e-commerce platform featuring AI product recommendations, real-time chat support, and a scalable Node.js backend.",
      techStack: ["Node.js", "Express", "React", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/H-Ossama/Smart_E-Commerce_Platform",
      image: "/images/Smart_E-Commerce_Platform/README.md", // Placeholder
      featured: false,
      problemsSolved: [
        "Real-time user support via WebSockets",
        "AI-based related product engine",
        "Scalable product catalog architecture",
        "Secure payment gateway integration"
      ],
      purpose: "Demonstrate a full-stack e-commerce solution with AI features.",
      strategy: "Microservices-ready backend",
      client: "Open Source",
      technology: "Node.js, React"
    },
    {
      id: 7,
      title: "EFET Website",
      category: "Web Development",
      description: "Complete redesign and development of the EFET Group official website, improving performance, accessibility, and SEO structure.",
      techStack: ["Next.js", "React", "CMS Integration", "SEO"],
      githubUrl: "https://github.com/H-Ossama/EFET-Website",
      image: "/images/efet-screenshots/efet-screenshot-1.png",
      screenshots: [
        "/images/efet-screenshots/efet-screenshot-1.png",
        "/images/efet-screenshots/efet-screenshot-2.png"
      ],
      featured: false,
      problemsSolved: [
        "High-performance rendering with Next.js",
        "Improved academic program discovery",
        "Mobile-first responsive design",
        "SEO optimization for educational keywords"
      ],
      purpose: "Modernize the digital presence of a major educational institution.",
      strategy: "Performance-first modernization",
      client: "Groupe EFET",
      technology: "Next.js"
    },
    {
      id: 2,
      title: "CinemaHalal",
      category: "Web Development",
      description: "Family-safe streaming platform aggregator. complex backend filtering to ensure content compliance with family values.",
      techStack: ["Node.js", "Express", "WebTorrent", "TMDB API", "Filtering Algorithms"],
      githubUrl: "https://github.com/H-Ossama/CinimaHalal",
      screenshots: [
        "/images/Cinima-Halal/screenshot-1.png",
        "/images/Cinima-Halal/screenshot-2.png"
      ],
      image: "/images/Cinima-Halal/screenshot-1.png",
      featured: false,
      role: "Backend Lead",
      problemsSolved: [
        "Automated content filtering algorithms",
        "Hybrid streaming protocol implementation",
        "Metadata sanitization system",
        "High-concurrency API design"
      ],
      purpose: "Provide a safe viewing environment using technology.",
      strategy: "Content filtering at the API level",
      client: "Community Project",
      technology: "Node.js, WebTorrent"
    },
    {
      id: 1,
      title: "Car Rental Platform",
      category: "Web Development",
      description: "Complex booking engine with robust database locking mechanisms to prevent double-booking and ensure data integrity.",
      techStack: ["PHP", "Laravel", "MySQL", "Cron Jobs"],
      githubUrl: "https://github.com/H-Ossama/Cars_Rental_v2.0",
      image: "/images/cars_rental_screenshots/Capture%20d%27%C3%A9cran.png",
      featured: false,
      period: "09/2024 - 04/2025",
      role: "Backend Architecture",
      problemsSolved: [
        "Concurrency handling in booking transactions",
        "Optimized complex SQL queries for vehicle availability",
        "Role-based secure API endpoints",
        "Automated invoicing generation"
      ],
      purpose: "Reliable transaction management for rental agencies.",
      strategy: "ACID-compliant database transactions",
      client: "AutoRental Agency",
      technology: "Laravel, MySQL"
    },
    {
      id: 3,
      title: "Resume Maker",
      category: "Web Development",
      description: "Web tool for generating PDF resumes. Focuses on client-side rendering performance and clean data structure export.",
      techStack: ["React", "DOM-to-Image", "Client-Side Processing"],
      githubUrl: "https://github.com/H-Ossama/Resume_Maker",
      image: "/images/resume_maker/Screenshot1.png", // Verify path or use placeholder
      featured: false,
      problemsSolved: [
        "High-fidelity PDF generation in browser",
        "Complex form state management",
        "Real-time DOM manipulation"
      ],
      purpose: "Utility tool for professionals.",
      client: "Personal Project",
      technology: "React"
    },
    {
      id: 4,
      title: "Job Finder",
      category: "Web Development",
      description: "Job aggregation engine that scrapes and standardizes job listings from multiple sources into a unified API.",
      techStack: ["Node.js", "Web Scraping", "API", "Cron"],
      githubUrl: "https://github.com/H-Ossama/Job_Finder",
      image: "/images/job_finder/landing.png", // Verify path
      featured: false,
      problemsSolved: [
        "Data normalization from diverse sources",
        "Efficient search indexing",
        "Automated data refresh pipelines"
      ],
      purpose: "Centralize job market data.",
      client: "Personal Project",
      technology: "Node.js"
    }
  ],

  // Extra Mobile projects rendered redundant by merging above, but keeping empty to avoid breaking types if strict
  mobileProjects: [],

  certifications: [
    {
      name: "IBM Certificate in Computer Networks and Network Security",
      issuer: "IBM - Coursera",
      date: "12/2024",
      description: "Certification in network security, network protocols, and network architecture.",
      image: "/certificates/ibm-networks-security.pdf",
      url: "https://www.coursera.org/account/accomplishments/verify/EQIGIS8IV9VK"
    }
  ],

  social: {
    linkedin: "https://linkedin.com/in/h-oussama",
    github: "https://github.com/H-Ossama",
    whatsapp: "+212 658559662",
  },

  resume: "/certificates/Oussma_Hattan_Resume.pdf",

  meta: {
    title: "Oussama HATTAN - Backend Web Developer",
    description: "Portfolio of Oussama HATTAN, Backend Web Developer specializing in Node.js, Python, and scalable architecture.",
    keywords: "Oussama HATTAN, backend developer, Node.js, Python, API Architecture, Database Design",
    author: "Oussama HATTAN",
    url: "https://hattan-portfolio.vercel.app",
  },

  sections: {
    about: { yearsExperience: "Years Experience", projectsCompleted: "Projects Delivered" },
    skills: { coreSkills: "Technical Arsenal", description: "Backend technologies and tools I master.", summary: "Expertise in Architecture & Security." },
    projects: { featuredProjects: "Selected Work", description: "Backend-focused and full-stack solutions.", moreProjects: "More Projects", wantToSeeMore: "Want to see more?", githubDescription: "Check out my GitHub for code samples.", viewGithubProfile: "View GitHub Profile" },
    mobileProjects: { title: "Mobile Projects", subtitle: "(System Design)", description: "Mobile apps with robust backends." },
    education: { description: "Academic & Technical Foundation.", continuousLearning: "Research & Development", learningDescription: "Always exploring new architectures." },
    contact: { letsStartConversation: "Let's Engineer Your Solution", description: "Need a scalable backend?" }
  }
};

export default portfolioConfig;
