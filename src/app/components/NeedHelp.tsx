import { motion } from 'motion/react';
import { Rocket, Palette, Code, Headphones } from 'lucide-react';

export function NeedHelp() {
  const options = [
    {
      title: "Yeni bir proje",
      description: "Sıfırdan bir proje başlatmak istiyorum",
      icon: Rocket
    },
    {
      title: "Tasarım",
      description: "Mevcut sitem için tasarım desteği istiyorum",
      icon: Palette
    },
    {
      title: "Geliştirme",
      description: "Web geliştirme hizmeti almak istiyorum",
      icon: Code
    },
    {
      title: "Diğer hizmetler",
      description: "Başka bir konuda destek almak istiyorum",
      icon: Headphones
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-gray-400 text-lg">
            Size en uygun hizmeti bulmak için bize ulaşın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative cursor-pointer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:bg-white/10 group-hover:border-white/20 transition-all text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{option.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}