import { motion } from 'motion/react';
import { Target, Clock, Zap, TrendingUp, ArrowRight } from 'lucide-react';

export function About() {
  const valueBlocks = [
    {
      id: 1,
      icon: Target,
      title: "Stratejik Yaklaşım",
      description: "Tasarıma başlamadan önce markanızı, hedeflerinizi ve müşterilerinizi derinlemesine analiz ederiz. Doğru strateji olmadan hiçbir tasarım başarılı olamaz. Sağlam bir foundation yaratarak uzun vadeli başarınızın temelini atarız.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      id: 2,
      icon: Clock,
      title: "Şeffaf ve Planlı Süreç",
      description: "Net teslim tarihleri, haftalık bilgilendirme raporları ve sürpriz maliyet yok. Projenin her aşamasında tam kontrole sahipsiniz. Belirsizlik yerine berraklık sunarak işinize odaklanabilmenizi garantiliyoruz.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      id: 3,
      icon: Zap,
      title: "Modern ve Ölçeklenebilir Çözümler",
      description: "SEO uyumlu yapı, yıldırım hızı ve performans optimizasyonu. Günümüzün web standartlarının en iyisini uyguluyoruz. Markanız büyüdükçe sisteminiz de sorunsuz şekilde ölçeklenmeye hazır olur.",
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Uzun Vadeli İş Ortaklığı",
      description: "Proje teslimi bizim için bitiş değil, başlangıçtır. Yayın sonrası destek, performans takibi ve stratejik danışmanlık ile markanızın büyümesine eşlik ederiz. Başarınız, bizim referansımızdır.",
      color: "from-green-500/20 to-green-600/20"
    }
  ];

  return (
    <section id="hakkimizda" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Neden MF Digital Studio?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projelerinizi sadece tasarlamıyor, markanıza gerçek değer katıyoruz.
          </p>
        </motion.div>

        {/* Value Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {valueBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative"
              >
                {/* Card glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${block.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500 pointer-events-none`} />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:bg-white/8 group-hover:border-white/20 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                    {block.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-base">
                    {block.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* CTA Strip background glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

          <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Markanızı Bir Üst Seviyeye Taşımaya Hazır Mısınız?
                </h3>
                <p className="text-gray-400 text-lg">
                  İlk adımı atın ve markanızın potansiyelini ortaya çıkarın.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <motion.a
                  href="#iletisim"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 whitespace-nowrap"
                >
                  Ücretsiz Keşif Görüşmesi
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="#projeler"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:bg-white/5 whitespace-nowrap"
                >
                  Projelerimizi İncele
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}