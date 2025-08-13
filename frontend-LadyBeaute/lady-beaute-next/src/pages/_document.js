import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Logo/favicon-16x16.png" />
        <link rel="shortcut icon" href="/images/Logo/favicon.ico" />

        {/* Apple */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Logo/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/images/Logo/site.webmanifest" />
        <meta name="theme-color" content="#E5CFCB" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins&display=swap"
          rel="stylesheet"
        />

        {/* SEO de base — souvent on préfère gérer ça par page avec next/head */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lady Beaute" />
        <meta name="copyright" content="Lady Beaute" />

        {/* Open Graph */}
        <meta property="og:title" content="Institut Lady Beaute | Soins Esthétiques à Lanester" />
        <meta
          property="og:description"
          content="Découvrez les soins de beauté et de bien-être proposés par Lady Beaute à Lanester."
        />
        <meta property="og:image" content="https://lady-beauty.vercel.app/images/pexels-pixabay-237382-1920.jpg" />
        <meta property="og:url" content="https://lady-beauty.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Institut Lady Beaute | Soins Esthétiques à Lanester" />
        <meta name="twitter:description" content="Soins visage, corps, dermopigmentation et bien-être à Lanester." />
        <meta name="twitter:image" content="https://lady-beauty.vercel.app/images/pexels-pixabay-237382-1920.jpg" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical */}
        <link rel="canonical" href="https://lady-beauty.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
