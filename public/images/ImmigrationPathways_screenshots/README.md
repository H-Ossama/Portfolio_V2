github link: https://github.com/H-Ossama/Immigration-Pathways
Website LINK: https://immigration-pathways.vercel.app/

# Immigration Pathways 🌎

<p align="center">
  <img src="public/hero.png" width="150" alt="Immigration Pathways Hero Image">
</p>


**Immigration Pathways** is a production-ready web application designed to help individuals discover the best immigration options based on their unique professional and educational profiles. Using AI-powered analysis, the app generates detailed, actionable migration plans with official government sources.

---

## 🎯 Features

- **Multi-Step Profile Wizard:** A 8-step form collecting everything from education to document readiness.
- **AI-Powered Recommendations:** Generates 3-6 personalized pathways using GPT-4o.
- **Privacy-First Design:** API keys and profile data are stored only in your browser's local storage.
- **Actionable Results:** Each pathway includes steps, requirements, estimated costs, and official links.
- **Export Tools:** Copy results to clipboard or download as a PDF for future reference.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **State Management:** Zustand (with Persistence)
- **Forms & Validation:** React Hook Form + Zod
- **AI Integration:** OpenAI API (Client-provided key)
- **PDF Generation:** jsPDF

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- An OpenAI API Key (Get one at [OpenAI Platform](https://platform.openai.com/))

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd immigration-pathways
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Duplicate the `.env.example` file to `.env.local`.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to `http://localhost:3000` in your browser.

## 🔒 Privacy & Security

We take your privacy seriously:
- **No Database:** Your personal profile information never touches our database.
- **Local Storage:** Your API key is stored only on your machine.
- **Direct AI Calls:** Request processing is done securely via authenticated API routes.

## ⚖️ Disclaimer

*Immigration Pathways provides general information and guidance. It does not constitute legal advice. Immigration laws are subject to frequent changes. Always consult with official government sources or authorized legal professionals before making decisions.*

---
Created with ❤️ for global explorers.
