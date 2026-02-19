import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { KvkkInformationText } from "./pages/KvkkInformationText";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import logo from "./assets/logo.svg";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const minDurationMs = prefersReducedMotion ? 0 : 700;
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minDurationMs - elapsed);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish, { once: true });
    return () => {
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0e1a] text-white">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="app-loading"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0e1a]"
            >
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  alt="MF Digital Studio Logo"
                  className="w-24 h-auto mb-6"
                  draggable={false}
                />
                <div className="flex items-center gap-2" aria-label="Loading">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.1s]" />
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Header />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* SEO-friendly TR yollar */}
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="/kvkk-aydinlatma-metni" element={<KvkkInformationText />} />
          {/* Eski İngilizce yollar için yönlendirme */}
          <Route
            path="/privacy-policy"
            element={<Navigate to="/gizlilik-politikasi" replace />}
          />
          <Route
            path="/kvkk-information-text"
            element={<Navigate to="/kvkk-aydinlatma-metni" replace />}
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}