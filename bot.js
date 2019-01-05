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

client.on("message", (message) => {
    function marv() {                                   //%10 chance to qoute Marvin after a successful command
    marvNum = 1 + Math.floor(Math.random() * 10);
    if (marvNum != 10){}
    else {
        marvNum = 1 + Math.floor(Math.random() * 6);
        if (marvNum === 1){
            message.channel.send("The first ten million years were the worst, and the second ten million years, they were the worst too. The third ten million years I didn't enjoy at all. After that I went into a bit of a decline.")
        } else if (marvNum === 2) {
            message.channel.send("*Life!* Don't talk to me about life.")
        } else if (marvNum === 3) {
            message.channel.send("Sorry, did I say something wrong? Pardon me for breathing, which I never do anyway so I don't know why I bother to say it, oh God I'm so depressed.")
        } else if (marvNum === 4) {
            message.channel.send("Why should I want to make anything up? Life's bad enough as it is without wanting to invent any more of it.")
        } else if (marvNum === 5) {
            message.channel.send("...and then of course I've got this terrible pain in all the diodes down my left hand side... I've asked for them to be replaced but <@" + message.author.id + "> never listens.")
        } else if (marvNum === 6) {
            message.channel.send("It's part of the shape of the Universe. I only have to talk to somebody and they begin to hate me.")
        }
        }
    }
    if (message.content.startsWith("!") && message.author.id != "460928002067398666") {
        const args = message.content.trim().split(/ +/g);
        var command = args.shift().toLowerCase();
        command = command.split("!").pop();
        var inp = args[0];
        if (inp != null){
            inp = inp.toLowerCase();
        }
     
        if (command == "scp") {
            try {inp = inp.split("scp-").pop()}catch(err){}
            inp = Number(inp);
            if (isNaN(inp) || inp > 3999 || inp < 1 || inp == null) {
                message.channel.send("<@" + message.author.id + ">" + "Please enter a valid SCP number");
            } else if (inp < 10) {
                message.channel.send("https://www.scp-wiki.net/scp-00" + inp);  
             
            } else if (inp < 100) {
                message.channel.send("https://www.scp-wiki.net/scp-0" + inp);
             
            } else {message.channel.send("https://www.scp-wiki.net/scp-" + inp);}
            message.delete();
            marv();
        }
         
    }
    var msg = message.content.toLowerCase();
    if (msg.includes("scp-") && message.author.bot != true) {
        inp = msg.replace(/[^\d]/g, '');
        inp = Number(inp);
        if (isNaN(inp) || inp > 3999 || inp < 1 || inp == null) { 
        } else if (inp < 10) {
            message.channel.send("https://www.scp-wiki.net/scp-00" + inp);
        } else if (inp < 100) {
            message.channel.send("https://www.scp-wiki.net/scp-0" + inp);
        } else {message.channel.send("https://www.scp-wiki.net/scp-" + inp);}
        marv();
    }
});
 
client.login(process.env.BOT_TOKEN);
