import type { useTranslations } from '@i18n/utils';

type Translate = ReturnType<typeof useTranslations>;

export function getProjects(t: Translate) {
  return [
    // {
    //   name: "",
    //   description: t(""),
    //   language: "",
    //   href: "",
    //   homepageUrl: ""
    // },
    {
      name: "portfolio-website",
      description: t("projects.portfolio-website.desc"),
      href: "https://github.com/mbudak21/portfolio-website",
      language: "Astro",
      homepageUrl: "https://github.com/mbudak21/portfolio-website",
    },
    {
      name: "OpenGL-glsl-renderer",
      description: t("projects.OpenGL-glsl.desc"),
      href: "https://github.com/mbudak21/opengl-glsl-renderer/",
      language: "C++",
      homepageUrl: "https://github.com/mbudak21/opengl-glsl-renderer"
    },
    {
      name: "C++ RayTracer",
      description: t("projects.RayTracer.desc"),
      href: "https://github.com/mbudak21/RayTracer.cpp",
      language: "C++",
      homepageUrl: "https://github.com/mbudak21/RayTracer.cpp"
    },
    {
      name: "perlin-noise-visualizer",
      description: t("projects.perlin.desc"),
      language: "JavaScript",
      href: "https://github.com/mbudak21/perlin-noise",
      homepageUrl: "https://github.com/mbudak21/perlin-noise"
    },
    {
      name: "dotfiles",
      description: t("projects.dotfiles.desc"),
      language: "Perl",
      href: "https://github.com/mbudak21/i3dotfiles",
      homepageUrl: "https://github.com/mbudak21/i3dotfiles"
    },
    {
      name: "tournament-backend-API",
      description: t("projects.spring.desc"),
      language: "Java",
      href: "https://github.com/mbudak21/SpringBoot-GameAPI",
      homepageUrl: "https://github.com/mbudak21/SpringBoot-GameAPI"
    },
    {
      name: "Jester-desktop-app",
      description: t("projects.jester.desc"),
      language: "Tauri, Vue, Rust",
      href: "https://github.com/FoolingWebTrackers/jester_desktop",
      homepageUrl: "https://github.com/FoolingWebTrackers/jester_desktop"
    },
    {
      name: t("projects.other.title"),
      description: t("projects.other.desc"),
      language: "",
      href: "https://github.com/mbudak21",
      homepageUrl: "https://github.com/mbudak21"
    },
  ];
}
