import corporate from "../assets/projects/corporate.png";
import cafe from "../assets/projects/cafe.png";
import fineDining from "../assets/projects/fine-dining.png";
import gayrimenkul from "../assets/projects/gayrimenkul.png"


export interface CaseStudy {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    metrics: {
        speed: string;
        speedScore?: number;
        seo?: string;
        seoScore?: number;
    };
    liveUrl?: string;
    isDemo?: boolean;
    problem?: string;
    approach?: string;
    solution?: string;
    techStack?: string[];
    results?: {
        metric: string;
        value: string;
        improvement?: string;
    }[];
    servicesUsed?: string[];
    beforeAfter?: {
        before: string;
        after: string;
    };
}

export const caseStudies: CaseStudy[] = [

    {
        id: "1",
        title: "Gayrimenkul Web Sitesi (Demo)",
        subtitle: "Portföy + filtreleme + ilan detay + güçlü CTA",
        category: "Gayrimenkul • Emlak",
        description: "Modern emlak ofisleri için mobil öncelikli, güven veren ve dönüşüm odaklı web deneyimi.",
        image: gayrimenkul, // sizdeki görsel değişken adı neyse onu kullanın
        tags: ["Emlak", "Portföy", "Filtreleme", "Mobile-first"],
        metrics: { speed: "95+", speedScore: 95, seo: "91+", seoScore: 91 },

        problem:
            "Birçok emlak sitesinde ilanlar karışık sunuluyor, filtreleme yetersiz kalıyor ve güven algısı zayıf olduğu için ziyaretçiler iletişime geçmeden çıkıyor.",

        approach:
            "Kullanıcının aradığı ilana hızlı ulaşmasını sağlayan sade filtreleme kurguladık. Büyük görseller, net fiyat/özellik alanı ve WhatsApp/Arama CTA’larını görünür konumlandırdık.",

        solution:
            "Filtrelenebilir portföy sayfası, ilan detay sayfası, yatırım odaklı içerik düzeni ve mobil uyumlu hızlı bir arayüz ile lead toplamayı kolaylaştıran modern emlak sitesi.",

        techStack: ["Vite", "React", "TailwindCSS"],
        servicesUsed: ["Web Tasarım", "Web Geliştirme", "Dönüşüm Optimizasyonu", "Yerel SEO Temelleri"],

        results: [
            { metric: "İlan keşfi", value: "2-3 tık", improvement: "Filtreleme ile hızlı erişim" },
            { metric: "Mobil deneyim", value: "Tam uyum", improvement: "Mobile-first tasarım" },
            { metric: "İletişim aksiyonu", value: "Net CTA", improvement: "Ara / WhatsApp odaklı akış" }
        ],

        beforeAfter: {
            before: "Karışık ilan sunumu, zayıf güven algısı, mobilde düşük okunabilirlik",
            after: "Düzenli portföy, güçlü marka algısı, hızlı ve mobil uyumlu deneyim"
        },

        isDemo: true,
        liveUrl: "https://gayrimenkul-demo.vercel.app/"
    },
    {
        id: "2",
        title: "Kafe Web Sitesi (Demo)",
        subtitle: "Menü + lokasyon + rezervasyon odaklı",
        category: "Yeme-İçme",
        description: "Kafe için hızlı açılan, menü odaklı ve Google harita/iletişim bilgileri net olan demo site.",
        image: cafe,
        tags: ["Kafe", "Menü", "Mobil"],
        metrics: { speed: "95+", speedScore: 95, seo: "91+", seoScore: 91 },
        problem: "Kafelerin çoğu sitesinde menüye ulaşmak zor, mobilde okuması güç ve lokasyon/iletişim bilgisi yeterince görünür değil.",
        approach: "Menüyü ana akışa aldık. CTA olarak 'Yol Tarifi' ve 'Rezervasyon' aksiyonlarını öne çıkardık.",
        solution: "Mobil öncelikli tasarım, menü bölümü, harita bağlantısı, tek tıkla arama/WhatsApp ve kolay rezervasyon akışı.",
        techStack: ["Vite", "React", "TailwindCSS"],
        servicesUsed: ["Web Tasarım", "Menü Tasarımı", "Yerel SEO Temelleri"],
        results: [
            { metric: "Menü erişimi", value: "1 tık", improvement: "Mobil kullanıcı için" },
            { metric: "Navigasyon", value: "Hızlı akış", improvement: "Basit bilgi mimarisi" }
        ],
        beforeAfter: {
            before: "Menü gizli, lokasyon belirsiz, mobil zor okunur",
            after: "Menü ve lokasyon görünür, mobilde kolay kullanım"
        },
        isDemo: true,
        liveUrl: "https://mf-cafe-landing.vercel.app/"
    },
    {
        id: "3",
        title: "Lüks Restoran Sitesi (Demo)",
        subtitle: "Premium görsel dil + rezervasyon CTA",
        category: "Fine Dining",
        description: "Premium algı yaratan görsel dil, şef imzası ve rezervasyon odaklı akışa sahip lüks restoran demo sitesi.",
        image: fineDining,
        tags: ["Restoran", "Premium", "Branding"],
        metrics: { speed: "90+", speedScore: 90, seo: "91+", seoScore: 91 },
        problem: "Lüks restoranlarda en kritik nokta güven ve 'premium algı'. Ancak birçok sitede görsel dil ve içerik bunu desteklemiyor.",
        approach: "Minimal tipografi, güçlü görseller, net menü/şef hikayesi ve belirgin rezervasyon CTA’ları ile premium bir akış tasarladık.",
        solution: "Hero + imza yemekler + menü özeti + konsept/şef + rezervasyon CTA + iletişim akışı.",
        techStack: ["Vite", "React", "TailwindCSS"],
        servicesUsed: ["Web Tasarım", "Marka Dili", "CTA / Rezervasyon Akışı"],
        results: [
            { metric: "Premium algı", value: "Yüksek", improvement: "Minimal tasarım + görsel dil" },
            { metric: "Rezervasyon odağı", value: "Net CTA", improvement: "Tek hedef akış" }
        ],
        beforeAfter: {
            before: "Standart şablon, zayıf premium algı",
            after: "Premium görünüm, rezervasyon odaklı deneyim"
        },
        isDemo: true,
        liveUrl: "https://mf-fine-dining.vercel.app/"
    },
    {
        id: "4",
        title: "Kurumsal Tanıtım Sitesi (Demo)",
        subtitle: "Modern landing + hizmet odaklı yapı",
        category: "Kurumsal",
        description: "Lead odaklı, hızlı ve mobil uyumlu kurumsal demo site. Net hizmet anlatımı ve güçlü CTA yapısı.",
        image: corporate,
        tags: ["Kurumsal", "Landing", "UI/UX"],
        metrics: { speed: "95+", speedScore: 95, seo: "91+", seoScore: 91 },
        problem: "Birçok kurumsal sitede mesaj net değil, CTA zayıf ve içerik dağınık olduğu için ziyaretçi dönüşümü düşük kalıyor.",
        approach: "Net bir bilgi mimarisi kurguladık: hero + değer önerisi + hizmetler + süreç + iletişim. İçerik kısa, taranabilir ve CTA odaklı.",
        solution: "Tek sayfa akış, dikkat dağıtmayan tasarım, form entegrasyonu ve dönüşüm odaklı CTA’lar.",
        techStack: ["Vite", "React", "TailwindCSS"],
        servicesUsed: ["Web Tasarım", "Web Geliştirme", "Dönüşüm Optimizasyonu"],
        results: [
            { metric: "Sayfa hızı hedefi", value: "95+ Lighthouse", improvement: "Performans odaklı yapı" },
            { metric: "Mobil uyumluluk", value: "Tam uyum", improvement: "Responsive tasarım" }
        ],
        beforeAfter: {
            before: "Dağınık içerik, zayıf CTA, düşük güven hissi",
            after: "Net mesaj, güçlü CTA, modern görünüm"
        },
        isDemo: true,
        liveUrl: "https://mf-corporate-landing.vercel.app/"
    }

];
