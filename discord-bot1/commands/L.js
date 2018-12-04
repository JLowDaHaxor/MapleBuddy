module.exports = {

	name: 'l',

	description: 'Take an L',

	needAdmin: false,

	usage: '!L or !L @someone',

	execute(message) {

		if (!message.mentions.users.size) {

			return message.channel.send(`${message.author.username} accepted their L.`);

		};


		const lList = message.mentions.users.map(user => {

			return `${user.username} just took a fat L. Nerd!`;

		});


		message.channel.send(lList);

	},

};