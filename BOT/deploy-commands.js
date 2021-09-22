const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientID, guildID, token } = require("./config.json");

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({version: '9'}).setToken(token);

(async () => {
    try{
        await rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands });
        console.log("Les commandes ont étés enregistrées !");
    } catch (error){
        console.log(error);
    }
})();