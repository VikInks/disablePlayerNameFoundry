Hooks.once('init', () => {
  console.log('Disable Player Names | Initialisation du module');

  game.settings.register("disable-player-names", "disableNames", {
    name: "Désactiver les noms des joueurs",
    hint: "Active ou désactive l'affichage des noms des joueurs dans le chat.",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    onChange: value => {
      if (value) {
        console.log('Disable Player Names | Les noms des joueurs sont désactivés dans le chat');
      } else {
        console.log('Disable Player Names | Les noms des joueurs sont activés dans le chat');
      }
    }
  });
});

Hooks.on('renderChatMessage', (message, html, data) => {
  if (game.settings.get("disable-player-names", "disableNames")) {
    html.find(".message-sender").text("Anonyme");
  }
});
