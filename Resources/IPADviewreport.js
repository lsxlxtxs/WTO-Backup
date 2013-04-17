//Includes the .js files that the buttons on this screen will be navigating to.
//Ti.include('appIPAD.js');

/* IPAD
 * 
 * View Report Screen
 * 
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */


//Creates the window and sets the orientation to landscape
var winIPADviewreport = Ti.UI.createWindow
	({
		backgroundColor: '#333333'
	});
	winIPADviewreport.orientationModes = [
							Ti.UI.LANDSCAPE_LEFT,
							Ti.UI.LANDSCAPE_RIGHT
							];


// Create an ImageView.
var topBanner = Ti.UI.createImageView
	({
		image : 'images/bannerpic.png',
		height:'auto',
		width:'auto',
		top : 25,
		left : 359
	});

	// Add to the parent view.
	winIPADviewreport.add(topBanner);



//Label for 'Player's Name:'
var step2Label = Ti.UI.createLabel({
	text:'Player Name:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	top:260,
	left:240

});

//add label to window
winIPADviewreport.add(step2Label);
		var playersNameText = Ti.UI.createLabel({
			text:' ', 
			color: '#000000',
			font:{fontSize:17},
			height:'auto',
			width:'auto',
			top:280,
			left:247
			
		
		});
		//add label to window
		winIPADviewreport.add(playersNameText);




//Creates button for saving your username
var button = Ti.UI.createButton({
	color: '#000000',
	left:225,
	top:37,
	width:80,
	title:'error checking...'
});
	//Adds click functionality to the play game function 
	button.addEventListener('click', function(e)
	{
		alert("Hello " + MyGlobalVars.ipadUserName +"! or: ");
	});
	//Adds save button to view
	winIPADviewreport.add(button);




//Label for words:
var wordsLabel = Ti.UI.createLabel({
	text:'Words:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	top:320,
	left:240

});
//add label to window
winIPADviewreport.add(wordsLabel);
	//Label for Words:
	var wordsVar = Ti.UI.createLabel({
		text:'Words Selected Var Goes Here (ex: first)', 
		color: '#000000',
		font:{fontSize:17},
		height:'auto',
		width:'auto',
		top:340,
		left:247
	
	});
	//add label to window
	winIPADviewreport.add(wordsVar);




//Label for 'Actions:'
var actions = Ti.UI.createLabel({
	text:'Actions:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	top:370,
	left:240
});
//add label to window
winIPADviewreport.add(actions);
	//Label for Words:
	var actionVar = Ti.UI.createLabel({
		text:'Action Selected Variable Goes Here (ex: dot-to-dot)', 
		color: '#000000',
		font:{fontSize:17},
		height:'auto',
		width:'auto',
		top:390,
		left:247
	
	});
	//add label to window
	winIPADviewreport.add(actionVar);



//Label for 'Totals:'
var totalsLabel = Ti.UI.createLabel({
	text:'Totals:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	right:240,
	top:260
});
//add label to window
winIPADviewreport.add(totalsLabel);
		//Label for 'Totals:'
		var numcorrect = Ti.UI.createLabel({
			text:'Number Correct:', 
			color: '#000000',
			font:{fontSize:17},
			height:'auto',
			width:'auto',
			right:233,
			top:280
		});
		//add label to window
		winIPADviewreport.add(numcorrect);
		//Label for 'Totals:'
		var nummissed = Ti.UI.createLabel({
			text:'Number Missed:', 
			color: '#000000',
			font:{fontSize:17},
			height:'auto',
			width:'auto',
			right:233,
			top:300
		});
		//add label to window
		winIPADviewreport.add(nummissed);
		//Label for 'Totals:'
		var comphelp = Ti.UI.createLabel({
			text:'Computer Helped:', 
			color: '#000000',
			font:{fontSize:17},
			height:'auto',
			width:'auto',
			right:233,
			top:320
		});
		//add label to window
		winIPADviewreport.add(comphelp);


//Label for 'Options:'
var optionsLabel = Ti.UI.createLabel({
	text:'Options:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	right:240,
	top:350
});
//add label to window
winIPADviewreport.add(optionsLabel);
		//Label for 'Options:'
		var repeat = Ti.UI.createLabel({
			text:'Repeat:', 
			color: '#000000',
			font:{fontSize:17},
			height:'auto',
			width:'auto',
			right:233,
			top:370
		});
		//add label to window
		winIPADviewreport.add(repeat);