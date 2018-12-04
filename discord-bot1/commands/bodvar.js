const Discord = require('discord.js');

var queue = [];

var	isPlaying = false;

var servers = {};


module.exports = {

	name: 'bodvar',

	description: 'I am Bodvar',

	needAdmin: false,

	usage: '!bodvar',

	execute(message) {

		if(!servers[message.guild.id]) servers[message.guild.id] = {

			queue: []

		};

		var server = servers[message.guild.id];

		const channel = message.member.voiceChannel;

		if(!channel) {

		    message.reply('You need to be in a voice channel to use that command');
		    	
		    return;

		}
		

		if(server) {

			channel.leave()

		};


    	channel.join()

        .then(connection => {

            server.dispatcher = connection.playFile('./audio/I_AM_BODVAR.mp3');

            server.isPlaying = true;


            server.dispatcher.on("end", end => {

            	channel.leave();

            	server.isPlaying = false;

           })

    	})

	},

};