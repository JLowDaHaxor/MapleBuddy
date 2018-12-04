module.exports = {

	name: 'addbot',

	description: 'add the bot to your server',

	needAdmin: false,

	usage: '!addbot',

	execute(message) {

		message.channel.send("Add the bot to your own server with https://discordapp.com/oauth2/authorize?client_id=509189824922648576&scope=bot");
		message.channel.send('Thanks for considering to use my bot. NERD!')

	},

};