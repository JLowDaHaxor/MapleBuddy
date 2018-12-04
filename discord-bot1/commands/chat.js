


module.exports = {

	name: 'chat',

	description: 'For when you need a friend.',

	needAdmin: false,

	usage: '!chat message',


	execute(message, args) {

var ml = require('machine_learning');
 
var data =[['cool'],
           ['heck'],
           ['cool'],
           ['heck'],
           ['cool'],
           ['heck'],
           ['cool'],
           ['cool'],
           ['heck'],
           ['cool'],
           ['cool'],
           ['cool'],
           ['heck'],
           ['cool'],
           ['cool'],
           ['heck']];
var result = ['happy','angry','happy','sad','happy','angry','sad','happy','angry','happy','happy','happy','angry','angry','happy','sad'];
 
var dt = new ml.DecisionTree({
    data : data,
    result : result
});
 
dt.build();

var numMatch = 0
 
var endResult = dt.classify([args[0]])

/*
for (var i = 0; i < data.length; i++) {

	numMatch +=1;
	
	if (args[0] == data[0[i]]) {

		console.log('ok')

	}

}
*/

//Substitue array elements with possible messages

console.log("Happy : ", endResult.happy);

console.log("Sad : ", endResult.sad);

console.log("Angry : ", endResult.angry);


//console.log(numMatch)

//console.log("count: ", endResult.result)
	
if (endResult.happy > endResult.sad) {

	message.channel.send('Glad to see that you\'re happy')

}

	},

};