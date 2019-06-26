const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!?";

client.login("NTg2OTgwNTkzOTk3MTg1MDI2.XPv9UA.qTl6Gbh58y1nX36bDCf5GVVOSMw");
client.on("message", message => {
    if(message.content === "!?Tavernia"){
        message.reply("Ouai ?");
        console.log("Réponse à Tavernia");
    }
});

    
