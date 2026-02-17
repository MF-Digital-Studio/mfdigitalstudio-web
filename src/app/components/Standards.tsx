import { motion } from 'motion/react';
import { Code2, Compass, Rocket, Palette } from 'lucide-react';

export function Standards() {
  const standards = [
    {
      number: "01",
      icon: Compass,
      title: "Keşif & Strateji",
      description: "Markanızı, hedef kitlenizi ve iş modelinizi analiz ederek projeye sağlam bir temel oluşturuyoruz. Doğru strateji, güçlü sonucun anahtarıdır.",
      features: ["Research", "Brand Strategy", "Planning"]
    },
    {
      number: "02",
      icon: Palette,
      title: "Tasarım & Deneyim",
      description: "Kullanıcı odaklı, modern ve estetik arayüzler tasarlıyoruz. Her piksel, dönüşüm ve marka algısı için optimize edilir.",
      features: ["Unique Design", "User Experience", "Brand Identity"]
    },
    {
      number: "03",
      icon: Code2,
      title: "Geliştirme & Performans",
      description: "Temiz, ölçeklenebilir ve sürdürülebilir kod yapısıyla projeyi geliştiriyoruz. Hız, güvenlik ve teknik kalite önceliğimizdir.",
      features: ["Clean Code", "Scalable Architecture", "Performance"]
    },
    {
      number: "04",
      icon: Rocket,
      title: "Yayın & Süreklilik",
      description: "Projeyi sorunsuz şekilde yayına alıyor, bakım ve teknik destekle uzun vadeli iş ortaklığı sağlıyoruz.",
      features: ["Deployment", "Maintenance", "Support"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Her projede uygulanan kalite standartlarımız ve çalışma prensipleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {standards.map((standard, index) => {
            const Icon = standard.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  {/* Number badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-blue-500/60 text-sm font-semibold tracking-wider">
                      {standard.number}
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all"
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {standard.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {standard.description}
                  </p>

                  {/* Features tags */}
                  <div className="flex flex-wrap gap-2">
                    {standard.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}