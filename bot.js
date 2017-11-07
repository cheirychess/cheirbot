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
});

client.on('message', message => {
    if (message.content === 'Sad!') {
    	message.reply('https://cdn.discordapp.com/attachments/376127412150468611/376127451086061568/sad.png');
    }
});

client.on('message', message => {
    if (message.content === ':warning: Invalid Search (Maybe try again?).') {
    	message.reply('https://cdn.discordapp.com/attachments/359038718042046464/377242716079390740/emote.png');
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
