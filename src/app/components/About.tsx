import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, DollarSign, Handshake, ChevronDown } from 'lucide-react';

export function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      icon: MessageSquare,
      title: "Hızlı ve Net Süreç Yönetimi",
      subtitle: "Projelerimizi planlı, ölçülebilir ve raporlanabilir şekilde yönetiyoruz.",
      description: "İş dünyasında zamanın kritik olduğunu biliyoruz. Bu yüzden sizi hiçbir aşamada belirsizlik içinde bırakmıyoruz.",
      details: [
        "Tüm taleplere 24 saat içinde yanıt garantisi",
        "Haftalık ilerleme raporu",
        "Süreç boyunca tam şeffaflık"
      ]
    },
    {
      icon: DollarSign,
      title: "Net & Şeffaf Fiyatlandırma",
      subtitle: "Net kapsam ve anlaşılır fiyat teklifleri.",
      description: "Projenin kapsamını baştan netleştirir, sürpriz maliyetlere yer bırakmayız. Bütçenize uygun, ölçeklenebilir çözümler sunarız.",
      details: [
        "Sabit proje teklifi",
        "Gizli maliyet yok",
        "Net teslim takvimi",
        "Ölçeklenebilir paketler"
      ]
    },
    {
      icon: Handshake,
      title: "Uzun Vadeli İş Ortaklığı",
      subtitle: "İlk projenizden sonra da işinizin gelişimine destek oluyoruz.",
      description: "Projenin teslimi bizim için bitiş değil, başlangıçtır. Markanız büyüdükçe altyapınız da büyümeye hazır olur.",
      details: [
        "Yayın sonrası destek",
        "Performans ve bakım",
        "Sürekli geliştirme imkanı",
        "Uzun vadeli iş birliği"
      ]
    }
  ];

  return (
    <section id="hakkimizda" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Neden Biz?
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-500/50 bg-white/10' : 'border-white/10'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-start gap-4 text-left hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-500/20' : 'bg-white/10'
                      }`}>
                      <Icon className={`w-6 h-6 transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-400'
                        }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.subtitle}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[88px]">
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <ul className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}