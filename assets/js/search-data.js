// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// Search is intentionally scoped to this single-page portfolio.
// Only section headings that exist on the home page are included.
ninja.data = [
  {
    id: "section-about",
    title: "About",
    section: "Sections",
    handler: () => {
      window.location.href = "/juno/#about";
    },
  },
  {
    id: "section-experience",
    title: "Experience",
    section: "Sections",
    handler: () => {
      window.location.href = "/juno/#experience";
    },
  },
  {
    id: "section-projects",
    title: "Projects",
    section: "Sections",
    handler: () => {
      window.location.href = "/juno/#projects";
    },
  },
  {
    id: "section-publications",
    title: "Publications",
    section: "Sections",
    handler: () => {
      window.location.href = "/juno/#publications";
    },
  },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/juno/assets/pdf/resume_ml_updated.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%64%68%61%76%74%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/juniper-halo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/junotripathi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
