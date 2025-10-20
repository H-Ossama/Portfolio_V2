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
          image: "/certificates/MultyHexa.jpg"
        },
        {
          name: "Academic Transcript",
          image: "/certificates/MultyHexa-Releve-de-Notes.jpg"
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
      image: "/images/project-1.svg",
      featured: true,
      period: "09/2024 - 04/2025"
    },
    {
      id: 2,
      title: "AIRBNB CLONE",
      description: "Complete Airbnb clone web application with secure registration and authentication (OAuth, JWT), search with filters, property management (hosts) and bookings, RESTful API integration.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "OAuth", "JWT"],
      githubUrl: "https://github.com/H-Ossama/airbnb-clone",
      liveUrl: "", // Add if available
      image: "/images/project-2.svg",
      featured: true
    },
    {
      id: 3,
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
      period: "06/2023"
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
