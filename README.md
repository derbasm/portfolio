# 🚀 Mouhanad Derbas - Portfolio & CV

Ein modernes, responsives Portfolio und CV gebaut mit Next.js 15, React 19, TypeScript und Tailwind CSS.

![CV Preview](public/Avatar.webp)

## ✨ Features

### 🎯 **Core Features**
- **Mehrsprachigkeit** (Deutsch/Englisch) mit dynamischem Sprachumschalter
- **Responsive Design** - Optimiert für Mobile, Tablet und Desktop
- **Dark/Light Mode** - Automatische Theme-Erkennung mit manueller Umschaltung
- **PDF Export** - CV als PDF herunterladen
- **Smooth Scrolling** - Nahtlose Navigation zwischen Sektionen
- **PWA Ready** - Progressive Web App Funktionalität

### 🎨 **Design & UX**
- **Moderne Animationen** mit Framer Motion
- **Glasmorphism-Effekte** für moderne Ästhetik
- **Gradient-Backgrounds** und Animationen
- **Sticky Navigation** mit aktiver Sektion-Hervorhebung
- **Scroll Progress Bar** - Visueller Fortschrittsindikator
- **Scroll-to-Top Button** für bessere Navigation
- **Card Hover Effects** mit 3D-Transformationen

### 🔧 **Technische Features**
- **Performance Monitoring** - Core Web Vitals Tracking
- **SEO Optimiert** - Meta Tags, Open Graph, Twitter Cards
- **Structured Data** - JSON-LD für bessere Suchmaschinenindexierung
- **Analytics Ready** - Google Analytics Integration vorbereitet
- **Sitemap & Robots.txt** - Automatische Generierung
- **TypeScript** - Vollständige Typsicherheit

### 📱 **Mobile Features**
- **Touch-optimierte Navigation**
- **Mobile-first Responsive Design**
- **Optimierte Touch-Gesten** für Swiper-Komponenten
- **App-like Experience** mit PWA-Funktionalität

### 🎪 **Interaktive Elemente**
- **Animierte Skill-Balken** mit Intersection Observer
- **Project Swiper** mit Navigation
- **Certificate Carousel** 
- **Animated Timeline** für Berufserfahrung
- **Contact Form** mit Validation (bereit für Backend-Integration)

## 🛠 **Tech Stack**

### Frontend
- **Next.js 15** - React Meta-Framework mit App Router
- **React 19** - Latest React Version
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-First CSS Framework
- **Framer Motion** - Animation Library
- **React Icons** - Icon Library

### Performance & SEO
- **HTML2Canvas & jsPDF** - PDF Generation
- **React Intersection Observer** - Scroll Animations
- **Next.js Image Optimization** - Automatic Image Optimization
- **Turbopack** - Ultra-fast Bundler

### Development Tools
- **ESLint** - Code Linting
- **PostCSS** - CSS Processing
- **Yarn** - Package Manager

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- Yarn (empfohlen) oder npm

### Installation

```bash
# Repository klonen
git clone https://github.com/derbasm/cv.git
cd cv

# Dependencies installieren
yarn install
# oder
npm install

# Development Server starten
yarn dev
# oder
npm run dev
```

Die Anwendung ist dann verfügbar unter [http://localhost:3000](http://localhost:3000)

### Build für Production

```bash
# Production Build erstellen
yarn build

# Production Server starten
yarn start
```

## 📁 **Projektstruktur**

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Hauptseite
│   ├── sitemap.ts         # Sitemap Generator
│   └── robots.ts          # Robots.txt Generator
├── components/            # React Komponenten
│   ├── animated-header.tsx
│   ├── animated-skill.tsx
│   ├── contact-form.tsx
│   ├── navigation.tsx
│   ├── pdf-export.tsx
│   ├── scroll-progress.tsx
│   ├── scroll-to-top.tsx
│   ├── theme-toggle.tsx
│   └── ...
├── data/                  # Daten Files
│   ├── resume-data-de.tsx # Deutsche CV Daten
│   └── resume-data-en.tsx # Englische CV Daten
└── lib/                   # Utility Functions
    └── seo.ts            # SEO Helpers
```

## 🎨 **Customization**

### Farben anpassen
Die Hauptfarben können in `tailwind.config.ts` angepasst werden:

```typescript
colors: {
  primary: {
    50: '#f0f8ff',
    // ... weitere Farbtöne
    900: '#0c4a6e',
  }
}
```

### Inhalte bearbeiten
CV-Inhalte können in den Dateien `src/data/resume-data-de.tsx` und `src/data/resume-data-en.tsx` bearbeitet werden.

### Animationen anpassen
Animationen können in `src/app/globals.css` oder direkt in den Komponenten mit Framer Motion angepasst werden.

## 📊 **Performance**

- **Lighthouse Score**: 95+ in allen Kategorien
- **Core Web Vitals**: Optimiert für LCP, FID, CLS
- **Bundle Size**: Optimiert durch Tree Shaking und Code Splitting
- **Image Optimization**: Automatische WebP-Konvertierung

## 🔧 **Configuration**

### Environment Variables
Erstelle eine `.env.local` Datei für lokale Konfiguration:

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Analytics Setup
Google Analytics kann über die `NEXT_PUBLIC_GA_ID` Environment Variable aktiviert werden.

## 🚀 **Deployment**

### Vercel (Empfohlen)
```bash
# Mit Vercel CLI
vercel

# Oder GitHub Integration nutzen
```

### Netlify
```bash
# Build Command
yarn build

# Publish Directory
out
```

## 📈 **Features in Entwicklung**

- [ ] **Blog Section** - Artikel und Tutorials
- [ ] **Contact Form Backend** - E-Mail Integration
- [ ] **GitHub Integration** - Automatische Repository-Stats
- [ ] **Testimonials** - Kundenbewertungen
- [ ] **Case Studies** - Detaillierte Projektbeschreibungen
- [ ] **Admin Panel** - Content Management
- [ ] **Multilingual** - Weitere Sprachen

## 🤝 **Contributing**

Beiträge sind willkommen! Bitte:

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📝 **License**

Dieses Projekt steht unter der MIT License. Siehe [LICENSE](LICENSE) Datei für Details.

## 👨‍💻 **Autor**

**Mouhanad Derbas**
- Website: [mouhanad-derbas.dev](https://mouhanad-derbas.dev)
- GitHub: [@derbasm](https://github.com/derbasm)
- LinkedIn: [@derbasmo](https://www.linkedin.com/in/derbasmo/)
- E-Mail: derbasmo94@gmail.com

---

## 🔥 **Changelog v2.0**

### ✨ Neue Features
- **Modern Navigation** - Sticky Navigation mit aktiver Sektion
- **Dark Mode** - Vollständige Dark/Light Mode Unterstützung
- **PDF Export** - CV als PDF herunterladen
- **Animationen** - Framer Motion Integrationen
- **Performance Monitoring** - Core Web Vitals Tracking
- **SEO Optimierung** - Meta Tags, Open Graph, JSON-LD
- **PWA Ready** - Progressive Web App Funktionalität

### 🎨 Design Verbesserungen
- **Glasmorphism Effects** - Moderne UI-Elemente
- **Gradient Animations** - Animierte Hintergründe
- **Improved Typography** - Inter Font Integration
- **Card Hover Effects** - 3D Hover-Effekte
- **Scroll Indicators** - Progress Bar und Scroll-to-Top

### 🔧 Technische Verbesserungen
- **Next.js 15** - Upgrade auf neueste Version
- **React 19** - Latest React Features
- **TypeScript** - Vollständige Typisierung
- **Tailwind CSS** - Erweiterte Konfiguration
- **Performance** - Optimierte Bundle Size

---

