console.log("starting..");

const fs = require('fs');
const os=require('os');
var user=os.userInfo();
fs.appendFile("greetings.txt", `hello ${user.username}`, function(err) {
	if(err) {
		console.log(err);
	}
});
console.log(user);