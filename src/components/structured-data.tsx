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
  "description": "Voice powered quote and invoice software for tradies. Turn conversations into approved quotes and invoices in seconds.",
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
    "description": "Free beta access"
  },
  "description": "Voice to invoice software that turns spoken quotes into professional invoices. Voice powered quoting 4x faster than typing. Perfect for tradies, contractors, and anyone doing high-volume quoting.",
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
  url
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image || "https://smashinvoices.com/hero_image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
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
