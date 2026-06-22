const { SlashCommandBuilder, PermissionFlagsBit } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('kick')
    .setDescription('select your enemy to kick them')
    .addUserOption((option) => option.setName('target').setDescription('your primal target/enemy to kick').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBit.KickMembers);