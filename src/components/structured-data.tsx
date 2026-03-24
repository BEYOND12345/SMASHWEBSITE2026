import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SMASH Invoices",
  "alternateName": "SMASH",
  "url": "https://smashinvoices.com",
  "logo": "https://smashinvoices.com/favicon.svg",
  "description": "Voice to invoice software for service businesses. Describe the job, SMASH sends the invoice in under 60 seconds.",
  "email": "dan@smashinvoices.com",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Dan"
  },
  "sameAs": [
    "https://facebook.com/smashquotes",
    "https://instagram.com/smashquotes"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SMASH Invoices",
  "alternateName": "SMASH",
  "url": "https://smashinvoices.com",
  "description": "Voice to invoice software for service businesses. Describe the job out loud, SMASH sends a professional invoice in under 60 seconds.",
  "inLanguage": "en-AU",
  "publisher": {
    "@type": "Organization",
    "name": "SMASH Invoices",
    "url": "https://smashinvoices.com"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SMASH Invoices",
  "author": {
    "@type": "Organization",
    "name": "SMASH Invoices",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Byron Bay",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "email": "dan@smashinvoices.com",
    "url": "https://smashinvoices.com"
  }
};

export function createVideoSchema({
  name,
  description,
  thumbnailUrl,
  embedUrl,
  uploadDate
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
  uploadDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "embedUrl": embedUrl,
    "uploadDate": uploadDate,
    "publisher": {
      "@type": "Organization",
      "name": "SMASH Invoices",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashinvoices.com/favicon.svg"
      }
    }
  };
}

export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SMASH Invoices",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock",
    "description": "Free to start"
  },
  "description": "Voice to invoice software that turns spoken quotes into professional invoices in under 60 seconds. 4x faster than typing. Built for anyone who works with their hands.",
  "featureList": [
    "Voice to quote conversion",
    "Voice to invoice generation",
    "Automated pricing and material lookup",
    "One-tap quote approval",
    "Built-in payment processing",
    "Client management",
    "Quote tracking dashboard"
  ],
  "screenshot": "https://smashinvoices.com/hero_image.png"
};

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function createArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  author,
  image,
  url,
  wordCount,
  keywords
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
  wordCount?: number;
  keywords?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image || "https://smashinvoices.com/hero_image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "inLanguage": "en-AU",
    ...(wordCount && { "wordCount": wordCount }),
    ...(keywords && { "keywords": keywords }),
    "author": {
      "@type": "Person",
      "name": author || "Dan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SMASH Invoices",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashinvoices.com/favicon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
