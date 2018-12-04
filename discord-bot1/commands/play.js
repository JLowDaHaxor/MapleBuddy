
const Discord = require('discord.js');

const client = require('C:/Users/johnj/projects/discord-bot1/index.js')

var queue = [];

var	isPlaying = false;

var servers = {};


module.exports = {

	name: 'play',

	description: 'play in VC',

	needAdmin: false,

	usage: '!play [bob, wii, sans, or youtube link. {!play queue, !play stop, !play skip, !play plzstop}]',

	execute(message, args) {


		if(!servers[message.guild.id]) servers[message.guild.id] = {

			queue: []

		};

		var server = servers[message.guild.id];

		const channel = message.member.voiceChannel;



		if(!channel) {

		    message.reply('You need to be in a voice channel to use that command');
		    	
		    return;

		}

		    const ytdl = require('ytdl-core');

		    const streamOptions = { seek: 0, volume: 0.5 };


		if(args[0] == 'wii'){

			server.queue.push('https://www.youtube.com/watch?v=d5c4KOopwLs');

			message.channel.send(`${message.author.username} queued the sports theme song baybee.`)

			play()

		} else if (args[0] == 'bob'){

			server.queue.push('https://www.youtube.com/watch?v=AjT8UhDAVHI');

			message.channel.send(`${message.author.username} queued some chill heckin music.`)

			play()

		} else if (args[0] == 'sans'){

			server.queue.push('https://www.youtube.com/watch?v=c5daGZ96QGU');

			message.channel.send(`${message.author.username} queued a bad time.`)

			play()


		 } else if(args[0].startsWith('https:') || args[0].startsWith('www.')){

			server.queue.push(args[0]);

			message.channel.send(`${message.author.username} queued ${args[0]}.`)

			play()

		} else if(args[0] == 'queue'){

				if(server.queue.length == 0){

					message.channel.send('There are no songs queued after this one.')

					return;

				}

			for(link in server.queue){

				message.channel.send(parseInt(link) + 1 + ': ' +  server.queue[link])

			}


		} else if (args[0] == 'stop') {

			server.queue = [];

			message.reply("Hey come on man, you could've just asked nicely.")

			channel.leave();

            server.isPlaying = false;

    		return;


		} else if (args[0] == 'plzstop') {

			server.queue = [];

			message.reply("Hey man, thanks for asking nicely.")

			channel.leave();

            server.isPlaying = false;

    		return;


		} else if (args[0] == 'skip') {

			message.reply("Alright, let's get that garbage out of here.")

			channel.leave();

		   	server.isPlaying = false;

    		play();


		} else {

			message.reply('Please insert a youtube video link or an actual command.')

			return;

		}
		   



    	function play(){


    	if (server.isPlaying == true) return;

    	channel.join()

        .then(connection => {

            server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter : 'audioonly' }), streamOptions);

            ytdl.getInfo(server.queue[0], function(err, info) {

  			message.channel.send("Now playing: " + info.title)

			});

            server.isPlaying = true;


            server.dispatcher.on("end", end => {

            	server.queue.shift();

            	if(server.queue.length == 0){

            	channel.leave();

            	server.isPlaying = false;

    			message.channel.send("Yo, I ran out of music in the queue, because SOMEONE forgot to add more.")


            	//return queue;

				} else {

            	server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter : 'audioonly' }), streamOptions);

            	play()

            	//return queue;

				};


            });

        })

    		.catch(console.error);

    	}

	},

};


module.exports.queue = queue;

module.exports.servers = servers;

