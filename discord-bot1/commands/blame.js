module.exports = {

	name: 'blame',

	description: 'Not me! ',

	needAdmin: false,

	usage: '!blame',

	execute(message) {

		var blames = ['programming', 'mechanical', 'electrical', 'business', 'Molly', 'Kranz'];

    	randBlame = Math.floor((Math.random() * blames.length) + 0);

		message.channel.send(`It's a ${blames[randBlame]} issue.`);

	},

};