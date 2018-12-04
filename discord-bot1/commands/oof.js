module.exports = {

	name: 'oof',

	description: 'send someone oofage',

	needAdmin: false,

	usage: '!oof or !oof @someone',

	execute(message) {

		if (!message.mentions.users.size) {

			return message.channel.send(`${message.author.username} has recieved one oof from... Themselves?! Oof, I guess.`);

		};


		const oofList = message.mentions.users.map(user => {

			return `${user.username} has recieved one oof from ${message.author.username}. Oof.`;

		});


		message.channel.send(oofList);

	},

};