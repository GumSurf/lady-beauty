import Head from "next/head";

const SeoHelmet = ({ title, description, image, url, jsonLdData }) => {
  const defaultTitle = "Lady Beaute";
  const defaultDescription =
    "Institut de beauté à Lanester - Soins visage, corps, microblading, et plus.";
  const defaultImage =
    "https://res.cloudinary.com/dopysnsl1/image/upload/v1749216090/pexels-arina-krasnikova-6663368_ezz7fw.webp";
  const defaultUrl = "https://www.ladybeaute.fr/";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, follow" />

      {/* Inject JSON-LD si présent */}
      {jsonLdData && (
        <script
          type="application/ld+json"
          // Important : utilisation de dangerouslySetInnerHTML pour injecter du JSON-LD valide
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      )}
    </Head>
  );
};

export default SeoHelmet;
