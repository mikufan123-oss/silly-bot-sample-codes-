// at the top of your file
const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0077ff)
	.setTitle('a cool title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'a cool name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('A cool description for cool peoples')
	.addFields(
		{ name: 'regular field title', value: 'a vaule' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'inline field title', value: 'a vaule', inline: true },
		{ name: 'Inline field title', value: 'a vaule', inline: true },
	)
	.addFields({ name: 'inline field title', value: 'a value', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setFooter({ text: 'footer texts', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [exampleEmbed] });