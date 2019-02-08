const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538357433643565078")
setInterval(function() {
channel.send(`test test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test test`);
}, 30)
})

   client.login('NTQzNDIzMjk0NjYxOTg0MjU2.Dz8cYw._SMq9HvPWXk_VBQMLkZZf6xZbFQ');
   
