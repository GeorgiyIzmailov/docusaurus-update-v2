import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) return null;

  return {
    onRouteUpdate() {
      const chatButtonContainer = document.getElementById("inkeepChatButton");
      chatButtonContainer.style.position = "absolute";

      const config = {
        componentType: "ChatButton",
        targetElement: chatButtonContainer,
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

      const inkeepWidget = Inkeep().embed(config);
    },
  };
})();
