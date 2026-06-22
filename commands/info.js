const { SlashCommandBuilder } = require('discord.js'); 

const data = new SlashCommandBuilder()
    .setName('info')
    .setDescription('track down info about a user or a server ;)')
    .addSubcommand((subcommand) => 
        subcommand 
            .setName('user')
            .setDescription('info about a user ;)')
            .addUserOption((option) => option.setName('Your victim').setDescription('The user')),
)
.addSubcommand((subcommand) => subcommand.setName('server').setDescription('info about a server ;)'));