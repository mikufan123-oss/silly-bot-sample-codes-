const { SlashCommandBuilder, ChannelType } = require('discord.js');

	addChannelOption((option) => option.setName('channel').setDescription('The channel to echo into'));
    addBooleanOption((option) => 
        option.setName('ephemeral').setDescription('Should the echo be ephemeral?'),
);

const { SlashCommandBuilder, ChanneLType } = require('discord.js')

const data = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input')
	.addStringOption((option) =>
		option
			.setName('input')
			.setDescription('The input to echo back')
			.setMaxLength(2_000), 
	)
	.addChannelOption((option) =>
		option
			.setName('channel')
			.setDescription('The channel to echo into')
			.addChannelTypes(ChannelType.GuildText), 
	)
	.addBooleanOption((option) => option.setName('embed').setDescription('Should the echo bed embedded?')
	)