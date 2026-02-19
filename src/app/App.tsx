import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { KvkkInformationText } from "./pages/KvkkInformationText";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";

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
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0e1a] text-white">
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