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
    if (message.content === 'no anime') {
    	message.reply('https://cdn.discordapp.com/attachments/369575741639229460/406973645806895124/DRl8H--WkAEk_kf.jpg');
    }
});

client.on('message', message => {
    if (message.content === 'illegal') {
    	message.reply('https://cdn.discordapp.com/attachments/369575741639229460/406975646133387286/illegal.jpg');
    }
});    


client.on('message', message => {
    if (message.content === 'legal') {
    	message.reply('https://cdn.discordapp.com/attachments/369575741639229460/406975625300279296/1i0jv1.jpg');
    }
});    

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
