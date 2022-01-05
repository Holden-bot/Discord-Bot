const { SlashCommandBuilder } = require('@discordjs/builders');
const { question, title } = require('../question-module');
const { MessageEmbed } = require('discord.js');


const q = question;
const t = title;


// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#ed2939')
	.setTitle(t)
    .setImage('attachment://Balls.png')
	.setDescription(q);




module.exports = {
    data: new SlashCommandBuilder()
        .setName('question')
        .setDescription('Reads off the current question'),
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed], files: ['./Balls.png']});
    },
};