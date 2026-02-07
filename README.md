# 🏫 Doon International School Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF)](https://www.framer.com/motion/)

A modern, responsive website for Doon International School built with Next.js 14, featuring advanced animations, email integration, and optimized performance.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sharadchaturveda-coder/doon-school.git
   cd doon-school
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your Gmail credentials for email functionality.

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Table of Contents

- [🏫 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📧 Email Integration](#-email-integration)
- [🔧 Development](#-development)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🏫 Overview

Doon International School's website showcases the institution's commitment to excellence in education since 1985. The site serves as a digital gateway for prospective students, parents, and the community to learn about academic programs, facilities, admissions, and school activities.

### 🎯 Target Audience
- **Prospective Students & Parents**: Information about admissions, curriculum, and facilities
- **Current Community**: Updates, events, and school announcements
- **Educational Partners**: Institutional information and contact details

## ✨ Features

### 🌟 User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Fast Loading**: Optimized images, lazy loading, and efficient bundling
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 📱 Pages & Functionality
- **Homepage**: Hero section, feature highlights, news ticker, campus stats, auto-popup modal (every reload), QR registration section with interactive scan popup
- **About**: Mission, vision, core values, and comprehensive facilities showcase
- **Admissions**: Application process, requirements, and contact information
- **Discover**: Interactive facility exploration and school highlights
- **Updates**: Latest news, events, and announcements
- **Gallery**: Photo galleries showcasing school life
- **Contact/Enquiry**: Integrated contact form with email notifications

### 🔧 Technical Features
- **Server-Side Rendering**: Next.js App Router for optimal SEO and performance
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Email Integration**: Automated enquiry processing with Gmail SMTP
- **Analytics & Tracking**: Google Tag Manager (GTM) for Google Ads conversion tracking
- **Dynamic Content**: JSON-driven content management system
- **Performance Monitoring**: Built-in analytics and error tracking

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library with concurrent features

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[PostCSS](https://postcss.org/)** - CSS processing tool

### Backend & APIs
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Serverless functions
- **[Nodemailer](https://nodemailer.com/)** - Email sending library
- **Gmail SMTP** - Email delivery service

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[TypeScript Compiler](https://www.typescriptlang.org/)** - Type checking

## 🏗️ Architecture

### 📂 Project Structure
```
doon-school/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── admissions/        # Admissions page
│   ├── api/               # API routes
│   └── ...
├── components/            # Reusable React components
│   ├── ui/               # Basic UI components (button, card, modal)
│   ├── blocks/           # Composite UI blocks (welcome, discover, register)
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── getData.ts        # Data fetching
├── data/                 # Static JSON data
│   ├── site.json         # Site configuration
│   └── doon/             # Page-specific data
└── public/               # Static assets
```

### 🔄 Data Flow

1. **Static Data**: JSON files in `/data` provide content for pages
2. **Dynamic Rendering**: Next.js pre-renders pages at build time
3. **User Interactions**: Client-side JavaScript handles forms and animations
4. **API Communication**: Enquiry forms send data to `/api/enquiry`
5. **Email Processing**: Serverless function processes and sends emails

### 🎨 Component Architecture

- **Atomic Design**: UI components organized by complexity (atoms → molecules → organisms)
- **Composition**: Higher-order components compose smaller, reusable pieces
- **Separation of Concerns**: UI logic separated from business logic
- **Type Safety**: All components use TypeScript interfaces

## 🚀 Getting Started

### For New Developers

If you're new to this project, start here:

1. **Read the Docs**: Check `docs/getting-started.md` for detailed setup
2. **Understand the Stack**: Familiarize yourself with Next.js, TypeScript, and Tailwind
3. **Explore Components**: Start with `components/ui/` for basic building blocks
4. **Follow Patterns**: Look at existing pages to understand component composition

### Development Workflow

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Environment Setup

Create a `.env.local` file with:

```env
# Gmail SMTP Configuration (required for email functionality)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Optional: Analytics and monitoring
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🎨 Design System

### Color Palette
- **Primary**: `#002B6B` (Navy Blue) - Institutional trust and authority
- **Secondary**: `#FFD700` (Gold) - Excellence and achievement
- **Accent**: `#F2B33D` (Amber) - Action and engagement

### Typography
- **Headings**: Custom font stack with fallbacks
- **Body**: Inter font family for optimal readability
- **Scale**: Consistent sizing from mobile to desktop

### Spacing & Layout
- **Grid System**: 12-column responsive grid
- **Spacing Scale**: Consistent 4px-based spacing system
- **Breakpoints**: Mobile-first responsive design

## 📧 Email Integration

The enquiry system uses Gmail SMTP for reliable email delivery:

### Configuration
- **Service**: Gmail SMTP
- **Authentication**: App Passwords (2FA required)
- **Templates**: HTML email templates with responsive design
- **Error Handling**: Comprehensive error logging and user feedback

### Email Features
- **Professional Templates**: Branded HTML emails with school colors
- **Responsive Design**: Mobile-friendly email layouts
- **Quick Actions**: Direct links for phone calls and email replies
- **IST Timestamps**: India Standard Time for all communications

## 🔧 Development

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Airbnb configuration with React and TypeScript rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality checks

### Performance Optimization
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Lazy Loading**: Components and images loaded on demand

### Testing Strategy
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API route and form submission testing
- **E2E Tests**: Critical user journey testing
- **Visual Regression**: UI consistency testing

## 🚢 Deployment

### Build Process
```bash
# Production build
npm run build

# Export static files (optional)
npm run export
```

### Hosting Platforms
- **Vercel** (Recommended): Optimized for Next.js deployment
- **Netlify**: Alternative with good Next.js support
- **Traditional Hosting**: Export to static files for any web server

### Environment Variables
Ensure production environment has:
- `GMAIL_USER` and `GMAIL_APP_PASSWORD` for email functionality
- `NODE_ENV=production` for optimized builds
- Any analytics or monitoring service credentials

## 🤝 Contributing

### Development Guidelines
1. **Branch Strategy**: Feature branches from `main`
2. **Commit Messages**: Conventional commits format
3. **Code Reviews**: All changes require review
4. **Testing**: Ensure tests pass before merging

### Code Style
- **TypeScript**: Strict mode enabled
- **Imports**: Grouped and sorted (React, then external, then internal)
- **Components**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions

### Pull Request Process
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test thoroughly
3. Update documentation if needed
4. Create PR with detailed description
5. Address review feedback
6. Merge after approval

## 📄 License

This project is proprietary software for Doon International School.

## 📞 Support

For technical support or questions:
- **Development Team**: Contact the development team
- **Documentation**: Check `docs/` folder for detailed guides
- **Issues**: Use GitHub Issues for bug reports and feature requests

---

**Built with ❤️ for Doon International School's digital presence**
