mp.events.addCommand("Heal", (player) => {
player.health = 100;
player.armour = 100;
player.notify("Du wurdest erfolgreich geheilt!")
});

console.log("Hello World!")