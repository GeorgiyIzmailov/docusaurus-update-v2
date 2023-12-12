import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) return null;

  return {
    onRouteUpdate() {
      let inkeepWidget = null;

      const observer = new MutationObserver(() => {
        const searchBarContainer = document.getElementById("inkeepSearchBar");
        const config = {
          componentType: "SearchBar",
          targetElement: searchBarContainer,
          properties: {
            baseSettings: {
              apiKey: "YOUR_API_KEY",
              integrationId: "YOUR_INTEGRATION_ID",
              organizationId: "YOU_ORGANIZATION_ID",
              primaryBrandColor: "#522FC9", // your brand color, widget color scheme is derived from this
              organizationDisplayName: "Inkeep",
              // ...optional settings
            },
            modalSettings: {
              // optional settings
            },
            searchSettings: {
              // optional settings
            },
            aiChatSettings: {
              // optional settings
              botAvatarSrcUrl: "/img/inkeep-logo.svg", // use your own bot avatar
              quickQuestions: [
                "Example question 1?",
                "Example question 2?",
                "Example question 3?",
              ],
            },
          },
        };

        if (!inkeepWidget && searchBarContainer) {
          inkeepWidget = Inkeep().embed(config);
        }
      });

      observer.observe(document.documentElement, { attributes: true });
    },
  };
})();
