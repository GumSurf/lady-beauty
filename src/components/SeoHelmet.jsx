import React from "react";
import { Helmet } from "react-helmet-async";

const SeoHelmet = ({
  title,
  description,
  image,
  url,
  jsonLdData,
}) => {
  const defaultTitle = "Lady Beauty";
  const defaultDescription = "Institut de beauté à Lanester - Soins visage, corps, microblading, et plus.";
  const defaultImage = "https://res.cloudinary.com/dopysnsl1/image/upload/v1749216090/pexels-arina-krasnikova-6663368_ezz7fw.webp";
  const defaultUrl = "https://lady-beauty.vercel.app/";

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url || defaultUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow" />

      {/* Injecter JSON-LD si présent */}
      {jsonLdData && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHelmet;
