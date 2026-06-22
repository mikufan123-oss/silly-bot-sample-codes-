const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js'); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban >:(')
        .setDescription('ban a partypooper!')
        .addUserOption((option) => option.setName('target').setDescription('The partypooper to ban..').setRequired(true))
        .addStringOption((option) => option.setName('the reason').setDescription('the reason to ban the poopiepants'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setContexts(InteractionContextType.Guild),


};