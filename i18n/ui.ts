export const languages = {
  en: 'English',
  tr: 'Türkçe',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'test': '8_8',
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
    'navbar.contact': 'Contact'
  },
  tr: {
    'test': 'Merhaba',
    'pageTitle': '~/portfolyo',
    'homePage.h1': 'Temiz Kod. Sistemler. Grafikler.',
    'homePage.h1.p': 'Hızlı, minimal yazılımlar ve ara sıra da güzel grafikler.',
    'homePage.GlassButtonText': 'Projeler',
    'homePage.About': 'Hakkımda',
    'homePage.About.p1': 'Her birkaç ayda bir programlamayı gerçekten sevip sevmediğimi düşünürüm. Sonra bir şeyler bozulur, dört saatini nedenini bulmaya harcarım, ve “ah, demek ki hala seviyorum” derim.',
    'homePage.About.p2': '',
    'homePage.About.p3': 'Tutku böyle bir şey heralde.',
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
    'homePage.About.p1': 'Каждые пару месяцев я думаю, люблю ли я вообще программирование, или просто ненавижу, когда не понимаю вещи, которые мне никогда не пригодятся. Потом трачу четыре часа, пытаясь понять, почему моя конфигурация Wayland снова развалилась. Может, это и есть страсть. А может, травма мозга. Трудно сказать. Остальная часть сайта всё ещё в разработке — выложу через пару дней. Наверное.'
  }
} as const;
