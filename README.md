# 🚀 Hattan Oussama - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Inspired by huly.io's clean and minimal design aesthetic.

## 🌐 Live Demo

[![Portfolio Website](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-4F46E5?style=for-the-badge&logoColor=white)](https://portfolio-v2-eight-lovat.vercel.app/)

**🚀 [View Live Site](https://portfolio-v2-eight-lovat.vercel.app/)** 

> Experience the portfolio in action - fully responsive design with smooth animations and multi-language support

---

## ✨ Features

- **Modern Design**: Clean, minimal design inspired by huly.io
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Contact Form**: Working contact form with email integration via Nodemailer
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Easy Customization**: All data centralized in configuration files

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Email**: Nodemailer for contact form
- **Deployment**: Optimized for Vercel
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── images/          # Profile and project images
│   ├── files/           # Resume/CV files
│   └── favicon.ico      # Website favicon
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/ # Contact form API route
│   │   ├── globals.css  # Global styles and Tailwind
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Site footer
│   ├── config/
│   │   └── portfolio.ts # All portfolio data and configuration
│   └── lib/
│       └── utils.ts     # Utility functions
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hattanoussama/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Personal Information

Edit `src/config/portfolio.ts` to customize all portfolio content:

```typescript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline here...",
    bio: "Your bio here...",
    // ... more fields
  },
  // ... other sections
}
```

### Email Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new password for "Mail"
3. **Add credentials to `.env.local`**:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=generated-app-password
   ```

### Images

Replace placeholder images in `public/images/`:
- `profile-placeholder.jpg` - Your profile photo
- `project-1.jpg` through `project-4.jpg` - Project screenshots
- `og-image.jpg` - Social media sharing image

### Resume

Add your resume as `public/files/hattan-oussama-resume.pdf`

## 🎨 Customization

### Colors

Modify the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color scheme
      }
    }
  }
}
```

### Content

All content is centralized in `src/config/portfolio.ts`:
- Personal information
- Skills and technologies
- Project details
- Education and certifications
- Contact information

### Animations

Customize animations in individual components using Framer Motion:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository

2. **Set environment variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `EMAIL_USER` and `EMAIL_PASS`

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder** to Netlify

### Deploy to other platforms

The project can be deployed to any platform that supports Node.js:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript type checking
```

### Code Style

- ESLint configuration included
- Prettier formatting recommended
- TypeScript for type safety
- Component-based architecture

## 📈 Performance

- **Next.js App Router** for optimal performance
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **SEO optimization** with proper meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with setup:

- **Email**: your-email@gmail.com
- **LinkedIn**: [linkedin.com/in/hattan-oussama](https://linkedin.com/in/hattan-oussama)
- **GitHub**: [github.com/hattanoussama](https://github.com/hattanoussama)

## 🙏 Acknowledgments

- Design inspiration from [huly.io](https://huly.io)
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ by Hattan Oussama**
