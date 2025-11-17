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
  
    'projects.title': 'Projects',
    'projects.desc': 'My open-source projects and work. Feel free to contribute :)',
    'projects.portfolio-website.desc': 'The code of the website you are currently viewing. Built using pure JS and Astro.',
    'projects.OpenGL-glsl.desc': 'A C++ project with various shader implementations in GLSL and a graphics pipeline implementation in OpenGL. Built from the ground up.',
    'projects.RayTracer.desc': 'C++ raytracer which uses no external libraries to implement multi-threaded rendering, recursive reflections, refractions, anti-aliasing, and a custom math library. Supports both Phong and Gouraud shading',
    'projects.perlin.desc': 'Creates a flowfield using OpenSimplex noise and visualizes it in 1D & 2D.',
    'projects.dotfiles.desc': 'Minimal configuration for i3wm and i3blocks, with customized i3blocks modules tuned to my liking.',
    'projects.spring.desc': 'A minimal SpringBoot based API for tournament matchmaking. Everything is dockerized, including the DB.',
    'projects.jester.desc': 'Lets users manipulate YouTube, Amazon, and other e-commerce ads by simulating fake browsing behavior.',
    'projects.other.title': 'Other Projects',
    'projects.other.desc': 'You can view my other projects on my GitHub!',
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
    'navbar.contact': 'İletişim',

    'wipPage.title': '~/wip',
    'wipPage.text': 'WORK IN PROGRESS',
    'wipPage.subtitle': 'Bu sayfa yapım aşamasına, lütfen daha sonra gelin!',
  
    'projects.title': 'Projelerim',
    'projects.desc': 'GitHub üzerinde geliştirdiğim açık kaynaklı projelerim ve çalışmalarım.',
    'projects.portfolio-website.desc': '',
    'projects.OpenGL-glsl.desc': '',
    'projects.RayTracer.desc': '',
    'projects.perlin.desc': '',
    'projects.dotfiles.desc': '',
    'projects.spring.desc': '',
    'projects.jester.desc': '',
    'projects.other.title': '',
    'projects.other.desc': '',
  },

ru: {
    'pageTitle': '~/портфолио',
    'homePage.h1': 'Чистый код. Системы. Графика.',
    'homePage.h1.p': 'Я создаю быстрое, минималистичное ПО и иногда красивые пиксели.',
    'homePage.GlassButtonText': 'Посмотреть проекты',
    'homePage.About': 'Обо мне', 
    
    'homePage.About.p1': 'Время от времени я задаюсь вопросом: мне вообще нравится программировать, или я просто ненавижу не понимать вещи, которыми никогда не воспользуюсь?',
    'homePage.About.p2': 'А потом я трачу четыре часа, пытаясь понять, почему слетела моя последняя конфигурация Wayland.',
    'homePage.About.p3': 'Может, это и есть страсть. А может, травма мозга. Трудно сказать.',
    'homePage.About.p4': '',

    'footer.note.before': '© ' + new Date().getFullYear().toString() + ' М. Мурат Будак – Этот сайт использует',
    'footer.note.link': 'Matomo',
    'footer.note.after': ', аналитическую платформу с открытым исходным кодом на моем сервере.',

    'navbar.home': 'Главная',
    'navbar.projects': 'Проекты',
    'navbar.blog': 'Блог',
    'navbar.contact': 'Контакты'
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
