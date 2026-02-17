import { motion } from "motion/react";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    website: "" // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Ad Soyad gereklidir";

    if (!formData.email.trim()) {
      newErrors.email = "E-posta gereklidir";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }

    if (!formData.phone.trim()) newErrors.phone = "Telefon numarası gereklidir";
    if (!formData.service) newErrors.service = "Lütfen bir hizmet seçiniz";
    if (!formData.message.trim()) newErrors.message = "Mesajınızı yazınız";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Gönderim başarısız");
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          website: ""
        });
        setIsSubmitted(false);
      }, 3000);

    } catch (err) {
      setErrors(prev => ({
        ...prev,
        submit: "Gönderim sırasında hata oluştu. Lütfen tekrar deneyin."
      }));
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
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
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl"
            >
              {errors.submit && (
                <p className="text-red-400 text-sm mb-4">{errors.submit}</p>
              )}

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
              />

              {/* Ad Soyad */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Ad Soyad <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* E-posta */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  E-posta <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Telefon */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Telefon <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Hizmet */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Hizmet Seçimi <span className="text-red-400">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  <option value="">Hizmet Seçiniz</option>
                  <option value="web-design">Web Tasarım</option>
                  <option value="web-development">Web Geliştirme</option>
                  <option value="ecommerce">E-Ticaret</option>
                  <option value="seo">SEO & Optimizasyon</option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Mesaj */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Mesajınız <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Gönder
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
