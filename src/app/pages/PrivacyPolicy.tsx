import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Gizlilik Politikası
          </h1>
          <p className="text-gray-400 mb-8">
            Bu Gizlilik Politikası, MF Digital Studio (&quot;Şirket&quot;, &quot;biz&quot;)
            tarafından işletilen mfdigitalstudio.com alan adlı web sitesi
            (&quot;Site&quot;) üzerinden toplanan kişisel verilerin işlenmesine ilişkin
            esasları açıklar. Siteyi ziyaret ederek bu politikada belirtilen
            şartları kabul etmiş olursunuz.
          </p>

          <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Kapsam</h2>
              <p>
                Bu politika; Site&apos;yi ziyaret eden kullanıcılar, Site üzerinden
                bizimle iletişime geçen kişiler, potansiyel müşteri/iş ortakları
                ve hizmetlerimizle etkileşime giren kişiler için geçerlidir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Toplanan Veriler</h2>
              <p className="mb-3">
                Site üzerinden aşağıdaki veri türleri işlenebilir:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Kimlik bilgileri:</span> ad, soyad
                  (iletişim formu vb. aracılığıyla paylaşmanız halinde)
                </li>
                <li>
                  <span className="font-semibold">İletişim bilgileri:</span> e-posta,
                  telefon, adres (paylaşmanız halinde)
                </li>
                <li>
                  <span className="font-semibold">İşlem bilgileri:</span> talep/mesaj
                  içerikleri, teklif/sözleşme süreçlerine ilişkin yazışmalar
                </li>
                <li>
                  <span className="font-semibold">Teknik veriler:</span> IP adresi,
                  tarayıcı bilgisi, cihaz bilgisi, erişim zamanı, log kayıtları
                </li>
                <li>
                  <span className="font-semibold">Çerez verileri:</span> çerez/benzeri
                  teknolojiler aracılığıyla toplanan kullanım verileri (aşağıda
                  açıklanır)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Verilerin Toplanma Yöntemleri</h2>
              <p>
                Veriler; (i) Site formları, (ii) e-posta/telefon üzerinden
                iletişim, (iii) çerezler ve benzeri teknolojiler, (iv) sunucu
                logları ve güvenlik kayıtları aracılığıyla toplanabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Kişisel Verilerin İşlenme Amaçları</h2>
              <p className="mb-3">
                Kişisel verileriniz, aşağıdaki amaçlarla işlenebilir:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>İletişim taleplerini yanıtlamak ve müşteri desteği sağlamak,</li>
                <li>Teklif/sözleşme süreçlerini yürütmek ve proje iletişimini sürdürmek,</li>
                <li>Site&apos;nin güvenliğini sağlamak, kötüye kullanımı önlemek,</li>
                <li>Site performansını ölçmek ve kullanıcı deneyimini geliştirmek,</li>
                <li>
                  Yasal yükümlülükleri yerine getirmek ve olası uyuşmazlıklarda
                  haklarımızı korumak.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Çerezler (Cookies)</h2>
              <p className="mb-3">
                Site, deneyimi iyileştirmek ve bazı işlevleri sağlamak için
                çerezler kullanabilir.
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  <span className="font-semibold">Zorunlu çerezler:</span> Site&apos;nin
                  doğru çalışması için gereklidir.
                </li>
                <li>
                  <span className="font-semibold">
                    Analitik/performans çerezleri (varsa):
                  </span>{" "}
                  Site kullanımını analiz etmeye yardımcı olur.
                </li>
                <li>
                  <span className="font-semibold">Pazarlama çerezleri (varsa):</span>{" "}
                  İlgi alanlarına uygun içerik/iletişim sunmak için kullanılabilir.
                </li>
              </ul>
              <p className="mb-3">
                Çerezleri tarayıcı ayarlarınızdan yönetebilir veya silebilirsiniz.
                Ancak çerezleri devre dışı bırakmanız Site&apos;nin bazı bölümlerinin
                düzgün çalışmamasına neden olabilir.
              </p>
              <p className="text-gray-400 text-xs">
                Eğer Google Analytics / Meta Pixel vb. kullanıyorsanız, burada
                isimlerini ekleyebilirsiniz. Kullanılmıyorsa bu cümle metinden
                kaldırılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                6. Üçüncü Taraf Hizmet Sağlayıcılar ve Veri Paylaşımı
              </h2>
              <p className="mb-3">
                Kişisel verileriniz, yalnızca gerekli olduğu ölçüde ve mevzuata
                uygun şekilde aşağıdaki alıcı gruplarıyla paylaşılabilir:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Barındırma (hosting), altyapı ve teknik hizmet sağlayıcılar,</li>
                <li>E-posta/iletişim hizmet sağlayıcıları,</li>
                <li>Hukuki danışmanlar, denetçiler (gerekli hallerde),</li>
                <li>
                  Yetkili kamu kurum ve kuruluşları (yasal zorunluluk halinde).
                </li>
              </ul>
              <p className="mt-3">
                Bu paylaşımlarda veri güvenliği için gerekli idari ve teknik
                önlemler alınır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizi korumak için makul teknik ve idari tedbirler
                uygularız (erişim kısıtlamaları, loglama, yetkilendirme, yedekleme
                vb.). Ancak internet üzerinden yapılan veri aktarımının tamamen
                güvenli olduğu garanti edilemez.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Saklama Süreleri</h2>
              <p>
                Veriler; işlenme amacının gerektirdiği süre boyunca ve ilgili
                mevzuatta öngörülen zamanaşımı/saklama sürelerine uygun şekilde
                saklanır. Süre sonunda silinir, yok edilir veya anonim hale
                getirilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. Haklarınız</h2>
              <p className="mb-3">
                KVKK kapsamında, kişisel verilerinizle ilgili olarak aşağıdaki
                haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>İşlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse bilgi talep etme,</li>
                <li>Amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Aktarıldığı üçüncü kişileri bilme,</li>
                <li>Eksik/yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>
                  KVKK&apos;da öngörülen şartlarla silinmesini/yok edilmesini isteme,
                </li>
                <li>
                  İşlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
                </li>
                <li>
                  Otomatik sistemlerle analiz sonucu aleyhe bir sonucun ortaya
                  çıkmasına itiraz etme,
                </li>
                <li>
                  Kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. İletişim</h2>
              <p className="mb-3">
                Bu politika veya kişisel verilerinizle ilgili talepleriniz için:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>E-posta: info@mfdigitalstudio.com</li>
                <li>Web: mfdigitalstudio.com</li>
                <li>Telefon: +90 (531) 860 40 02 / +90 (537) 033 95 56</li>
                <li>Adres: [Adres Bilgisi]</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

