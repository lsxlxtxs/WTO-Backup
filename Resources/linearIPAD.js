/* IPAD
 * 
 * Linear Button Option
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */



var adjustPosition = 0;

//Creates the window and sets the orientation to landscape
var winLinearIPAD = Ti.UI.createWindow
	({
		width:600,
		height:500,
		top:210,
		left:140
	});
					

//Creates button for switching to Linear Time
var linearbuttonA = Ti.UI.createButton({
	color: '#C8C8C8',
	left:0,
	top:0,
	width:115,
	height:35,
	title:'Linear Time'
});
	//Adds game play button to view
	winLinearIPAD.add(linearbuttonA);


//Creates button for switching to Relative Time
var relativebuttonA = Ti.UI.createButton({
	color: '#000000',
	left:120,
	top:0,
	width:115,
	height:35,
	title:'Relative Time'
});
	//Adds click functionality to the play game function 
	relativebuttonA.addEventListener('click', function()
	{
		//opens up the game play menu
		winRelativeIPAD.open();
		//closes current/main window (without this they two windows open on top of each other)
		winLinearIPAD.close();
	});
	//Adds game play button to view
	winLinearIPAD.add(relativebuttonA);
	
	
	
//Label for 'A video shows...'
var middleText1A = Ti.UI.createLabel({
	text:'A video shows an action. The action is divided into 2, 3, or 4', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:60
});
//add label to window
winLinearIPAD.add(middleText1A);


//Label for 'middle step is...'
var middleText2A = Ti.UI.createLabel({
	text:'Step and the player is asked to put images of the action into', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:80
});
//add label to window
winLinearIPAD.add(middleText2A);

//Label for 'what occured before...'
var middleText3A = Ti.UI.createLabel({
	text:'the right order to match the time Words you select.', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:100
});
//add label to window
winLinearIPAD.add(middleText3A);


	
//Label for 'basic play'
var basicPlayLabelA = Ti.UI.createLabel({
	text:'Basic Play:', 
	color: '#000000',
	font:{fontSize:17},
	height:'auto',
	width:'auto',
	left: adjustPosition,
	top:150
});
//add label to window
winLinearIPAD.add(basicPlayLabelA);


//for before/earlier radio buttons
var radioGroupBasicPlay = require('ui/CustomRadioButtonClasses/tiRadioButtonBASICPLAYLINEAR');
	

		//Radio Button = Basic Play Options
		var radioGroupBasicPlay = radioGroupBasicPlay.createGroup({
		groupId:8,
		width:20,
		height:155,
		layout:'vertical',
		radioItemsValue:['1', '2','3', '4','5', '6'],
		radioItemsPadding:5,
		radioItemsBackgroundSelectedImage:'images/radioButtonActive.png',
		radioItemsBackgroundImage:'images/radioButton.png',
		radioItemsWidth:18,
		radioItemsHeight:19
		});	
		radioGroupBasicPlay.addEventListener('load', function() 
		{

		});
			//Labels
				var labelft = Ti.UI.createLabel({
				text:'first / then', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:20,
				top:171
				});
				var labelfn = Ti.UI.createLabel({
				text:'first / next', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:20,
				top:195
				});
				var labelfl = Ti.UI.createLabel({
				text:'first / last', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:20,
				top:219
				});
				var labelftl = Ti.UI.createLabel({
				text:'first / then / last', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:20,
				top:243
				});
				var labelfnl = Ti.UI.createLabel({
				text:'first / next / last', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:20,
				top:267
				});
				var labelfntf = Ti.UI.createLabel({
				text:'first / next / to finish', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left:20,
				top:293
				});
					winLinearIPAD.add(radioGroupBasicPlay);
					winLinearIPAD.add(labelft);
					winLinearIPAD.add(labelfn);
					winLinearIPAD.add(labelfl);
					winLinearIPAD.add(labelftl);
					winLinearIPAD.add(labelfnl);
					winLinearIPAD.add(labelfntf);


			//Labels
				var labelAdvanced = Ti.UI.createLabel({
				text:'Advanced', 
				color: '#000000',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				left: 261,
				top:150
				});
					winLinearIPAD.add(labelAdvanced);
				
