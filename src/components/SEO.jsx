import { useEffect } from "react";

export default function SEO({ title, description, keywords, canonicalUrl }) {
  useEffect(() => {
    // Update document title
    document.title = title || "Ember & Root | Wood-Fired Fine Dining & Artisanal Restaurant";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      description ||
      "Experience wood-fired, season-driven cooking at Ember & Root. Authentic open flame hearth dining, artisanal local ingredients, online ordering & table reservations.";

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content =
      keywords ||
      "wood fired restaurant, fine dining, artisanal food, steakhouse, farm to table, table reservation, food delivery, Ember and Root";

    // Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;

    // Update Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = metaDescription.content;

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl || window.location.href;
  }, [title, description, keywords, canonicalUrl]);

  return null;
}
