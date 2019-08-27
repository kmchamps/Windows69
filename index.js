const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE1MjA2OTg1OTkzOTQ1MTAy.XWLFFw.77OQUBIAIciOZcrQ6-NqseD0fI8';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.login(token);