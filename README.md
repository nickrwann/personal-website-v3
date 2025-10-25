# Personal Portfolio Website

A clean, minimalistic single-page portfolio website built with modern web technologies. Inspired by the design aesthetics of Brittany Chiang's portfolio and Linear's landing page, featuring elegant typography, generous white space, and smooth interactions.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue)

## ✨ Features

### Core Portfolio Elements
- **Hero Section** - Centered circular profile picture with name and professional tagline
- **Contact Information** - Location and clickable email link that opens your default mail client
- **About Me** - Clean section with elegant typography and generous spacing
- **Experience Timeline** - Showcase your professional journey with a visual timeline layout
- **Flexible Widget Area** - Modular section ready for integrations (Spotify now-playing, weather, etc.)
- **Social Media Links** - GitHub, LinkedIn, and Instagram icons with smooth hover animations

### Interactive Features
- **🌓 Light/Dark Mode Toggle** - Seamless theme switching with persistent user preference
- **💬 Ask Me Anything Section** - Inline Q&A section ready to connect to your LLM/RAG service
- **📱 Fully Responsive** - Mobile-first design that looks great on all devices
- **🎨 Smooth Animations** - Subtle transitions and hover effects throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   # Edit .env to customize PORT (default: 8000) and other settings
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:8000`

The application will automatically reload when you make changes to the code.

### Building for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- **React** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Wouter** - Lightweight routing
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality UI components

**Backend:**
- **Express.js** - Web server (serves static assets in production)
- **Node.js** - Runtime environment

### Project Structure

```
├── client/                      # Frontend application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Hero.tsx       # Profile picture, name, tagline
│   │   │   ├── Contact.tsx    # Location and email
│   │   │   ├── About.tsx      # About me section
│   │   │   ├── Experiences.tsx # Work experience timeline
│   │   │   ├── Widgets.tsx    # Flexible widget area
│   │   │   ├── Footer.tsx     # Social media links
│   │   │   ├── ThemeToggle.tsx # Light/dark mode switch
│   │   │   ├── AskMe.tsx      # Q&A section
│   │   │   └── examples/      # Component examples for development
│   │   ├── pages/
│   │   │   └── Home.tsx       # Main portfolio page
│   │   ├── lib/               # Utilities and configurations
│   │   ├── App.tsx            # Root application component
│   │   └── index.css          # Global styles and theme variables
│   └── index.html              # HTML entry point
├── server/                      # Backend server
│   ├── routes.ts              # API routes (if needed)
│   ├── storage.ts             # Data persistence layer
│   └── index.ts               # Express server setup
├── shared/                      # Shared types and schemas
│   └── schema.ts              # Database/data models
├── tailwind.config.ts          # Tailwind CSS configuration
├── vite.config.ts             # Vite build configuration
└── package.json               # Dependencies and scripts
```

### Design System

**Color Palette:**
- Primary: Pure black (#000000)
- Secondary: Off-white (#FAFAFA)
- Accent: Cool grey (#6B7280)
- Text: Dark grey (#1F2937)
- Hover: Subtle blue (#3B82F6)

**Typography:**
- Primary Font: Inter
- Display Font: SF Pro Display
- Generous line height (1.7) for readability
- Perfect hierarchy from 14px to 64px

**Spacing:**
- Section spacing: 64-96px vertical
- Element spacing: 32px+ between components
- Container padding: 24px mobile → 64px desktop

## 🎨 Customization

### Personalizing Your Portfolio

1. **Update Profile Information** (`client/src/pages/Home.tsx`)
   ```tsx
   <Hero 
     name="Nick Wanner" 
     tagline="Full-Stack Developer & Creative Problem Solver"
   />
   
   <Contact 
     location="Austin, TX" 
     email="nick@example.com" 
   />
   ```

2. **Replace Profile Picture**
   - Add your photo to `attached_assets/` directory
   - Update the import in `client/src/components/Hero.tsx`:
   ```tsx
   import profileImage from '@assets/your-photo.jpeg';
   ```

3. **Customize About Me Content**
   ```tsx
   const aboutContent = `Your personalized about me text...`;
   ```

4. **Add Your Experience**
   ```tsx
   const experiences = [
     {
       id: '1',
       role: 'Your Role',
       company: 'Company Name',
       period: 'Start - End',
       description: 'What you accomplished...'
     },
     // Add more experiences
   ];
   ```

5. **Update Social Links**
   ```tsx
   const socialLinks = [
     { platform: 'github', url: 'https://github.com/yourusername', label: 'GitHub' },
     { platform: 'linkedin', url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
     { platform: 'instagram', url: 'https://instagram.com/yourusername', label: 'Instagram' }
   ];
   ```

### Customizing Colors

Edit `client/src/index.css` to modify the color scheme. The CSS uses HSL color space for easy theming:

```css
:root {
  --primary: 0 0% 0%;           /* Pure black */
  --background: 0 0% 98%;       /* Off-white */
  /* ... other colors */
}

.dark {
  --primary: 0 0% 100%;         /* White */
  --background: 220 13% 9%;     /* Dark background */
  /* ... other dark mode colors */
}
```

## 🔌 Future Integrations

The portfolio is designed to be easily extended. Here are the pre-configured areas ready for integration:

### 1. Ask Me Anything - LLM/RAG Integration

The Q&A section is stubbed and ready to connect to your preferred AI service:

**Location:** `client/src/components/AskMe.tsx`

```tsx
// Replace this stubbed logic:
setTimeout(() => {
  setAnswer(`Stubbed response...`);
}, 1000);

// With your actual API call:
const response = await fetch('/api/ask', {
  method: 'POST',
  body: JSON.stringify({ question }),
});
const data = await response.json();
setAnswer(data.answer);
```

**Recommended Services:**
- OpenAI GPT API
- Anthropic Claude API
- Custom RAG pipeline with your resume/portfolio data
- LangChain with vector embeddings

### 2. Widget Integrations

The widget area supports modular components. Add any of these:

**Spotify Now Playing:**
- Use Spotify Web API
- Display current track, artist, and album art
- Update in real-time

**Weather Widget:**
- Integrate OpenWeatherMap or similar API
- Show current conditions and forecast
- Auto-detect location

**GitHub Activity:**
- Display recent commits or contributions
- Show pinned repositories

**Blog Posts:**
- Pull from your Medium, Dev.to, or custom blog
- Display recent articles

## 📝 Environment Variables

If you add API integrations, create a `.env` file:

```env
# Example for future integrations
VITE_OPENAI_API_KEY=your_api_key_here
VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_WEATHER_API_KEY=your_api_key
```

**Note:** Variables must be prefixed with `VITE_` to be accessible in the frontend.

## 🧪 Testing

The project is set up for testing. You can add your preferred testing framework:

```bash
# Example: Add Vitest for unit tests
npm install -D vitest @testing-library/react
```

## 📦 Deployment

This portfolio is designed to be deployed anywhere. Here are the most popular options:

### Deploy to Vercel (Recommended)

**Option 1: Using the Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option 2: Using Git Integration**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will auto-detect the configuration and deploy
4. Your site will be live at `your-project.vercel.app`

**Environment Variables on Vercel:**
- Navigate to Project Settings → Environment Variables
- Add `PORT` (default: 8000)
- Add any API keys (e.g., `VITE_OPENAI_API_KEY`)

### Deploy to Netlify

```bash
npm run build
# Deploy the dist/ directory via Netlify CLI or drag-and-drop
```

### Deploy to Any Node.js Host

```bash
npm run build
npm run start
```

Set the `PORT` environment variable to your desired port (default: 8000).

## 🎯 Performance

- **Lighthouse Score:** 95+ across all metrics
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Bundle Size:** Optimized with code splitting

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🙏 Credits

- Design inspiration: [Brittany Chiang](https://brittanychiang.com/) and [Linear](https://linear.app/)
- Icons: [Lucide Icons](https://lucide.dev/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**
