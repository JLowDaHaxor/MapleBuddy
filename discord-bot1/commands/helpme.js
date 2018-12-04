var index = require("C:/Users/johnj/projects/discord-bot1/index.js")

var helpStuff = []

module.exports = {

	name: 'helpme',

	description: 'actual help',

	needAdmin: false,

	usage: '!helpme',

	execute(message) {

		for (var i = 0; i < index.commandStuff.commandList.length; i++) {

			helpStuff.push(index.commandStuff.commandUsage[i] + ': ' + index.commandStuff.commandDescription[i])

		}

		if(helpStuff.length == index.commandStuff.commandList.length){

			message.author.send(helpStuff)

		}

	},

};