import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

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
