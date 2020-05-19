const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ok Heisen Just Started Learning NodeJs So Pls Excuse Errors');
});

//client.on('message', message => {       // IS SE EZZ MESSAGE SPAM KARLO SERVER PE
  //  if (message.content === 'ping') {
    //	message.reply('pong');
  	//}
//});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);  // correction  client.login('BOT_TOKEN');
