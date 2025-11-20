import { en } from './en';

export const tr: Record<keyof typeof en, string> = {
  'pageTitle': '~/portfolyo',
  'homePage.h1': 'Temiz Kod. Sistemler. Grafikler.',
  'homePage.h1.p': 'Hızlı, minimal yazılımlar ve ara sıra da güzel pikseller.',
  'homePage.GlassButtonText': 'Projeleri Gör',
  'homePage.About': 'Hakkımda',
  'homePage.About.p1': 'Ara sıra programlamayı gerçekten sevip sevmediğimi, yoksa sadece asla kullanmayacağım şeyleri anlamamaktan mı nefret ettiğimi sorguluyorum.',
  'homePage.About.p2': 'Sonra bir bakıyorum, son wayland yapılandırmamın neden patladığını ayıklamak için dört saat harcamışım.',
  'homePage.About.p3': 'Sanırım buna tutku denilebilir, ya da belki de beyin hasarıdır. Söylemesi güç.',
  'homePage.About.p4': '',

  'footer.note.before': '© ' + new Date().getFullYear().toString() + ' M. Murat Budak – Bu web sitesi kendi sunucumda çalışan açık kaynaklı analiz platformu',
  'footer.note.link': 'Matomo',
  'footer.note.after': '’yu kullanmaktadır.',

  'navbar.home': 'Ana Sayfa',
  'navbar.projects': 'Projeler',
  'navbar.blog': 'Blog',
  'navbar.contact': 'İletişim',

  'wipPage.title': '~/wip',
  'wipPage.text': 'ÇALIŞMA SÜRÜYOR',
  'wipPage.subtitle': 'Bu sayfa yapım aşamasında, lütfen güncellemeler için daha sonra tekrar gelin!',

  'projects.title': 'Projelerim',
  'projects.desc': 'GitHub üzerinde geliştirdiğim açık kaynaklı projelerim ve çalışmalarım.',
  
  'projects.portfolio-website.desc': 'Şu an gezindiğin bu sitenin kaynak kodları. Astro ve saf (vanilla) JS kullanılarak, minimalist bir yapıda hazırlandı.',
  'projects.OpenGL-glsl.desc': 'GLSL shader denemeleri ve OpenGL grafik işleme hattı (pipeline) içeren bir C++ projesi. Temelden çatıya, tamamen sıfırdan inşa ettim.',
  'projects.RayTracer.desc': 'Harici hiçbir kütüphane kullanmadan yazdığım C++ ışın izleyici (raytracer). Multi-thread render, yansıma, kırılma, kenar yumuşatma (AA) ve kendi matematik kütüphanemi içeriyor. Phong ve Gouraud gölgelendirmeyi destekler.',
  'projects.perlin.desc': 'OpenSimplex gürültü algoritması (noise) kullanarak akış alanları oluşturan ve bunları 1B & 2B olarak görselleştiren çalışma.',
  'projects.dotfiles.desc': 'i3wm ve i3blocks için hazırladığım minimal yapılandırma dosyaları. i3blocks modüllerini tamamen kendi keyfime ve iş akışıma göre özelleştirdim.',
  'projects.spring.desc': 'Turnuva eşleştirmeleri için SpringBoot tabanlı, sade bir API. Veritabanı dahil tüm bileşenler Dockerize edilmiş durumda.',
  'projects.jester.desc': 'Sahte gezinti simülasyonu yaparak YouTube, Amazon ve diğer e-ticaret sitelerindeki reklam algoritmalarını manipüle etmeni (ve kafalarını karıştırmanı) sağlayan bir masaüstü uygulaması.',
  'projects.other.title': 'Diğer Projeler',
  'projects.other.desc': 'Diğer tüm projelerimi ve kodlarımı GitHub profilimde inceleyebilirsin!',
};