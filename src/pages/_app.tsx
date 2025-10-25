import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import "../styles/css/bootstrap.min.css";
import "../styles/css/style.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure DOM is ready
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Fallback to hide loader after 3 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            flexDirection: "column",
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#a3e635",
              letterSpacing: "3px",
            }}
          >
            SFB MARKETING...
          </motion.span>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              height: "4px",
              backgroundColor: "#a3e635",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
