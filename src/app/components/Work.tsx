import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export function Work() {
  const projects = [
    {
      title: "Sağlık Platformu",
      subtitle: "Hastane Randevu Sistemi",
      category: "Sağlık Sektörü",
      description: "Hasta kayıt, randevu yönetimi ve online ödeme entegrasyonlu modern sağlık platformu.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&q=70",
      tags: ["Web App", "Payment", "CRM"],
      metrics: { speed: "98", users: "10K+" }
    },
    {
      title: "E-Ticaret Çözümü",
      subtitle: "Çok Kanallı Satış Platformu",
      category: "E-Ticaret",
      description: "SEO optimize, hızlı yükleme süreleri ve mobil öncelikli tasarım ile modern e-ticaret deneyimi.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&q=70",
      tags: ["E-Commerce", "SEO", "Analytics"],
      metrics: { speed: "95", users: "25K+" }
    },
    {
      title: "Kurumsal Web Sitesi",
      subtitle: "Dijital Ajans Portfolyosu",
      category: "Dijital Pazarlama",
      description: "Modern tasarım dili, interaktif animasyonlar ve güçlü içerik yönetim sistemi.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&q=70",
      tags: ["Corporate", "CMS", "Portfolio"],
      metrics: { speed: "96", users: "5K+" }
    }
  ];

  return (
    <section id="projeler" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Son Çalışmalarımız
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Müşterilerimiz için hayata geçirdiğimiz başarılı projeler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-all duration-300">
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/90 text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <div className="flex gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-xs text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View project button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-blue-400 text-sm font-medium">{project.category}</div>
                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                    <div className="text-gray-500 text-xs">Performance: {project.metrics.speed}/100</div>
                  </div>

                  <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400">Active Users: {project.metrics.users}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-full transition-all duration-300">
            <span>Tüm Projeleri Görüntüle</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}