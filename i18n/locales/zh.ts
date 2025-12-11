import type { en } from './en';

export const zh: Record<keyof typeof en, string> = {
  'pageTitle': '~/作品集',
  'homePage.h1': '简洁代码. 系统. 图形.',
  'homePage.h1.p': '我构建快速、极简的软件，偶尔也创造些漂亮的像素。',
  'homePage.GlassButtonText': '查看项目',
  'homePage.About': '关于我',
  'homePage.About.p1': '我时不时会想，我到底是不是真的喜欢编程，还是说我只是讨厌搞不懂那些我永远也用不到的东西。',
  'homePage.About.p2': '然后我就会花四个小时去调试，为什么我最新的 Wayland 配置又崩了。',
  'homePage.About.p3': '也许这就是热情吧。又或者，是脑子坏了。真不好说。',
  'homePage.About.p4': '',

  'footer.note.before': '本网站使用的是',
  'footer.note.link': 'Matomo',
  'footer.note.after': '，一个自托管的开源分析平台。',

  'navbar.home': '首页',
  'navbar.projects': '项目',
  'navbar.blog': '博客',
  'navbar.contact': '联系',

  'wipPage.title': '~/wip',
  'wipPage.text': '施工中', // "Work in Progress" için yaygın internet jargonu
  'wipPage.subtitle': '本页面目前正在施工中。请稍后再来查看更新！',

  'projects.title': '我的项目',
  'projects.desc': '我的开源项目和作品。欢迎提交 PR 或做出贡献 :)', // "Feel free to contribute" yerine PR jargonunu ekledim.
  
  // Eksik kısımlar burada tamamlandı:
  'projects.portfolio-website.desc': '你当前所浏览网站的源码。使用原生 JS (Vanilla) 和 Astro 构建，追求极简。',
  'projects.OpenGL-glsl.desc': '一个包含多种 GLSL 着色器实现和 OpenGL 图形管线（Graphics Pipeline）的 C++ 项目。完全从零开始构建。',
  'projects.RayTracer.desc': '不依赖任何第三方库的 C++ 光线追踪器。实现了多线程渲染、递归反射、折射、抗锯齿 (AA) 以及自定义数学库。支持 Phong 和 Gouraud 着色模型。',
  'projects.perlin.desc': '使用 OpenSimplex 噪声生成流场 (Flowfield)，并进行 1D 和 2D 可视化。',
  'projects.dotfiles.desc': 'i3wm 和 i3blocks 的极简配置文件 (Dotfiles)。包含完全按我个人喜好定制的 i3blocks 模块。',
  'projects.spring.desc': '基于 SpringBoot 的极简锦标赛匹配 API。所有组件（包括数据库）均已 Docker 化。',
  'projects.jester.desc': '通过模拟虚假浏览行为，让用户以此操控/混淆 YouTube、Amazon 及其他电商平台的广告算法。',
  'projects.other.title': '其他项目',
  'projects.other.desc': '你可以在我的 GitHub 主页上查看我的其他项目！',
};