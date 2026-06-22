const { SlashCommandBuilder } = require('discord.js'); 

const data = new SlashCommandBuilder()
    .setName('dog')
    .setNameLocalizations({
        pl: 'pies',
        de: 'hund',
    }) 
    .setDescription('GET A PICTURE OF A DOG!!! YAYY!!')
    .setDescriptionLocalizations({
       	pl: 'Słodkie zdjęcie pieska!',
		de: 'Poste ein niedliches Hundebild!', 

    })
    .addStringOption((option) => 
        option
            .setName('breed')
            .setDescription('breed of your future dog loll')
            .setNameLocalizations({
                pl: 'rasa',
                de: 'rasse',
            })
            .setDescriptionLocalizations({
                pl: 'Rase psa',
                de: 'Hundrrasse',
            }),
        );