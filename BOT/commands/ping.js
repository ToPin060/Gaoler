const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Renvoie le nombre de ping'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @returns 
     */
    async execute(interaction) {
        await interaction.reply('Pong');

        const message = await interaction.fetchReply();

        return interaction.editReply(`le message a mis ${message.createdTimestamp - interaction.createdTimestamp} ms\nTon ping est de ${interaction.client.ws.ping}`)
    }
}