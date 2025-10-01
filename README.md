# Portfolio Website

A modern, professional portfolio website built with Next.js and Tailwind CSS, designed to showcase technical leadership capabilities for positions at tech startups.

## Tagline
"Building secure, intelligent systems that scale"

## Technology Stack
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom design system
- **Typography:** Inter font family
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Language:** TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
├── lib/              
|   ├── components/         # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── sections/       # Page sections
│   │   └── layout/         # Layout components
│   ├── data/               # Portfolio data (JSON)
│   ├── types/              # TypeScript type definitions
└── public/                 # Static assets
```

## Content Management

Portfolio content is managed through structured JSON files in the `data/` directory, making it easy to update projects, skills, and experience without touching the code.
