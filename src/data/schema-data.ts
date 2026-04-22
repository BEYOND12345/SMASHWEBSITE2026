export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SMASH Invoices",
  "url": "https://smashinvoices.com",
  "logo": "https://smashinvoices.com/og-image.png",
  "description": "Voice-first quoting and invoicing app for sole traders, tradies and contractors. Speak a job description and get a tax-compliant quote (GST, VAT, sales tax or HST/PST) in under 60 seconds, sent to the customer before you leave the job site. Live in Australia, New Zealand, the UK, the US and Canada on iOS and Chrome.",
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
  "description": "Voice-first quoting and invoicing app for sole traders, tradies and contractors. Live in Australia, New Zealand, the UK, the US and Canada on iOS and Chrome.",
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
  "downloadUrl": "https://apps.apple.com/app/id6759475079",
  "description": "Voice-first quoting and invoicing app for sole traders, tradies and contractors. Speak a job description aloud and get a tax-compliant, professionally formatted quote in under 60 seconds — with your own prices, materials priced automatically, customer approval portal, and payment built in. Live in Australia, New Zealand, the UK, the US and Canada on iOS and as a Chrome extension.",
  "featureList": [
    "Voice-to-quote in under 60 seconds",
    "Tax-compliant invoicing (GST, VAT, sales tax, HST/PST)",
    "Personal pricing catalog",
    "2,250+ item materials catalog",
    "Customer approval portal",
    "Built-in payment acceptance",
    "Invoice read receipts",
    "Local business-number support (ABN, NZBN, UTR, EIN, BN)",
    "PDF export",
    "Available on iOS and Chrome"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0",
      "priceCurrency": "AUD",
      "description": "Limited quotes per month"
    },
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "12",
      "priceCurrency": "AUD",
      "description": "20 quotes per month",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      }
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "29",
      "priceCurrency": "AUD",
      "description": "35 quotes per month",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "billingDuration": "P1M"
      }
    },
    {
      "@type": "Offer",
      "name": "Unlimited",
      "price": "49",
      "priceCurrency": "AUD",
      "description": "Unlimited quotes",
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
        "text": "SMASH Invoices has a free plan with 2 quotes per month. Paid plans are Starter at $12 AUD/month (20 quotes), Pro at $29 AUD/month (35 quotes — most popular), and Unlimited at $49 AUD/month (unlimited quotes). All plans include the full feature set — GST compliance, ABN support, the voice-to-quote feature, and Xero/QuickBooks sync."
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
