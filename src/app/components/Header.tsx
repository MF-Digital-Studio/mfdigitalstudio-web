import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/logo.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <motion.div
          >
            <img src={logo} className="w-16 h-auto" alt="Logo" />
          </motion.div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm">
            Hizmetler
          </a>
          <a href="#projeler" className="text-gray-400 hover:text-white transition-colors text-sm">
            Projeler
          </a>
          <a href="#hakkimizda" className="text-gray-400 hover:text-white transition-colors text-sm">
            Hakkımızda
          </a>
          <a href="#iletisim" className="text-gray-400 hover:text-white transition-colors text-sm">
            İletişim
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="#iletisim"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0a0e1a] px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            İletişime Geç
          </motion.a>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a
                href="#hizmetler"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </a>
              <a
                href="#projeler"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projeler
              </a>
              <a
                href="#hakkimizda"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="#iletisim"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}