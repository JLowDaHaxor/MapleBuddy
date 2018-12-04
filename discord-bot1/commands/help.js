module.exports = {

	name: 'help',

	description: 'help',

	needAdmin: false,

	usage: '!help',

	execute(message) {

		message.reply("Alright, check your DM")

		message.author.send("No")
		
	},

};