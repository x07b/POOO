import { useEffect } from "react";

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
  type?: string; // og:type
  noindex?: boolean;
  jsonLd?: object | object[];
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}='${key}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function SEO({ title, description, keywords, canonical, image, type = "website", noindex, jsonLd }: Props) {
  useEffect(() => {
    const siteName = "PROMOKAR | Dinoil Tunisie";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    document.title = fullTitle;

    setMeta("name", "description", description || "PROMOKAR distribue les lubrifiants DINOIL en Tunisie: huiles moteur, ATF, boîtes manuelles, antigel, graisse et poids lourds.");
    setMeta("name", "keywords", (keywords || []).join(", "));

    // Open Graph / Twitter
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description || "");
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", siteName);
    setMeta("property", "og:image", image || "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb23e6bb4032d42ad9db522a9fdba0376?format=webp&width=1200");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description || "");
    setMeta("name", "twitter:image", image || "https://cdn.builder.io/api/v1/image/assets%2F367800b539f442f7b8aca37c33d3b377%2Fb23e6bb4032d42ad9db522a9fdba0376?format=webp&width=1200");

    // Canonical URL
    const href = canonical || `${window.location.origin}${window.location.pathname}`;
    let link = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    // robots
    setMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow");

    // JSON-LD structured data
    const previous = Array.from(document.head.querySelectorAll<HTMLScriptElement>("script[data-seo-jsonld]"));
    previous.forEach((n) => n.remove());
    const payloads: object[] = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    payloads.forEach((payload) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(payload);
      document.head.appendChild(script);
    });
  }, [title, description, keywords?.join("|"), canonical, image, type, noindex, JSON.stringify(jsonLd)]);

  return null;
}
