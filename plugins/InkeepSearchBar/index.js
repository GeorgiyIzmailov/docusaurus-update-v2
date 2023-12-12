const themeInkeepSearchBar = () => {
  return {
    name: "docusaurus-plugin-InkeepSearchBar",
    getClientModules() {
      return ["./addInkeepSearchBar.js"];
    },
    injectHtmlTags: () => {
      return {
        headTags: [
          {
            tagName: "script",
            attributes: {
              src: "https://unpkg.com/@inkeep/widgets-embed@0.2.226/dist/embed.js",
              type: "module",
              defer: true,
            },
          },
        ],
      };
    },
    getThemePath: () => "./src/theme",
    getTypeScriptThemePath: () => "./src/theme",
    getSwizzleComponentList: () => ["SearchBar"],
  };
};

themeInkeepSearchBar.validateThemeConfig = (data) => {
  return data.themeConfig;
};

module.exports = themeInkeepSearchBar;
