	
var addVic = function() {
	var vicName = prompt("What is the name of the disaster victim? \n Please use first and last name.")
	var vicPhone = prompt("What is their phone number? \n Please use XXX-XXX-XXXX format.")
	var vicStreet = prompt("What is the name of the street they are on?")
	vicInfo.push(vicName)
	vicInfo.push(vicPhone)
	vicInfo.push(vicStreet)
}

var addVicRun = addVic()