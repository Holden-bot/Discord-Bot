const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Replies with user info!'),
    async execute(interaction) {
        await interaction.reply('User info');
    },
};