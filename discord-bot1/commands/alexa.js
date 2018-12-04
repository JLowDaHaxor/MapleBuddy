const Discord = require('discord.js');

var queue = [];

var	isPlaying = false;

var servers = {};


module.exports = {

	name: 'alexa',

	description: 'Play Despacito',

	needAdmin: false,

	usage: '!alexa',

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




			const ytdl = require('ytdl-core');

		    const streamOptions = { seek: 0, volume: 0.5 };

    	channel.join()

        .then(connection => {

            server.dispatcher = connection.playStream(ytdl('https://www.youtube.com/watch?v=bUj2DnPfaHo', { filter : 'audioonly' }), streamOptions);

            server.isPlaying = true;


            server.dispatcher.on("end", end => {

            	channel.leave();

            	server.isPlaying = false;

           })

    	})

	},

};