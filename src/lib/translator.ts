// Translation utility for automatic translation
// This uses a simplified translation approach - you can replace with Google Translate API if needed

interface TranslationMap {
  [key: string]: {
    fr: string;
    de: string;
  };
}

// Common translations for tech terms and portfolio content
const commonTranslations: TranslationMap = {
  // Personal/Professional titles
  "Full-Stack Web Developer": {
    fr: "Développeur Web Full-Stack",
    de: "Full-Stack-Webentwickler"
  },
  "React & Node.js Specialist": {
    fr: "Spécialiste React & Node.js",
    de: "React & Node.js Spezialist"
  },
  "Web Developer": {
    fr: "Développeur Web",
    de: "Web-Entwickler"
  },
  "Software Engineering": {
    fr: "Ingénierie Logicielle",
    de: "Software-Engineering"
  },
  "Bachelor": {
    fr: "Licence",
    de: "Bachelor"
  },
  "Certificate": {
    fr: "Certificat",
    de: "Zertifikat"
  },

  // Skills and technical terms
  "Frontend": {
    fr: "Frontend",
    de: "Frontend"
  },
  "Backend": {
    fr: "Backend",
    de: "Backend"
  },
  "Database": {
    fr: "Base de données",
    de: "Datenbank"
  },
  "Network Security": {
    fr: "Sécurité Réseau",
    de: "Netzwerksicherheit"
  },
  "Computer Networks": {
    fr: "Réseaux Informatiques",
    de: "Computernetzwerke"
  },
  "Test Driven Development": {
    fr: "Développement Dirigé par les Tests",
    de: "Testgetriebene Entwicklung"
  },
  "Responsive Design": {
    fr: "Design Responsive",
    de: "Responsives Design"
  },
  "REST APIs": {
    fr: "APIs REST",
    de: "REST-APIs"
  },

  // Project types
  "Car Rental Platform": {
    fr: "Plateforme de Location de Voitures",
    de: "Autovermietungsplattform"
  },
  "School Management System": {
    fr: "Système de Gestion Scolaire",
    de: "Schulverwaltungssystem"
  },
  "Portfolio Website": {
    fr: "Site Portfolio",
    de: "Portfolio-Website"
  },

  // Common phrases
  "with strong full-stack skills": {
    fr: "avec de solides compétences full-stack",
    de: "mit starken Full-Stack-Fähigkeiten"
  },
  "specialized in building": {
    fr: "spécialisé dans la création",
    de: "spezialisiert auf die Entwicklung"
  },
  "responsive and scalable web applications": {
    fr: "d'applications web responsives et évolutives",
    de: "responsiver und skalierbarer Webanwendungen"
  },
  "Experienced in": {
    fr: "Expérimenté en",
    de: "Erfahren in"
  },
  "knowledge of": {
    fr: "connaissance de",
    de: "Kenntnisse in"
  },
  "Proven ability to deliver": {
    fr: "Capacité prouvée à livrer",
    de: "Bewiesene Fähigkeit zu liefern"
  },
  "clean, maintainable code": {
    fr: "un code propre et maintenable",
    de: "sauberen, wartbaren Code"
  },
  "through academic and real-world projects": {
    fr: "à travers des projets académiques et réels",
    de: "durch akademische und reale Projekte"
  },

  // Languages
  "English": {
    fr: "Anglais",
    de: "Englisch"
  },
  "French": {
    fr: "Français",
    de: "Französisch"
  },
  "Arabic": {
    fr: "Arabe",
    de: "Arabisch"
  },
  "Professional": {
    fr: "Professionnel",
    de: "Beruflich"
  },
  "Native": {
    fr: "Natif",
    de: "Muttersprache"
  },
  "Intermediate": {
    fr: "Intermédiaire",
    de: "Mittelstufe"
  }
};

// Extended translations for longer phrases and descriptions
const extendedTranslations: TranslationMap = {
  "Web Developer with strong full-stack skills, specialized in building responsive and scalable web applications. Experienced in front-end (HTML, CSS, JS) and back-end (PHP, Python, SQL, MongoDB) with knowledge of TDD, APIs, and network security.": {
    fr: "Développeur Web avec de solides compétences full-stack, spécialisé dans la création d'applications web responsives et évolutives. Expérimenté en front-end (HTML, CSS, JS) et back-end (PHP, Python, SQL, MongoDB) avec des connaissances en TDD, APIs et sécurité réseau.",
    de: "Web-Entwickler mit starken Full-Stack-Fähigkeiten, spezialisiert auf die Entwicklung responsiver und skalierbarer Webanwendungen. Erfahren in Frontend (HTML, CSS, JS) und Backend (PHP, Python, SQL, MongoDB) mit Kenntnissen in TDD, APIs und Netzwerksicherheit."
  },

  "Proven ability to deliver clean, maintainable code through academic and real-world projects.": {
    fr: "Capacité prouvée à livrer un code propre et maintenable à travers des projets académiques et réels.",
    de: "Bewiesene Fähigkeit, sauberen, wartbaren Code durch akademische und reale Projekte zu liefern."
  },

  "Comprehensive web development program covering Database Architecture, Network Security, Sécurité informatique, and Agile/Scrum methodologies.": {
    fr: "Programme complet de développement web couvrant l'Architecture de Base de Données, la Sécurité Réseau, la Sécurité informatique et les méthodologies Agile/Scrum.",
    de: "Umfassendes Webentwicklungsprogramm, das Datenbankarchitektur, Netzwerksicherheit, Computersicherheit und Agile/Scrum-Methodologien abdeckt."
  },

  "Intensive 12-month software engineering bootcamp covering full-stack development, algorithms, data structures, system design, and modern development practices.": {
    fr: "Bootcamp intensif de 12 mois en ingénierie logicielle couvrant le développement full-stack, les algorithmes, les structures de données, la conception de systèmes et les pratiques de développement modernes.",
    de: "Intensives 12-monatiges Software-Engineering-Bootcamp, das Full-Stack-Entwicklung, Algorithmen, Datenstrukturen, Systemdesign und moderne Entwicklungspraktiken abdeckt."
  },

  "Administration des réseaux, Configuration des équipements réseau, Sécurité informatique, Virtualisation et cloud computing.": {
    fr: "Administration des réseaux, Configuration des équipements réseau, Sécurité informatique, Virtualisation et cloud computing.",
    de: "Netzwerkverwaltung, Konfiguration von Netzwerkgeräten, Computersicherheit, Virtualisierung und Cloud Computing."
  },

  // Project descriptions
  "Une application web complète de location de voitures avec interface responsive HTML5/CSS3, système de réservation sécurisé et base de données optimisée.": {
    fr: "Une application web complète de location de voitures avec interface responsive HTML5/CSS3, système de réservation sécurisé et base de données optimisée.",
    de: "Eine vollständige Autovermietungs-Webanwendung mit responsiver HTML5/CSS3-Oberfläche, sicherem Buchungssystem und optimierter Datenbank."
  },

  "Application de gestion scolaire complète avec interface HTML5, gestion des notes et paiements, et base de données relationnelle optimisée pour les établissements scolaires.": {
    fr: "Application de gestion scolaire complète avec interface HTML5, gestion des notes et paiements, et base de données relationnelle optimisée pour les établissements scolaires.",
    de: "Vollständige Schulverwaltungsanwendung mit HTML5-Oberfläche, Noten- und Zahlungsmanagement und optimierter relationaler Datenbank für Bildungseinrichtungen."
  },

  "Site portfolio moderne et responsive construit avec Next.js et Tailwind CSS. Comprend des animations fluides, un formulaire de contact et des performances optimisées.": {
    fr: "Site portfolio moderne et responsive construit avec Next.js et Tailwind CSS. Comprend des animations fluides, un formulaire de contact et des performances optimisées.",
    de: "Moderne und responsive Portfolio-Website, erstellt mit Next.js und Tailwind CSS. Beinhaltet flüssige Animationen, ein Kontaktformular und optimierte Leistung."
  }
};

// Soft skills translations
const softSkillsTranslations: TranslationMap = {
  "Rapid Learning": {
    fr: "Apprentissage Rapide",
    de: "Schnelles Lernen"
  },
  "Technical Analysis": {
    fr: "Analyse Technique",
    de: "Technische Analyse"
  },
  "Technical Communication": {
    fr: "Communication Technique",
    de: "Technische Kommunikation"
  },
  "Technical Documentation": {
    fr: "Documentation Technique",
    de: "Technische Dokumentation"
  },
  "Complex Problem Solving": {
    fr: "Résolution de Problèmes Complexes",
    de: "Komplexe Problemlösung"
  },
  "Team Collaboration": {
    fr: "Collaboration d'Équipe",
    de: "Teamzusammenarbeit"
  }
};

// Main translation function
export function translateText(text: string, targetLang: 'fr' | 'de'): string {
  // First check extended translations for longer phrases
  if (extendedTranslations[text]) {
    return extendedTranslations[text][targetLang];
  }

  // Then check common translations
  if (commonTranslations[text]) {
    return commonTranslations[text][targetLang];
  }

  // Check soft skills
  if (softSkillsTranslations[text]) {
    return softSkillsTranslations[text][targetLang];
  }

  // For words/phrases not in our dictionary, try basic replacement
  let translatedText = text;

  // Apply all available translations to parts of the text
  Object.keys(commonTranslations).forEach(englishPhrase => {
    if (translatedText.includes(englishPhrase)) {
      translatedText = translatedText.replace(
        new RegExp(englishPhrase, 'gi'),
        commonTranslations[englishPhrase][targetLang]
      );
    }
  });

  Object.keys(softSkillsTranslations).forEach(englishPhrase => {
    if (translatedText.includes(englishPhrase)) {
      translatedText = translatedText.replace(
        new RegExp(englishPhrase, 'gi'),
        softSkillsTranslations[englishPhrase][targetLang]
      );
    }
  });

  return translatedText;
}

// Function to translate an array of strings
export function translateArray(arr: string[], targetLang: 'fr' | 'de'): string[] {
  return arr.map(item => translateText(item, targetLang));
}

// Function to recursively translate an object
export function translateObject(obj: any, targetLang: 'fr' | 'de'): any {
  if (typeof obj === 'string') {
    return translateText(obj, targetLang);
  }

  if (Array.isArray(obj)) {
    return obj.map(item => translateObject(item, targetLang));
  }

  if (typeof obj === 'object' && obj !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = translateObject(value, targetLang);
    }
    return result;
  }

  return obj;
}

const translatorUtils = {
  translateText,
  translateArray,
  translateObject
};

export default translatorUtils;