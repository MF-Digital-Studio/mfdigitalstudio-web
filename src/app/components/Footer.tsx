import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#0a0e1a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <img src={logo} className="w-16 h-16" alt="Logo" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Markalar için hızlı, sürdürülebilir ve dönüşüm odaklı web çözümleri
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  Kurumsal Web Siteleri
                </Link>
              </li>
              <li>
                <Link to="/#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  Özel Sistem Geliştirme
                </Link>
              </li>
              <li>
                <Link to="/#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  Web Uygulamaları
                </Link>
              </li>
              <li>
                <Link to="/#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  SEO & Performans
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link to="/#projeler" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/#hakkimizda" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <a href="#iletisim" className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <div className="flex flex-col gap-2">
                <a href="mailto:info@mfdigitalstudio.com" className="hover:text-white transition-colors">info@mfdigitalstudio.com</a>
                <a href="tel:+905316604002" className="hover:text-white transition-colors">+90 (531) 660 40 02</a>
                <a href="tel:+905370339556" className="hover:text-white transition-colors">+90 (537) 033 95 56</a>
              </div>

              <li className="pt-4 flex gap-4">
                <a href="http://linkedin.com/company/mfdigitalstudio" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 MF Digital Studio. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm flex-wrap justify-center">
            <Link to="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Gizlilik Politikası
            </Link>
            <Link to="/kvkk-aydinlatma-metni" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              KVKK Aydınlatma Metni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}