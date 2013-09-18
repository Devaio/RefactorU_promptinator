alert("Welcome to the Boulder Flood Relief Victim/Volunteer Coordinator!")
var numVictim = prompt("How many disaster victims would you like to enter information about?")


var vicInfo = []

for (var i = numVictim; i > 0; i--) {
	var vicName = prompt("What is the name of the disaster victim? \n Please use first and last name.")
	var vicPhone = prompt("What is their phone number? \n Please use XXX-XXX-XXXX format.")
	var vicStreet = prompt("What is the name of the street they are on?")
	vicInfo.push(vicName)
	vicInfo.push(vicPhone)
	vicInfo.push(vicStreet)
};


alert("Thank you for the information, next we'd like to know about volunteers.")
var numVolun = prompt("How many volunteers would you like to enter information about?")

var volInfo = []

for (var n = numVolun; n > 0; n--) {
	var volName = prompt("What is the name of the volunteer? \n Please use first and last name.")
	var volPhone = prompt("What is their phone number? \n Please use XXX-XXX-XXXX format.")
	var volStreet = prompt("What is the name of the street they are on?")
	volInfo.push(volName)
	volInfo.push(volPhone)
	volInfo.push(volStreet)
};


alert(" We have " + numVictim + " people who need help right now. \n Here's how to get in touch to help: \n" + vicInfo.join("\n") + "\n \n We also have " + numVolun+ " volunteers available to help. \n Here's their info: \n" + volInfo.join("\n"))
