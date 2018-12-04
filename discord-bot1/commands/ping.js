module.exports = {

	name: 'ping',

	description: 'Ping!',

	needAdmin: false,

	usage: '!ping',

	execute(message) {

		message.channel.send('Pong.');

	},

};