# NextGen Property Limited

A modern, single-page real estate site for NextGen Property Limited, showcasing the company and
its G-16 Housing Project in Bashundhara, Dhaka, Bangladesh. Built with Next.js.

## 🏢 Project Overview

NextGen Property Limited is a real estate company based in Mohakhali DOHS, Dhaka. This site is
the digital home page for the company, displaying:

- Company overview and background
- The G-16 Housing Project (plot size, floors, units, flat size)
- Building tour videos
- Contact details

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React-based full-stack framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth, production-ready animations
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, consistent icon library
- **Theme Support**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Runtime**: Node.js with modern ES features

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd nextgen-properties
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

### Project Structure

```
app/
├── components/          # Reusable React components
├── layout.tsx          # Root layout and providers
├── page.tsx            # Home page (the only page)
└── globals.css         # Global styles

public/                 # Static assets (images, video)
```

### Key Components

- **PageLoader** - Loading state indicator
- **BackgroundFx** - Visual effects and animations
- **CustomCursor** - Enhanced cursor experience
- **FloatingActions** - Floating action buttons (call / WhatsApp)
- **Header / Footer** - Site navigation and contact info

## 🎨 Features

- ✨ Smooth animations and transitions with Framer Motion
- 🌙 Dark mode support for better user experience
- 📱 Fully responsive design for all devices
- ♿ Semantic HTML for accessibility
- ⚡ Optimized performance with Next.js

## 📝 Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`postcss.config.mjs`** - Tailwind CSS via PostCSS
- **`eslint.config.mjs`** - ESLint rules and configuration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel dashboard
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with a single click

For detailed instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## 📄 License

This project is private and proprietary to NextGen Property Limited.

## 📞 Support & Contact

- Phone: +880 1894-442 810
- Email: nextgenproperty2020@gmail.com
- Address: House# 105, Road# 06, 2nd Floor, Mohakhali DOHS, Dhaka-1206
