const { Client, CommandInteraction, Interaction } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
const handleCommand = async (client, interaction) => {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
        await interaction.reply({ 
            content: "Une erreur c'est produite durant l'exécution de cette commande !",
            ephemeral: true
        });
    }
}

module.exports = handleCommand;