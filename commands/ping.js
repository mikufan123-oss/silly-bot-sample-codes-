const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!')
	} ,

} ; 

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5, 
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
	async execute(interaction) {
		// ...
	},
};

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!'); 
		await interaction.reply({ content: 'Secret Pong!', flags: MessageFlags.Ephemeral }); 
	}
}); 


client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.deferReply(); 
		// you can do things that take time here (database queries, api requests, ...) that you need for the initial response
		// you can take up to 15 minutes, then the interaction token becomes invalid!
		await interaction.editReply('Pong!'); 
	}
}); 

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
		await interaction.followUp('Pong again!');
	}
});

await interaction.reply('Pong!');
await interaction.deleteReply(); 

await interaction.reply('Pong!');
await interaction.deleteReply();

await interaction.reply('Pong!');
const message = await interaction.fetchReply();
console.log(message);

client.on(Event.InteractionCreate, (interaction) => {
	const locales = {
		pl: 'Witaj Świecie!',
		de: 'Hallo Welt!',
	};
	interaction.reply(locales[interaction.locale] ?? 'Hello World (default is english)');

});
