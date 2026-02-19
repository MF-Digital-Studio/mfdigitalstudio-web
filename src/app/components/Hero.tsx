import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const prefixText = 'Markanızı Büyüten ';
  const highlightText = 'Yüksek Performanslı';
  const suffixText = ' Web Siteleri İnşa Ediyoruz';

  const fullTextLength = useMemo(
    () => prefixText.length + highlightText.length + suffixText.length,
    [prefixText.length, highlightText.length, suffixText.length]
  );

  const [typedCount, setTypedCount] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setTypedCount(fullTextLength);
      setTypingDone(true);
      return;
    }

    setTypedCount(0);
    setTypingDone(false);

    const tickMs = 24;
    const intervalId = window.setInterval(() => {
      setTypedCount((prev) => {
        const next = Math.min(prev + 1, fullTextLength);
        if (next === fullTextLength) {
          window.clearInterval(intervalId);
          setTypingDone(true);
        }
        return next;
      });
    }, tickMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [fullTextLength]);

  const prefixVisible = prefixText.slice(0, Math.min(typedCount, prefixText.length));
  const highlightStart = prefixText.length;
  const highlightCount = Math.max(0, Math.min(typedCount - highlightStart, highlightText.length));
  const highlightVisible = highlightText.slice(0, highlightCount);
  const suffixStart = prefixText.length + highlightText.length;
  const suffixCount = Math.max(0, Math.min(typedCount - suffixStart, suffixText.length));
  const suffixVisible = suffixText.slice(0, suffixCount);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 left-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-20 right-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-purple-600/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">Yüksek Performans & Modern Tasarım</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto"
        >
          {prefixVisible}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {highlightVisible}
          </span>
          {suffixVisible}
          {typingDone && (
            <motion.span
              className="inline-block align-baseline"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            >
              |
            </motion.span>
          )}
        </motion.h1>

        {/* Value Proposition Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-blue-400 font-medium text-lg mb-6 max-w-3xl mx-auto"
        >
          Hızlı yükleme, SEO dostu, dönüşüm optimasyonlu ve baştan sona profesyonel çözümler.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8"
        >
          Modern tasarım ve güçlü teknolojilerle markanızı dijital dünyada öne çıkarıyoruz
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 mt-8 flex-wrap"
        >
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-2 bg-white text-[#0a0e1a] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            Projene Başla
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#hizmetler"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm"
          >
            Hizmetleri İncele
          </a>
        </motion.div>

      </div>
    </section>
  );
}