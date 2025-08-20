import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-pink-50 text-gray-800">
      <Navbar />
      <main className="pt-16 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function MyApp({ Component, pageProps, router }) {
  const nextRouter = useRouter();

  useEffect(() => {
    // Scroll en haut à chaque changement de page
    window.scrollTo(0, 0);
  }, [nextRouter.asPath]);

  return (
    <>
      {/* ✅ Balises globales (favicon, fonts, manifest, etc.) */}
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/Logo/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/Logo/favicon-16x16.png" />
        <link rel="shortcut icon" href="/images/Logo/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/Logo/apple-touch-icon.png" />
        <link rel="manifest" href="/images/Logo/site.webmanifest" />
        <meta name="theme-color" content="#E5CFCB" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.asPath}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
