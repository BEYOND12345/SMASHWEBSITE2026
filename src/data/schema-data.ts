export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SMASH Invoices",
  "url": "https://smashinvoices.com",
  "logo": "https://smashinvoices.com/og-image.png",
  "description": "Send the invoice before you leave the job. Talk on iPhone or scan Gmail at your desk — SMASH prices from your catalog and sends a tax-compliant invoice (GST, VAT, sales tax or HST/PST) in under 60 seconds. Live in Australia, New Zealand, the UK, the US and Canada.",
  "founder": {
    "@type": "Person",
    "name": "Dan Neale"
  },
  "areaServed": ["AU", "NZ", "GB", "US", "CA"],
  "identifier": {
    "@type": "PropertyValue",
    "name": "ABN",
    "value": "58 600 491 085"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "dan@smashinvoices.com",
    "contactType": "customer support"
  },
  "sameAs": []
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SMASH Invoices",
  "url": "https://smashinvoices.com",
  "description": "Send invoices fast from iPhone (voice) or Gmail (email scan). Catalog pricing, tax compliance, pay links. AU, NZ, UK, US, CA.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://smashinvoices.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SMASH Invoices",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "InvoicingApplication",
  "operatingSystem": "iOS, Chrome (extension)",
  "url": "https://smashinvoices.com",
  "downloadUrl": "https://apps.apple.com/au/app/smash-invoices/id6759475079",
  "description": "Voice and Gmail quoting/invoicing for self-employed service workers. Talk ~30 seconds on iPhone or scan Gmail — SMASH prices from your catalog, you verify, then send a tax-compliant quote or invoice with payment. Unlike ChatGPT, it holds your rates and sends a real PDF. AU, NZ, UK, US, CA.",
  "featureList": [
    "Voice to quote and voice to invoice in about 30 seconds",
    "Catalog pricing — not AI-guessed rates",
    "Instant quote on site, then convert to invoice",
    "Tax-compliant invoicing (GST, VAT, sales tax, HST/PST)",
    "Personal pricing catalog",
    "2,250+ item materials catalog",
    "Customer approval portal",
    "Built-in payment acceptance",
    "Invoice read receipts",
    "Optional NDIS participant numbers per customer",
    "Repeat invoice button for recurring work",
    "Local business-number support (ABN, NZBN, UTR, EIN, BN)",
    "Xero and QuickBooks sync on paid plans",
    "PDF export",
    "Available on iOS and Chrome"
  ],
  "sameAs": [
    "https://smashinvoices.com/voice-invoicing",
    "https://smashinvoices.com/ai-estimates",
    "https://smashinvoices.com/ai-invoicing",
    "https://smashinvoices.com/estimate-generator",
    "https://smashinvoices.com/blog/can-chatgpt-generate-invoices-tradie-guide",
    "https://smashinvoices.com/blog/can-chatgpt-write-a-quote-estimate"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0",
      "priceCurrency": "AUD",
      "description": "5 invoices per month"
    },
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "15",
      "priceCurrency": "AUD",
      "description": "Unlimited invoices with Xero, QuickBooks and CSV export",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      }
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "25",
      "priceCurrency": "AUD",
      "description": "Unlimited invoices",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      }
    },
    {
      "@type": "Offer",
      "name": "Unlimited",
      "price": "35",
      "priceCurrency": "AUD",
      "description": "Unlimited invoices",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      }
    }
  ],
  "inLanguage": ["en-AU", "en-NZ", "en-GB", "en-US", "en-CA"],
  "countriesSupported": ["AU", "NZ", "GB", "US", "CA"]
};

export const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is SMASH Invoices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMASH Invoices is a voice-first quoting and invoicing app for Australian sole traders and tradespeople. You speak a job description aloud and get a GST-compliant quote in under 60 seconds — with your own prices loaded automatically, materials priced from a 2,250+ item Australian catalog, and the quote ready to send to your customer before you leave the job site."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can I create an invoice with SMASH?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With your personal pricing catalog set up, most quotes take under 30 seconds. For new jobs with unfamiliar materials, it typically takes under 60 seconds from speaking the job description to sending the quote. The traditional method — typing on a laptop or phone — takes 15 to 25 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Is SMASH Invoices GST compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every quote and invoice generated by SMASH Invoices is GST-compliant and includes your ABN automatically. SMASH is built specifically for the Australian tax system and sole trader requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What trades can use SMASH Invoices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMASH Invoices is built for any Australian sole trader who performs a service and needs to invoice on the go — including cleaners, handymen, gardeners, painters, mobile mechanics, plumbers, electricians, tilers, concreters, and many more."
      }
    },
    {
      "@type": "Question",
      "name": "How does the voice invoicing feature work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You tap the microphone in the SMASH app and speak the job description naturally — for example: 'Two hours labour, replaced a tap washer, used a new mixer tap from Bunnings.' SMASH transcribes your speech, matches line items to your personal pricing catalog and the built-in Australian materials catalog, applies your prices and markup, and generates a formatted GST-compliant quote ready to send. No typing required."
      }
    },
    {
      "@type": "Question",
      "name": "How do customers approve and pay quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you send a quote, your customer receives a link to a professional approval portal. They tap to approve the quote and can pay directly through the portal. You receive a notification the moment they open it, and another when they approve and pay. The invoice is created automatically on approval."
      }
    },
    {
      "@type": "Question",
      "name": "Is SMASH Invoices free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SMASH Invoices has a free plan with 5 invoices per month. Paid web plans start with Starter at $15 AUD/month for unlimited invoices, Xero and QuickBooks sync, and CSV export. Pro is $25 AUD/month and Unlimited is $35 AUD/month. iOS App Store subscriptions may show Apple pricing of $14.99, $24.99 and $39.99 AUD."
      }
    }
  ]
};

export function createArticleSchemaAI({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://smashinvoices.com/blog/${slug}`,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": "Dan Neale",
      "jobTitle": "Founder, SMASH Invoices",
      "url": "https://smashinvoices.com/founder"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SMASH Invoices",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashinvoices.com/og-image.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://smashinvoices.com/blog/${slug}`
    }
  };
}

export function createBlogFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };
}

export function createSegmentFaqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a
      }
    }))
  };
}
