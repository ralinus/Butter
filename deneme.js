const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json')
const { Client, MessageEmbed } = require('discord.js')


var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`PlaquM Artık Hazır! ${client.user.tag}!`);
  console.log(`${client.user.tag} aktif edildi:)`);
    client.user.setActivity('Yapımcım ๖̶̶̶ζ͜͡InfernoLity#5317', { type: 'PLAYING' })
    .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
    .catch(console.error);
});

client.on('guildMemberAdd', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
  girişçıkış.send(`Aramıza hoşgeldin, ${member}`);
  });

  client.on('guildMemberRemove', member => {
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'gelen-giden');
    girişçıkış.send(`${member} sunucumuzdan ayrıldı.`);
    });

  client.on('message', message => {
  if (message.content.toLowerCase() === 'kanal') {
    const kanal = new MessageEmbed()

    .setTitle('Y4rdmc')
    .setDescription('Youtube kanalım için bana ulaşabilirsin!')
    .setAuthor('PlaquM')
    .setColor("BLACK")
    .setThumbnail('https://cdn.discordapp.com/avatars/647057527363600386/6cea02f24605a4a6c5baba33d3fcadb8.png?size=256')
    .addField(':hearts: Videolarımı izleyebilirsin!', 'Beğenip yorum yapabilirsin');
    message.channel.send(kanal);
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.channel.send('Aleykümselam hoşgeldin.');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir') {
    msg.delete()
    msg.reply('Bu kelimeyi yazma!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete()
    msg.reply('Bu kelimeyi yazma!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amına koyim') {
    msg.delete()
    msg.reply('Bu kelimeyi yazma!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sg') {
    msg.delete()
    msg.reply('Bu kelimeyi yazma!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fuck') {
    msg.delete()
    msg.reply('Bu kelimeyi yazma!');
  }
});


client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.channel.send('Aleykümselam hoşgeldin.');
  }
});

client.on('message', msg => {
  if (msg.content === 'SA') {
    msg.channel.send('Aleykümselam hoşgeldin.');
  }
});

client.on('message', msg => {
  if (msg.content === 'sA') {
    msg.channel.send('Aleykümselam hoşgeldin.');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'naber') {
    msg.channel.send('iyi sen?');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mrb') {
    msg.channel.send('Merhaba!');
  }
});

client.login('ODQxNDExNzc3MDE1MDU0MzU3.YJmXyA.yWSaxUBvTz71y_xp6TouBkpBLXY');
