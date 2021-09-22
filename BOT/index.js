
//  IMPORTS
const fs = require("fs");
const { Client, Collection, Intents, Interaction } = require("discord.js");
const { token } = require("./config.json");
const handleCommand = require("./helpers/command");

//  CLIENT
//      INITIALIZATION
const client = new Client({
    intents: [Intents.FLAGS.GUILDS],
});
client.login(token);
//          COMMANDS IMPORT
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

//  EVENTS  : 
client.once("ready", () => {
    console.log("-------------------------");
    console.log("       I'M ONLINE !");
    console.log("-------------------------");
});

client.on("interactionCreate", async interaction => {
    if (interaction.isCommand()) handleCommand(client, interaction)
});