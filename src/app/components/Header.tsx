import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/logo.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hizmetler");
  const navigate = useNavigate();

  // Scrollspy: Monitor which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hizmetler", "projeler", "hakkimizda", "iletisim-form"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in view (top of element is above middle of screen)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hizmetler", label: "Hizmetler" },
    { id: "projeler", label: "Projeler" },
    { id: "hakkimizda", label: "Hakkımızda" },
    { id: "iletisim-form", label: "İletişim" }
  ];

  const goToSection = (id: string) => {
    navigate(`/#${id}`);
  };

  return (
    <>
      {/* Skip to Content Link - for accessibility */}
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[60] px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md opacity-0 focus:opacity-100 focus:outline-none -translate-y-20 focus:translate-y-0 transition-all"
      >
        Ana İçeriğe Atla
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 focus:outline-none rounded-lg cursor-pointer"
          >
            <motion.div>
              <img src={logo} className="w-16 h-auto" alt="MF Digital Studio Logo" />
            </motion.div>
          </button>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                className={`relative text-sm transition-colors focus:outline-none rounded px-2 py-1 cursor-pointer ${activeSection === link.id
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-white"
                  }`}
                onClick={() => goToSection(link.id)}
              >
                {link.label}
                {/* Active indicator */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0a0e1a] px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors inline-block focus:outline-none cursor-pointer"
              onClick={() => goToSection("iletisim")}
            >
              İletişime Geç
            </motion.button>

            <button
              className="md:hidden text-white focus:outline-none rounded p-1 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
            >
              <nav className="container mx-auto px-6 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.id}
                    className={`text-sm py-2 px-3 rounded transition-colors focus:outline-none cursor-pointer ${activeSection === link.id
                      ? "text-white font-medium bg-white/5"
                      : "text-gray-400 hover:text-white"
                      }`}
                    onClick={() => {
                      goToSection(link.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}