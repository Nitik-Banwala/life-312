export const NAV_LINKS = ['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Projeler', 'iletişim']
export const IMAGES = ['/assets/images/png/one.png', '/assets/images/png/two.png', '/assets/images/png/three.png', '/assets/images/png/four.png', '/assets/images/png/five.png', '/assets/images/png/six.png', '/assets/images/png/seven.png',]
export const SLIDER_IMAGES = ['/assets/images/png/sliderone.png',
     '/assets/images/png/slidertwo.png',
      '/assets/images/png/sliderthree.png',
      '/assets/images/png/sliderfour.png',
       '/assets/images/png/sliderfive.png',
       '/assets/images/png/slidersix.png',
        '/assets/images/png/sliderseven.png',]
export const HAKIMZADA = [
    {
        heading: 'Hakkımızda',
        para: 'Profesyonel yaklaşımlar ve profesyonel hizmet anlayışı',
        para2: 'Daha güvenli, daha temiz, daha bakımlı ve daha özel yaşam alanları yaratma amacıyla başlatılan toplu konut projeleri ve kentsel dönüşüm projeleri son günlerde ivme kazanmaktadır.',
        para3: 'Uzman ve eğitimli personelimizle, size şeffaf, yenilikçi ve sağlam bir hizmet yaklaşımı sunarak zamandan tasarruf etmenizi, maliyetleri düşürmenizi, yaşam konforunuzu artırmanızı ve kusursuz bir yaşam alanı sağlamanızı sağlıyoruz.,'
    },
]
export const STATES = [
    {
        number: "10",
        label: "Yıllık Tecrübe",
        desc: "Sektörde Güçlü Deneyim",
    },
    {
        number: "70",
        label: "Proje",
        desc: "Başarıyla Tamamlanan Proje",
    },
    {
        number: "20 000",
        label: "Konut Ve İş Yeri",
        desc: "Yönetilen Konut Ve İşyeri",
    },
    {
        number: "26",
        label: "İş Merkezi Yönetimi",
        desc: "Aktif Yönetim Noktası",
    },
];

export const SERVICES = [
    {
        id: 1,
        icon: 'building',
        title: "Profesyonel İş Merkezi Yönetimi",
        desc: "Binalarınızın verimli yönetimi için profesyonel çözümler sunuyoruz.",
    },
    {
        id: 2,
        icon: "hand",
        title: "Yönetim Danışmanlığı",
        desc: "Stratejik yönetim danışmanlığı yoluyla süreçlerinizi optimize ediyoruz.",
    },
    {
        id: 3,
        icon: "hammer",
        title: "Hukuk Danışmanlığı",
        desc: "Kat mülkiyeti hukuku ve site yönetimi düzenlemeleri konusunda uzman desteği.",
    },
    {
        id: 4,
        icon: "tick",
        title: "Güvenlik Hizmetleri",
        desc: "Profesyonel güvenlik personeli ve modern güvenlik sistemleri.",
    },
    {
        id: 5,
        icon: "hadfon",
        title: "Teknik Destek",
        desc: "Binalarınızın verimli yönetimi için profesyonel çözümler sunuyoruz.",
    },
    {
        id: 6,
        icon: "vaccum",
        title: "Temizlik Hizmetleri",
        desc: "Profesyonel ekipmanlarla donatılmış hijyenik ve temiz yaşam alanları.",
    },
    {
        id: 7,
        icon: "table",
        title: "Muhasebe Ve Aidat Takibi",
        desc: "Şeffaf finansal yönetim, ücret takibi ve finansal raporlama.",
    },
    {
        id: 8,
        icon: "flint",
        title: "Enerji Yönetimi",
        desc: "Enerji performans sertifikaları edinme ve enerji verimliliği danışmanlığı.",
    },
];
export const SEFFAF = [
    {
        icon: 'persons',
        heaing: 'Ekip Çalışması',
        para: 'Deneyimli ve uzman kadromuzla birlikte çalışarak en iyi sonuçları elde ediyoruz.'
    }, {
        icon: 'bulb',
        heaing: 'İnovasyon',
        para: 'Yenilikçi teknolojiler ve modern yaklaşımlarla hizmet kalitemizi sürekli artırıyoruz.'
    }, {
        icon: 'lamp',
        heaing: 'Çözüm Odaklı',
        para: 'Her soruna yapıcı ve kalıcı çözümler üreterek memnuniyeti en üst düzeye taşıyoruz.'
    }, {
        icon: 'task',
        heaing: 'Planlı Yönetim',
        para: 'Sistematik planlama ve etkin kaynak yönetimi ile', 
        para2:'sürdürülebilir başarı sağlıyoruz. '
    },
]
export const STATS_LIST = [
  {
    number: "10",
    title: "Yıllık Tecrübe",
    subtitle: "Sektörde Güçlü Deneyim",
  },
  {
    number: "70",
    title: "Proje",
    subtitle: "Başarıyla Tamamlanan Proje",
  },
  {
    number: "20 000",
    title: "Konut Ve İş Yeri",
    subtitle: "Yönetilen Konut Ve İş yeri",
  },
  {
    number: "26",
    title: "İş Merkezi Yönetimi",
    subtitle: "Aktif Yönetim Noktası",
  },
];
export const PAGE_URLS = {
  HOME: "/",
  ABOUT_US: "/hakkimizda",
  PROJECT: "/projeler",
  OUR_SERVICE: "/hizmetler",
  CONTACT_US: "/iletisim",
  DATA_PROTECTION_CONTACT: "/kvkk",
  COOKIE_POLICY: "/cerez-politikası"
};

export const FOOTER_LIST = [
  {
    label: "Kurumsal",
    links: [
      {
        name: "Life312 Hakkında",
        url: PAGE_URLS.ABOUT_US,
      },
      {
        name: "Neden biz?",
        url: PAGE_URLS.HOME + "#why-choose-us",
      },
      {
        name: "Projeler",
        url: PAGE_URLS.PROJECT,
      },
      {
        name: "Çözüm Ortakları",
        url: PAGE_URLS.HOME + "#solution-partner",
      },
      {
        name: "Hizmetlerimiz",
        url: PAGE_URLS.OUR_SERVICE,
      },
    ],
  },
  {
    label: "Hizmetlerimiz",
    links: [
      {
        name: "Profesyonel iş merkezi yönetimi",
   
      },
      {
        name: "Yönetim danışmanlığı",

      },
      {
        name: "Hukuk danışmanlığı",
   
      },
      {
        name: "Güvenlik hizmetleri",
       
      },
      {
        name: "Enerji Kimlik Belgesinin Alınması",
       
      },
      {
        name: "Teknik destek",
       
      },
      {
        name: "Temizlik hizmetleri",
       
      },
      {
        name: "Muhasebe ve aidat takibi",
        
      },
    ],
  },
  {
    label: "Destek",
    links: [
      {
        name: "Bize Ulaşın",
        url: PAGE_URLS.CONTACT_US,
      },
      {
        name: "Sıkça Sorulan Sorular",
        url: PAGE_URLS.CONTACT_US + '#faq-contact',
      },
    ],
  },
  {
    label: "İletişim",
    links: [
      {
        name: "+0 312 911 30 60",
        icon: "callWhite",
      },
      {
        name: "info@life312.com.tr",
        icon: "mail",
      },
      {
        name: "Altay Mah. Orhan Bey Cad. Atayıldız Plaza No:1/10",
        icon: "location",
      },
    ],
  },
];
export const SOCIAL_LINKS = [
  {
    icon: "facebook",
    link: "https://www.facebook.com",
  },
  {

    icon: "linkdin",
    link: "https://www.linkedin.com",

  },
  {

    icon: "tweter",
    link: "https://x.com/",

  },
  {

    icon: "insta",
    link: "https://www.instagram.com",

  },
];
 export const ALL_PATTERNS = {
  TF: [
    { image: "/assets/images/png/tabone.png",
    },
    { image: "/assets/images/png/tabtwo.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
    { image: "/assets/images/png/tabsix.png",
    },
    { image: "/assets/images/png/tabseven.png",
    },
    {
       image: "/assets/images/png/tabeight.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
    {
      image: "/assets/images/png/tabfive.png",
    },{ image: "/assets/images/png/tabsix.png",
    },
    { image: "/assets/images/png/tabseven.png",
    },
    {
       image: "/assets/images/png/tabeight.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
   {
       image: "/assets/images/png/tabeight.png",
    },
    
   
  ],
  WF: [
    { image: "/assets/images/png/tabsix.png",
    },
    { image: "/assets/images/png/tabseven.png",
    },
    {
       image: "/assets/images/png/tabeight.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
    {
      image: "/assets/images/png/tabfive.png",
    },
  ],
  CN: [
     { image: "/assets/images/png/tabtwo.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
    {
      image: "/assets/images/png/tabfive.png",
    },
    { image: "/assets/images/png/tabsix.png",
    },
    { image: "/assets/images/png/tabseven.png",
    },
    {
       image: "/assets/images/png/tabeight.png",
    },
  ],
  AN: [
    { image: "/assets/images/png/tabone.png",
    },
    { image: "/assets/images/png/tabtwo.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
    {
      image: "/assets/images/png/tabfive.png",
    },
    { image: "/assets/images/png/tabsix.png",
    },
    { image: "/assets/images/png/tabseven.png",
    },
    {
       image: "/assets/images/png/tabeight.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
  ],
  AP: [
    {
      image: "/assets/images/png/tabfour.png",
    },
    {
      image: "/assets/images/png/tabfive.png",
    },
    { image: "/assets/images/png/tabsix.png",
    },
    { image: "/assets/images/png/tabseven.png",
    },
    {
       image: "/assets/images/png/tabeight.png",
    },
    {
       image: "/assets/images/png/tabthree.png",
    },
    {
      image: "/assets/images/png/tabfour.png",
    },
  ],
};
 export const TABS = [
  { id: "TF", label: "Transformation (TF)" },
  { id: "WF", label: "Waterfall (WF)" },
  { id: "CN", label: "Cloud Native (CN)" },
  { id: "AN", label: "AI Native (AN)" },
  { id: "AP", label: "Anti-Patterns (AP)" },
];