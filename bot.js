1const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("538296844103450644")
setInterval(function() {
channel.send(`test test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test testtest test test test test test test test`);
}, 30)
})

   client.login("NTM5ODIwODc4NzU0NDgwMTQ3.Dz8VgQ.srMYBLcRwE5TQepvzq--iH25Kp8");
   