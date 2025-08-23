import { portfolioConfig as enConfig } from '@/config/portfolio.en';
import { portfolioConfig as frConfig } from '@/config/portfolio.fr';
import { portfolioConfig as deConfig } from '@/config/portfolio.de';

// Type for supported locales
export type Locale = 'en' | 'fr' | 'de';

// Config mapping
const configs = {
  en: enConfig,
  fr: frConfig,
  de: deConfig,
};

// Server-side function to get config by locale (for use in metadata generation)
export function getPortfolioConfig(locale: Locale = 'en') {
  return configs[locale] || configs.en;
}

// Helper function to get localized text
export function getLocalizedText(
  text: { en: string; fr: string; de: string } | string,
  locale: Locale = 'en'
): string {
  if (typeof text === 'string') {
    return text;
  }
  
  return text[locale] || text.en || '';
}

// Language direction helper
export function getLanguageDirection(locale: Locale = 'en'): 'ltr' | 'rtl' {
  // All our supported languages are LTR
  return 'ltr';
}

// Navigation labels in different languages
export const navigationLabels = {
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Resume',
    downloadCV: 'Download CV',
    viewCV: 'View CV',
    viewProject: 'View Project',
    sourceCode: 'Source Code',
    liveDemo: 'Live Demo',
    getInTouch: 'Get in Touch',
    sendMessage: 'Send Message',
    backToTop: 'Back to Top',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    skills: 'Compétences',
    education: 'Formation',
    projects: 'Projets',
    contact: 'Contact',
    resume: 'CV',
    downloadCV: 'Télécharger le CV',
    viewCV: 'Voir le CV',
    viewProject: 'Voir le Projet',
    sourceCode: 'Code Source',
    liveDemo: 'Démo en Direct',
    getInTouch: 'Contactez-moi',
    sendMessage: 'Envoyer le Message',
    backToTop: 'Retour en Haut',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
  },
  de: {
    home: 'Startseite',
    about: 'Über mich',
    skills: 'Fähigkeiten',
    education: 'Bildung',
    projects: 'Projekte',
    contact: 'Kontakt',
    resume: 'Lebenslauf',
    downloadCV: 'Lebenslauf herunterladen',
    viewCV: 'Lebenslauf ansehen',
    viewProject: 'Projekt ansehen',
    sourceCode: 'Quellcode',
    liveDemo: 'Live-Demo',
    getInTouch: 'Kontakt aufnehmen',
    sendMessage: 'Nachricht senden',
    backToTop: 'Nach oben',
    loading: 'Laden...',
    error: 'Fehler',
    success: 'Erfolg',
  },
};

// Contact form labels
export const contactFormLabels = {
  en: {
    name: 'Full Name',
    email: 'Email Address',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending...',
    successMessage: 'Thank you for your message! I\'ll get back to you soon.',
    errorMessage: 'Sorry, there was an error sending your message. Please try again.',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
  },
  fr: {
    name: 'Nom Complet',
    email: 'Adresse Email',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer le Message',
    sending: 'Envoi en cours...',
    successMessage: 'Merci pour votre message ! Je vous répondrai bientôt.',
    errorMessage: 'Désolé, il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer.',
    nameRequired: 'Le nom est requis',
    emailRequired: 'L\'email est requis',
    emailInvalid: 'Veuillez entrer une adresse email valide',
    subjectRequired: 'Le sujet est requis',
    messageRequired: 'Le message est requis',
  },
  de: {
    name: 'Vollständiger Name',
    email: 'E-Mail-Adresse',
    subject: 'Betreff',
    message: 'Nachricht',
    send: 'Nachricht senden',
    sending: 'Wird gesendet...',
    successMessage: 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.',
    errorMessage: 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    nameRequired: 'Name ist erforderlich',
    emailRequired: 'E-Mail ist erforderlich',
    emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    subjectRequired: 'Betreff ist erforderlich',
    messageRequired: 'Nachricht ist erforderlich',
  },
};