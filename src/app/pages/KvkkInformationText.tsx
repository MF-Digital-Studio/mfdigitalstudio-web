import { motion } from "motion/react";

export function KvkkInformationText() {
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
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-gray-400 mb-8">
            İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması
            Kanunu (&quot;KVKK&quot;) uyarınca, MF Digital Studio (&quot;Veri Sorumlusu&quot;)
            tarafından kişisel verilerinizin işlenmesine ilişkin olarak sizi
            bilgilendirmek amacıyla hazırlanmıştır.
          </p>

          <div className="space-y-8 text-gray-300 text-sm md:text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Veri Sorumlusu</h2>
              <p>
                KVKK uyarınca kişisel verileriniz, Veri Sorumlusu sıfatıyla MF
                Digital Studio tarafından işlenmektedir. İletişim bilgilerimiz:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>Veri Sorumlusu: MF Digital Studio</li>
                <li>Web: mfdigitalstudio.com</li>
                <li>E-posta: info@mfdigitalstudio.com</li>
                <li>Telefon: +90 (531) 860 40 02 / +90 (537) 033 95 56</li>
                <li>Adres: [Adres Bilgisi]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. İşlenen Kişisel Veriler</h2>
              <p className="mb-3">
                Faaliyetlerimiz kapsamında aşağıdaki kişisel veriler işlenebilir:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Kimlik:</span> ad, soyad
                  (paylaşmanız halinde)
                </li>
                <li>
                  <span className="font-semibold">İletişim:</span> e-posta,
                  telefon, adres (paylaşmanız halinde)
                </li>
                <li>
                  <span className="font-semibold">Müşteri/işlem:</span>{" "}
                  talep/mesaj içerikleri, teklif/sözleşme süreci yazışmaları,
                  proje detayları
                </li>
                <li>
                  <span className="font-semibold">Teknik:</span> IP adresi, log
                  kayıtları, cihaz ve tarayıcı bilgileri, erişim bilgileri
                </li>
                <li>
                  <span className="font-semibold">Çerez verileri:</span> site
                  kullanımına ilişkin veriler (varsa)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                3. Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p className="mb-3">
                Kişisel verileriniz aşağıdaki amaçlarla işlenebilir:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>İletişim taleplerinizin alınması ve yanıtlanması,</li>
                <li>Teklif, sözleşme ve proje süreçlerinin yürütülmesi,</li>
                <li>
                  Hizmet kalitesinin artırılması ve operasyonların yönetimi,
                </li>
                <li>Site güvenliğinin sağlanması, usulsüz kullanımın önlenmesi,</li>
                <li>
                  Hukuki yükümlülüklerin yerine getirilmesi ve hakların
                  korunması.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                4. İşlemenin Hukuki Sebepleri
              </h2>
              <p className="mb-3">
                Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen
                şartlara dayanarak işlenebilir. Başlıca hukuki sebepler:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili
                  olması (KVKK m.5/2-c),
                </li>
                <li>
                  Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi
                  (KVKK m.5/2-ç),
                </li>
                <li>
                  Bir hakkın tesisi, kullanılması veya korunması (KVKK m.5/2-e),
                </li>
                <li>
                  Meşru menfaat (temel hak ve özgürlüklerinize zarar vermemek
                  kaydıyla) (KVKK m.5/2-f),
                </li>
                <li>
                  Gerekli hallerde açık rıza (KVKK m.5/1) – örneğin pazarlama,
                  e-bülten, reklam çerezleri gibi faaliyetler için.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                5. Kişisel Verilerin Aktarılması
              </h2>
              <p className="mb-3">
                Kişisel verileriniz, amaçlarla sınırlı olarak ve KVKK&apos;ya uygun
                şekilde aşağıdaki alıcı gruplarına aktarılabilir:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Barındırma (hosting), altyapı ve teknik hizmet sağlayıcılar,</li>
                <li>E-posta/iletişim hizmet sağlayıcıları,</li>
                <li>Hukuki danışmanlar ve denetçiler (gerektiğinde),</li>
                <li>
                  Yetkili kamu kurum ve kuruluşları (yasal zorunluluk halinde).
                </li>
              </ul>
              <p className="mt-3">
                Yurt dışına aktarım söz konusu olması halinde, KVKK&apos;daki
                şartlar çerçevesinde gerekli tedbirler alınır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Saklama Süreleri</h2>
              <p>
                Kişisel verileriniz; işleme amacının gerektirdiği süre boyunca ve
                ilgili mevzuatta öngörülen süreler doğrultusunda saklanır. Süre
                sonunda silinir, yok edilir veya anonim hale getirilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                7. İlgili Kişi Olarak Haklarınız
              </h2>
              <p className="mb-3">
                KVKK&apos;nın 11. maddesi uyarınca, 9. bölümde listelenen haklara
                sahipsiniz (erişim, düzeltme, silme, itiraz vb.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. Başvuru Yöntemi</h2>
              <p className="mb-3">
                KVKK kapsamındaki taleplerinizi aşağıdaki kanallardan
                iletebilirsiniz:
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>
                  E-posta: info@mfdigitalstudio.com (konu: &quot;KVKK Başvurusu&quot;)
                </li>
                <li>Yazılı başvuru: [Adres Bilgisi]</li>
                <li>(Varsa) KEP: [KEP Adresi]</li>
              </ul>
              <p>
                Başvurularınız, KVKK ve ilgili mevzuat uyarınca mümkün olan en
                kısa sürede ve en geç 30 gün içinde sonuçlandırılır.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

