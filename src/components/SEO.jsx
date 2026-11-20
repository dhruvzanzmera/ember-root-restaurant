import { useEffect } from "react";

const SITE_URL = "https://emberandroot.com";
const DEFAULT_TITLE = "Ember & Root | Wood-Fired Fine Dining & Artisanal Restaurant";
const DEFAULT_DESCRIPTION =
  "Experience wood-fired, season-driven cooking at Ember & Root. Authentic open flame hearth dining, artisanal local ingredients, online ordering & table reservations.";
const DEFAULT_KEYWORDS =
  "wood fired restaurant, fine dining, artisanal food, steakhouse, farm to table, table reservation, food delivery, Ember and Root, Surat restaurant";
const SHARE_IMAGE =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop";
const SHARE_IMAGE_ALT = "Warmly lit dining room at Ember & Root";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function SEO({ title, description, keywords, canonicalUrl }) {
  useEffect(() => {
    const pageTitle = title || DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const canonical = new URL(canonicalUrl || window.location.pathname, SITE_URL).href;

    document.title = pageTitle;
    setMeta("name", "description", pageDescription);
    setMeta("name", "keywords", keywords || DEFAULT_KEYWORDS);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", pageDescription);
    setMeta("property", "og:image", SHARE_IMAGE);
    setMeta("property", "og:image:alt", SHARE_IMAGE_ALT);
    setMeta("property", "og:site_name", "Ember & Root");
    setMeta("property", "og:locale", "en_US");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", pageDescription);
    setMeta("name", "twitter:image", SHARE_IMAGE);
    setMeta("name", "twitter:image:alt", SHARE_IMAGE_ALT);

    let linkCanonical = document.head.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;
  }, [title, description, keywords, canonicalUrl]);

  return null;
}
