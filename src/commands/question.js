const { SlashCommandBuilder } = require('@discordjs/builders');
const { question } = require('../question-module');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('question')
        .setDescription('Reads off the current question'),
    async execute(interaction) {
        await interaction.reply(question);
    },
};