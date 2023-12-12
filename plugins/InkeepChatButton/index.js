module.exports = function () {
  return {
    name: "docusaurus-plugin-InkeepChatButton",
    getClientModules() {
      return ["./addInkeepChatButton.js"];
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
        postBodyTags: [`<div id='inkeepChatButton'></div>`],
      };
    },
  };
};
