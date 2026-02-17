import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir';
    }

    if (!formData.service) {
      newErrors.service = 'Lütfen bir hizmet seçiniz';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesajınızı yazınız';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      // Form gönderimi simülasyonu
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="iletisim" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projeniz İçin İlk Adımı Atın
          </h2>
          <p className="text-gray-400 text-lg">
            Formu doldurun, size en kısa sürede dönüş yapalım
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Teşekkürler!</h3>
              <p className="text-gray-400">
                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ad Soyad <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.name
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/50'
                      }`}
                    placeholder="Adınız Soyadınız"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-posta <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/50'
                      }`}
                    placeholder="mail@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.phone
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                  placeholder="+90 (5xx) xxx xx xx"
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />git remote add origin https://github.com/MF-Digital-Studio/mfdigitalstudio-web.git
                    {errors.phone}
                  </motion.p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Hizmet Seçimi <span className="text-red-400">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all ${errors.service
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/50'
                    } ${!formData.service ? 'text-gray-500' : ''}`}
                >
                  <option value="" className="bg-[#0a0e1a]">Hizmet Seçiniz</option>
                  <option value="web-design" className="bg-[#0a0e1a] text-white">Web Tasarım</option>
                  <option value="web-development" className="bg-[#0a0e1a] text-white">Web Geliştirme</option>
                  <option value="ecommerce" className="bg-[#0a0e1a] text-white">E-Ticaret</option>
                  <option value="seo" className="bg-[#0a0e1a] text-white">SEO & Optimizasyon</option>
                </select>
                {errors.service && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {errors.service}
                  </motion.p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesajınız <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                  placeholder="Projeniz hakkında bize bilgi verin..."
                ></textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-linear-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
              >
                <span>Gönder</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}