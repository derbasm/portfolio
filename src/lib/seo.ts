import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  author?: string;
  language?: 'de' | 'en';
}

export function generateMetadata({
  title = "Mouhanad Derbas - Full Stack Developer",
  description = "Leidenschaftlicher Full-Stack-Entwickler aus Nürnberg mit Expertise in React, Next.js, Python und modernen Web-Technologien.",
  keywords = ["Full Stack Developer", "React", "Next.js", "Python", "JavaScript", "TypeScript", "Web Development", "Nürnberg"],
  image = "/Avatar.webp",
  url = "https://mouhanad-derbas.com",
  author = "Mouhanad Derbas",
  language = 'de'
}: SEOProps): Metadata {
  const siteTitle = title;
  const siteDescription = language === 'de' 
    ? description 
    : "Passionate Full Stack Developer from Nuremberg with expertise in React, Next.js, Python and modern web technologies.";

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: language === 'de' ? 'de_DE' : 'en_US',
      url: url,
      title: siteTitle,
      description: siteDescription,
      siteName: siteTitle,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [image],
      creator: '@derbasmo',
    },
    alternates: {
      canonical: url,
      languages: {
        'de-DE': url,
        'en-US': `${url}/en`,
      },
    },
    metadataBase: new URL(url),
    verification: {
      google: 'your-google-verification-code',
    },
    category: 'technology',
  };
}

// Structured Data for JSON-LD
export const generateJsonLd = (language: 'de' | 'en') => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mouhanad Derbas",
    "jobTitle": language === 'de' ? "Full Stack Entwickler" : "Full Stack Developer",
    "description": language === 'de' 
      ? "Leidenschaftlicher Full-Stack-Entwickler aus Nürnberg mit Expertise in React, Next.js, Python und modernen Web-Technologien."
      : "Passionate Full Stack Developer from Nuremberg with expertise in React, Next.js, Python and modern web technologies.",
    "url": "https://mouhanad-derbas.com",
    "image": "https://mouhanad-derbas.com/Avatar.webp",
    "email": "derbasmo94@gmail.com",
    "telephone": "+491729099415",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nürnberg",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://github.com/derbasm",
      "https://www.linkedin.com/in/derbasmo/"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React",
      "Next.js",
      "Python",
      "Full Stack Development",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Technische Hochschule Nürnberg"
    },
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nürnberg",
        "addressCountry": "DE"
      }
    }
  };

  return JSON.stringify(baseData);
};
