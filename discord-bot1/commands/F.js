module.exports = {

	name: 'f',

	description: 'pay respects',

	needAdmin: false,

	usage: '!F @someone',

	execute(message) {

		if (!message.mentions.users.size) {

			return message.reply(`tag someone to pay respects.`);

		};


		const fList = message.mentions.users.map(user => {

			return `${message.author.username} just paid respect to ${user.username}.`;

		});


		message.channel.send(fList);

	},

};