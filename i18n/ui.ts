export const languages = {
  en: 'English',
  tr: 'Türkçe',
  ru: 'Русский',
  zh: '简体中文' // Simplified Chinese
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'pageTitle': '~/portfolio',
    'homePage.h1': 'Clean Code. Systems. Graphics.',
    'homePage.h1.p': 'I build fast, minimal software and occasional pretty pixels.',
    'homePage.GlassButtonText': 'View Projects',
    'homePage.About': 'About',
    'homePage.About.p1': 'Every now and then I wonder if I even like programming, or if I just hate not understanding things I’ll never use.',
    'homePage.About.p2': 'Then I spend four hours debugging why my latest wayland config got nuked.',
    'homePage.About.p3': 'Maybe that’s what passion is. Or maybe it’s brain damage. Hard to say.',
    'homePage.About.p4': '',

    'footer.note.before': '© ' + new Date().getFullYear().toString() + ' M. Murat Budak – This website uses',
    'footer.note.link': 'Matomo',
    'footer.note.after': ', a self-hosted analytics platform.',

    'navbar.home': 'Home',
    'navbar.projects': 'Projects',
    'navbar.blog': 'Blog',
    'navbar.contact': 'Contact',

    'wipPage.title': '~/wip',
    'wipPage.text': 'WORK IN PROGRESS',
    'wipPage.subtitle': 'This page is currently under construction. Please check back later for updates!',
  },
tr: {
    'pageTitle': '~/portfolyo',
    'homePage.h1': 'Temiz Kod. Sistemler. Grafikler.',
    'homePage.h1.p': 'Hızlı, minimal yazılımlar ve ara sıra da güzel pikseller.',
    'homePage.GlassButtonText': 'Projeleri Gör',
    'homePage.About': 'Hakkımda',
    'homePage.About.p1': 'Ara sıra programlamayı gerçekten sevip sevmediğimi, yoksa sadece asla kullanmayacağım şeyleri anlamamaktan mı nefret ettiğimi sorguluyorum.',
    'homePage.About.p2': 'Sonra bir bakıyorum, son wayland yapılandırmamın neden patladığını ayıklamak için dört saat harcamışım.',
    'homePage.About.p3': 'Sanırım buna tutku debilebilir, ya da belki de beyin hasarıdır. Söylemesi güç.',
    'homePage.About.p4': '',

    'footer.note.before': '© ' + new Date().getFullYear().toString() + ' M. Murat Budak – Bu web sitesi kendi sunucumda çalışan açık kaynaklı analiz platformu',
    'footer.note.link': 'Matomo',
    'footer.note.after': '’yu kullanmaktadır.',

    'navbar.home': 'Ana Sayfa',
    'navbar.projects': 'Projeler',
    'navbar.blog': 'Blog',
    'navbar.contact': 'İletişim'
  },

ru: {
    'pageTitle': '~/портфолио', // Portfolyo
    'homePage.h1': 'Чистый код. Системы. Графика.', // Clean Code. Systems. Graphics.
    'homePage.h1.p': 'Я создаю быстрое, минималистичное ПО и иногда красивые пиксели.', // I build fast, minimal software and occasional pretty pixels.
    'homePage.GlassButtonText': 'Посмотреть проекты', // View Projects
    'homePage.About': 'Обо мне', // About
    
    /* === ÖNERİLEN DEĞİŞİKLİK BURADA BAŞLIYOR === */
    'homePage.About.p1': 'Время от времени я задаюсь вопросом: мне вообще нравится программировать, или я просто ненавижу не понимать вещи, которыми никогда не воспользуюсь?',
    'homePage.About.p2': 'А потом я трачу четыре часа, пытаясь понять, почему слетела моя последняя конфигурация Wayland.',
    'homePage.About.p3': 'Может, это и есть страсть. А может, травма мозга. Трудно сказать.',
    'homePage.About.p4': '',
    /* === ÖNERİLEN DEĞİŞİKLİK BURADA BİTİYOR === */

    'footer.note.before': '© ' + new Date().getFullYear().toString() + ' М. Мурат Будак – Этот сайт использует',
    'footer.note.link': 'Matomo',
    'footer.note.after': ', аналитическую платформу с открытым исходным кодом на моем сервере.',

    'navbar.home': 'Главная', // Ana Sayfa
    'navbar.projects': 'Проекты', // Projeler
    'navbar.blog': 'Блог', // Blog
    'navbar.contact': 'Контакты' // İletişim
  },
zh: {
  'pageTitle': '~/作品集', // '~/portfolio'
  'homePage.h1': '简洁代码. 系统. 图形.', // 'Clean Code. Systems. Graphics.'
  'homePage.h1.p': '我构建快速、极简的软件，偶尔也创造些漂亮的像素。', // 'I build fast, minimal software and occasional pretty pixels.'
  'homePage.GlassButtonText': '查看项目', // 'View Projects'
  'homePage.About': '关于我', // 'About Me'
  'homePage.About.p1': '我时不时会想，我到底是不是真的喜欢编程，还是说我只是讨厌搞不懂那些我永远也用不到的东西。',
  'homePage.About.p2': '然后我就会花四个小时去调试，为什么我最新的 Wayland 配置又崩了。',
  'homePage.About.p3': '也许这就是热情吧。又或者，是脑子坏了。真不好说。',
  'homePage.About.p4': '',

  'footer.note.before': '© ' + new Date().getFullYear().toString() + ' M. Murat Budak – 本网站使用的是', // '... – This website uses'
  'footer.note.link': 'Matomo',
  'footer.note.after': '，一个自托管的分析平台。', // ', a self-hosted analytics platform.'

  'navbar.home': '首页', // 'Home'
  'navbar.projects': '项目', // 'Projects'
  'navbar.blog': '博客', // 'Blog'
  'navbar.contact': '联系' // 'Contact'
},
} as const;
