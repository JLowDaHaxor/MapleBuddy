

const fs = require('fs');

const util = require('util');

const Discord = require('discord.js');

const ytdl = require('ytdl-core');

const { prefix, token } = require('./config.json');

var commandList = [];

var needAdmin = [];

var commandUsage = [];

var commandDescription = [];

var commandStuff = {};

var servers = {};





const client = new Discord.Client();

client.commands = new Discord.Collection();

module.exports.client = client;



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command, command.needAdmin, command.usage, command.description);

    commandList.push(command.name);

    needAdmin.push(command.reqPermissions);

    commandUsage.push(command.usage);

    commandDescription.push(command.description);

    commandStuff = {

        commandList,

        commandUsage,

        commandDescription

    }

};

 module.exports.commandStuff = commandStuff;


client.once('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

  var activities = ['MapleStory 2', 'With Fire', 'By myself :cry:', 'King of the Kappas', 'Wii Sports', 'Beat Saber', 'Coolmath.com', 'E-juicer', 'Bee Movie: The game'];

    var actIndex = 1

    client.user.setActivity(activities[actIndex], { type: 'PLAYING' })

   setInterval(function (){

    client.user.setActivity(activities[actIndex], { type: 'PLAYING' })

    actIndex++;   

    if(actIndex == activities.length - 1){

        actIndex = 0;

    }

   }, 600000)

});






client.on('message', message => {

    if(!message.guild) return;


    if(message.content.toLowerCase().includes('maple buddy')){

        message.reply("Look buddy, you're arguing with a bot. If you get mad at a digital being, you might need to rethink some things.")

    }

    let perms = message.channel.permissionsFor(message.member);

    let has_Admin = message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false);


    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();



    if (!client.commands.has(command)) return;



    if (needAdmin[commandList.indexOf(command)] == true && has_Admin == false) {

        message.reply('You do not have permission to use that command');

        return;
    }


    try {

            client.commands.get(command).execute(message, args);

    } catch (error) {

        console.error(error);

        message.reply('there was an error trying to execute that command!');

    }

});



client.on('message', message => {

    if(!message.guild) return;

const insults = [message.author + ' has the biggest of gays.', 'There is a possibility that ' + message.author + ' is a nerd.', message.author + ' is the physical embodiment of an L', message.author + ' is most likely a weeb.', message.author + ' speaks to their mother with that mouth.', message.author + " thinks they're cool, but they're not."];


        if(!servers[message.guild.id]) servers[message.guild.id] = {

            randInsultNum: [],

            rand: [],

            replied: []

        };

    var server = servers[message.guild.id];


    if(server.replied == true) return;

    server.randInsultNum = Math.floor((Math.random() * insults.length) + 0);

    server.rand = parseInt((Math.random() * (3600000 - 1000 + 1)), 10) + 1000;

   setTimeout(function (){

    message.channel.send(insults[server.randInsultNum])

    server.replied = true;

   }, 100);

   setTimeout(function (){

    server.replied = false;

   }, server.rand)

});



client.login(token);