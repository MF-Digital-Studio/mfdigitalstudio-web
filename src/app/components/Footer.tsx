import logo from "../assets/logo.svg";
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
                <a href="#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kurumsal Web Siteleri
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Özel Sistem Geliştirme
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Web Uygulamaları
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="text-gray-400 hover:text-white transition-colors text-sm">
                  SEO & Performans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Şirket</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hakkimizda" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#projeler" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#iletisim" className="text-gray-400 hover:text-white transition-colors text-sm">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@mfdigitalstudio.com</li>
              <li>+90 (531) 660 40 02</li>
              <li>+90 (537) 033 95 56</li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://github.com/MF-Digital-Studio" className="hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
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
            <a href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors">
              Gizlilik Politikası
            </a>
            <a href="/kvkk-aydinlatma-metni" className="text-gray-400 hover:text-white transition-colors">
              KVKK Aydınlatma Metni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}