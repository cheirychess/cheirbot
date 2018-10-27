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


client.on('message', message => {
   if (message.content === '@everyone') {
       message.reply('https://cdn.discordapp.com/attachments/369575741639229460/447859322022658081/0cc.png');
       
    }
});       
    
client.on('message', message => {
   if (message.content === 'fat demo') {
       message.reply('https://cdn.discordapp.com/attachments/467857158625689610/505152121436504075/meme.png');
       
    }
});       
    
client.on('message', message => {
   if (message.content === 'can u aint') {
       message.reply('https://media.discordapp.net/attachments/254248946086576128/498969306839777280/image0.jpg');
       
    }
});

client.on('message', message => {
   if (message.content === 'voring distance') {
       message.reply('https://cdn.discordapp.com/attachments/467858965141913603/496404778012901388/gplus300042337.png');
       
    }
});

client.on('message', message => {
   if (message.content === 'Okay, this is epic') {
       message.reply('https://cdn.discordapp.com/attachments/467858965141913603/495840798747656192/image0.png');
       
    }
});

client.on('message', message => {
   if (message.content === 'my fat fucking nuts') {
       message.reply('https://i.ytimg.com/vi/WZ6Z_ATIcRw/maxresdefault.jpg');
       
    }
});

client.on('message', message => {
   if (message.content === 'me after spotting a minority') {
       message.reply('https://cdn.discordapp.com/attachments/467857158625689610/473674660551196672/unknown.png');
       
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
