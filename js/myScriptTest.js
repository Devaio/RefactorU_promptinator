alert("Welcome to the Boulder Flood Relief Victim/Volunteer Coordinator!");

var volStreetMatch = {};
var vicStreetMatch = {};
var vicInfo = [];

	
var addVic = function() {
	var confBox = confirm("Is there a victim's info you would like to enter?")
		if(confBox) {
				 	vicName = prompt("What is the name of the disaster victim? \n Please use first and last name.");
					vicPhone = prompt("What is their phone number? \n Please use XXX-XXX-XXXX format.");
					vicStreet = prompt("What is the name of the street they are on?");
					vicNameNoSpace = vicName.replace(/\s/g, '');
					vicPhoneNoSpace = vicPhone.replace(/\s/g, '');
					vicStreetNoSpace = vicStreet.replace(/\s/g, '');
					vicInfo.push(vicName);
					vicInfo.push(vicPhone);
					vicInfo.push(vicStreet);
					vicStreetMatch[vicNameNoSpace] = vicStreetNoSpace;
					console.log(vicStreetMatch);
		}
};


var addVicCount = 1;
var addVicRun = addVic();

var confVic = function() {
	var confBox = confirm("Is there another victim's info you would like to enter?");
		if(confBox === true) {
				 	vicName = prompt("What is the name of the disaster victim? \n Please use first and last name.");
					vicPhone = prompt("What is their phone number? \n Please use XXX-XXX-XXXX format.");
					vicStreet = prompt("What is the name of the street they are on?");
					vicNameNoSpace = vicName.replace(/\s/g, '');
					vicPhoneNoSpace = vicPhone.replace(/\s/g, '');
					vicStreetNoSpace = vicStreet.replace(/\s/g, '');
					vicInfo.push(vicName);
					vicInfo.push(vicPhone);
					vicInfo.push(vicStreet);
					vicStreetMatch[vicNameNoSpace] = vicStreetNoSpace;
					console.log(vicStreetMatch);
					addVicCount++;
					return confVic();
		}
	};
var confVicRun = confVic();
console.log(vicInfo);

alert("Thank you for the information, next we'd like to know about volunteers.");
var numVolun = prompt("How many volunteers would you like to enter information about?");

var volInfo = [];

for (var n = numVolun; n > 0; n--) {
	var volName = prompt("What is the name of the volunteer? \n Please use first and last name.");
	var volPhone = prompt("What is their phone number? \n Please use XXX-XXX-XXXX format.");
	var volStreet = prompt("What is the name of the street they are on?");
	volNameNoSpace = volName.replace(/\s/g, '');
	volPhoneNoSpace = volPhone.replace(/\s/g, '');
	volStreetNoSpace = volStreet.replace(/\s/g, '');
	volInfo.push(volName);
	volInfo.push(volPhone);
	volInfo.push(volStreet);
	volStreetMatch[volNameNoSpace] = volStreetNoSpace;
	console.log(volStreetMatch);
};

console.log(volInfo);

var vicVolDialog = function() {
	if(vicInfo.length > 0 && volInfo.length > 0) {
		alert("We have " + addVicCount + " people who need help right now. \n Here's how to get in touch to help: \n" + vicInfo.join("\n") + "\n \n We do have " + numVolun+ " volunteer(s) available to help. \n Here's their info: \n" + volInfo.join("\n"))
	}
	else if(vicInfo.length > 0 && volInfo.length === 0) {
		alert("We have " + addVicCount + " people who need help right now. \n Here's how to get in touch to help: \n" + vicInfo.join("\n") + "\n \n We don't currently have any volunteers available to help.")
	}
	else if(vicInfo.length === 0 && volInfo.length > 0) {
		alert("We don't currently have anyone registered for help \n \n We do have " + numVolun + " volunteers available to help. \n Here's their info: \n" + volInfo.join("\n"))
	}
	else {
		alert("We don't currently have anyone registered for need or to volunteer.")
	}
};

var vicVolDialogRun = vicVolDialog();
var vicSearchPrompt = prompt("Enter the name of a victim in need too see if there are volunteers nearby!.");
var vicSearchEntry = vicSearchPrompt.replace(/\s/g, '');
var streetRef = vicStreetMatch[vicSearchEntry];
var volLocalList = [];


for (var k=2; k < volInfo.length; k+=3) {
	if(volInfo[k].replace(/\s/g, '') ===  streetRef) {
		volLocalList.push(volInfo[k-2].replace(/\s/g, ''));
	}
};

if(volLocalList.length > 0) {
alert("The following people are avaible nearby: \n" + volLocalList);
}
else {
	alert("There are no volunteers available nearby.");
};







// for (k = 2; k <= volInfo.length; k+3) {					********Not Working*******
// 	if(volInfo[k].replace(/\s/g, '') ===  streetRef) {
// 		if(k <= volInfo.length) {
// 		volLocalList.push(volInfo[k-2].replace(/\s/g, ''));
// 		}
// 	}
// 	else {
// 		alert("There are no workers nearby.");
// 	}
// 	alert("The following people are avaible nearby: \n" + volLocalList);
// }










