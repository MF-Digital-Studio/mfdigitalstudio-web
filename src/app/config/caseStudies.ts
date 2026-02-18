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
        users: string;
    };
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
        title: "Sağlık Platformu",
        subtitle: "Hastane Randevu Sistemi",
        category: "Sağlık Sektörü",
        description: "Hasta kayıt, randevu yönetimi ve online ödeme entegrasyonlu modern sağlık platformu.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&q=70",
        tags: ["Web App", "Payment", "CRM"],
        metrics: { speed: "98", users: "10K+" },
        problem: "Hastanelerin manuel randevu sistemleri zaman alıcı, hatalara açık ve hasta memnuniyetini azaltıyordu. Dijital transformasyon şarttı.",
        approach: "Müşteri ihtiyaçlarını detaylı analiz ederek, hasta ve doktor arayüzü ayrı tasarladık. Entegre ödeme ve SMS bildirimleri ekledik.",
        solution: "Tam fonksiyonel randevu sistemi, gerçek zamanlı slot yönetimi, online ödeme, otomatik hatırlatıcılar ve detaylı raporlama.",
        techStack: ["React", "Node.js", "PostgreSQL", "Stripe API", "Twilio"],
        results: [
            { metric: "Randevu işleme süresi", value: "30 sn", improvement: "-80% karşılık önceki 2-3 saat" },
            { metric: "Hasta memnuniyeti", value: "4.8/5", improvement: "Yeni sistem sayesinde" },
            { metric: "Operasyonel maliyet", value: "-40%", improvement: "İş yükü azalması ile" },
            { metric: "Aktif kullanıcı", value: "10.000+", improvement: "İlk 6 ayda" }
        ],
        servicesUsed: ["Web Uygulaması", "API Entegrasyonu", "Veri Bazı Tasarımı"],
        beforeAfter: {
            before: "Telefon + Excel tabanlı randevu yönetimi",
            after: "Otomatik, ölçeklenebilir dijital platform"
        }
    },
    {
        id: "2",
        title: "E-Ticaret Çözümü",
        subtitle: "Çok Kanallı Satış Platformu",
        category: "E-Ticaret",
        description: "SEO optimize, hızlı yükleme süreleri ve mobil öncelikli tasarım ile modern e-ticaret deneyimi.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&q=70",
        tags: ["E-Commerce", "SEO", "Analytics"],
        metrics: { speed: "95", users: "25K+" },
        problem: "Eski e-ticaret platformu yavaş, SEO sıralamaları düşük ve mobil deneyim kötüydü. Satışlar stagnasyondaydı.",
        approach: "Teknik SEO odaklı migreeyonu planladık, sayfa hızını iyileştirdik ve modern frontend mimarisine geçtik.",
        solution: "Yeni Next.js tabanlı platform, image optimizasyonu, lazy loading, structured data, ve sitemap/robots.txt optimizasyonu.",
        techStack: ["Next.js", "Shopify API", "Algolia Search", "Cloudinary", "Analytics 4"],
        results: [
            { metric: "Sayfa yüklenme hızı", value: "1.2 sn", improvement: "-75% önceki 4+ sn'den" },
            { metric: "Google sıralaması", value: "Top 3 для 120+ keywords", improvement: "+200% traffic" },
            { metric: "Dönüşüm oranı", value: "+45%", improvement: "Hız + UX iyileştirmesi" },
            { metric: "Mobil satışlar", value: "+60%", improvement: "Responsive tasarımdan" }
        ],
        servicesUsed: ["E-Ticaret Platformu", "SEO Optimizasyonu", "Performans Tuning"],
        beforeAfter: {
            before: "Ağır, yavaş, SEO-unfriendly platform",
            after: "Hızlı, optimize, arama motoru dostu modern site"
        }
    },
    {
        id: "3",
        title: "Kurumsal Web Sitesi",
        subtitle: "Dijital Ajans Portfolyosu",
        category: "Dijital Pazarlama",
        description: "Modern tasarım dili, interaktif animasyonlar ve güçlü içerik yönetim sistemi.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&q=70",
        tags: ["Corporate", "CMS", "Portfolio"],
        metrics: { speed: "96", users: "5K+" },
        problem: "Eski kurumsal site tarihi görünüyor, içerik yönetimi zor ve lead capture sistemi yoktu.",
        approach: "Premium tasarım kütüphanesi oluşturduk, interaktif animasyonlar ekledik ve headless CMS entegre ettik.",
        solution: "Fully custom React + Framer Motion animasyonlar, Sanity CMS backend, email automation, ve analytics tracking.",
        techStack: ["React", "Sanity CMS", "Framer Motion", "TailwindCSS", "Vercel"],
        results: [
            { metric: "Lead generasyon", value: "+200%", improvement: "CTA optimizasyonundan" },
            { metric: "Ortalama oturum süresi", value: "4:32", improvement: "İlgi çekici içerik sayesinde" },
            { metric: "Brand arama", value: "+150%", improvement: "Tasarım ile fark yapması" },
            { metric: "İçerik güncelleme süresi", value: "5 dk", improvement: "CMS sayesinde" }
        ],
        servicesUsed: ["Web Tasarımı", "CMS İntegrasyonu", "Animasyon"],
        beforeAfter: {
            before: "Statik HTML, sıkıcı tasarım, güncelleme zorluğu",
            after: "Dinamik, modern, animasyonlu, kolay yönetilir sistem"
        }
    }
];
