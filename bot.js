const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hello');
    }
});


client.on('message', message => {
    if (message.content === 'jojo') {
    	message.reply('https://cdn.discordapp.com/attachments/359038718042046464/369314526597873665/images-1.jpg');
    }


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
