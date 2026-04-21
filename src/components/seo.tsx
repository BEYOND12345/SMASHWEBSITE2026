import { useEffect } from 'react';

interface HrefLang {
  hreflang: string;
  href: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  /** Override the `<meta name="robots">` directive (e.g. "noindex, nofollow"). */
  robots?: string;
  /** Optional hreflang alternates for internationalised pages. */
  hreflangs?: HrefLang[];
}

export function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  robots,
  hreflangs,
}: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        const selectorParts = selector.match(/\[(.+?)="(.+?)"\]/);
        if (selectorParts) {
          element.setAttribute(selectorParts[1], selectorParts[2]);
          element.setAttribute('content', content);
          document.head.appendChild(element);
        }
      }
    };

    if (description) {
      updateMetaTag('meta[name="description"]', description);
    }

    if (keywords) {
      updateMetaTag('meta[name="keywords"]', keywords);
    }

    if (ogTitle) {
      updateMetaTag('meta[property="og:title"]', ogTitle);
    }

    if (ogDescription) {
      updateMetaTag('meta[property="og:description"]', ogDescription);
    }

    if (ogImage) {
      updateMetaTag('meta[property="og:image"]', ogImage);
    }

    if (ogType) {
      updateMetaTag('meta[property="og:type"]', ogType);
    }

    if (twitterCard) {
      updateMetaTag('meta[name="twitter:card"]', twitterCard);
    }

    if (twitterTitle) {
      updateMetaTag('meta[name="twitter:title"]', twitterTitle);
    }

    if (twitterDescription) {
      updateMetaTag('meta[name="twitter:description"]', twitterDescription);
    }

    if (twitterImage) {
      updateMetaTag('meta[name="twitter:image"]', twitterImage);
    }

    if (ogUrl) {
      updateMetaTag('meta[property="og:url"]', ogUrl);
    }

    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (linkElement) {
        linkElement.setAttribute('href', canonical);
      } else {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        linkElement.setAttribute('href', canonical);
        document.head.appendChild(linkElement);
      }
    }

    if (robots) {
      updateMetaTag('meta[name="robots"]', robots);
      updateMetaTag('meta[name="googlebot"]', robots);
    }

    // Replace any existing hreflang alternates when `hreflangs` is provided.
    if (hreflangs && hreflangs.length) {
      document
        .querySelectorAll('link[rel="alternate"][data-smash-hreflang]')
        .forEach(el => el.remove());
      hreflangs.forEach(({ hreflang, href }) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        link.setAttribute('href', href);
        link.setAttribute('data-smash-hreflang', 'true');
        document.head.appendChild(link);
      });
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, ogUrl, twitterCard, twitterTitle, twitterDescription, twitterImage, canonical, robots, hreflangs]);

  return null;
}
