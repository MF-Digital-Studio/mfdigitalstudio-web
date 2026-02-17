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

        {/* Başlık */}
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

              {/* GRID KISMI AYNEN KORUNDU */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
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
                </div>

                <div>
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
                </div>
              </div>

              {/* Diğer alanlar tasarım korunarak devam ediyor */}
              {/* ... aynı yapıda devam ... */}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                className="w-full bg-linear-to-r cursor-pointer from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <span>Gönder</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
