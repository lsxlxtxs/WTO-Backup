Ti.include('rewardVideo.js');


/* Play Game Screen
 * 
 * Generates game based on the options selected
 * by the user on the playGameIPAD.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 */

//Game Logic:


	//is playing?
	var playVideo = false;

	//Image is selected int, set to 0 for a starting null value
	var imageSelected= '';
	
	//Checks to see which placement spot is selected, set to 0 for a starting null value
	var placementSelected=0;
	
	//Int for which round the user is on
	var onRoundNumber= 1;
	
	var isGameOver = false;
	
	//Testing var
	var roundsPerGame = 3;  //<--- place RPG var here from appIPAD.js class
	
	//current round
	var roundsPerGameNumber = 0;	
		
	//Create high score
	var score = 0;
	
	
	//created an array of images to be randomized 
	var myImages = new Array();
	myImages[0] = "images/block1.png";
	myImages[1] = "images/block2.png";
	myImages[2] = "images/block3.png";
	
	
	var image1, image2, image3;
	
	var correct1 = "images/block1.png";
	var correct2 = "images/block2.png";
	var correct3 = "images/block3.png";
	
	var imagePlace = 4;


	
	//creates game menu window
	var playGameIPAD = Ti.UI.createWindow
	({
		//sets bg border to gray
		backgroundColor: '#333333'
	});

	//sets orientation to landscape
	playGameIPAD.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];
	
	

if(isGameOver == false)
	{
	
		if (imageSelected == '')
		{
			randomImages();
		}
		
		var youWinLabel = Ti.UI.createLabel({
				text:'', 
				color: '#FFFFFF',
				font:{fontSize:17},
				height:'auto',
				width:'auto',
				top:645,
				left:440
		});
		playGameIPAD.add(youWinLabel);
		
		//Creates background image on game menu screen						
		var gameScreenImg = Ti.UI.createImageView
			({
		 		 image:'images/gamescreen.png'
			});
			
			//Adds in the background image on main screen						
			playGameIPAD.add(gameScreenImg);
		
		
		
		// Create the banner image
		var topBanner = Ti.UI.createImageView
			({
				image: 'images/bannerpic.png',
				height:'auto',
				width:'auto',
				top : 25,
				left : 359
			});
			topBanner.addEventListener('load', function() {
			});
		
			// Add to the parent view.
			playGameIPAD.add(topBanner);
			
	
	
		
		// Create 1st place image holder
		var firstplace = Ti.UI.createImageView
			({
				image : 'images/1stplace.jpg',
				height:200,
				width:200,
				top:222,
				left:117
			});
			//Handle touch functionality
			firstplace.addEventListener('click', function() 
			{
			
			 	placementSelected=1;
						
				Ti.API.info('You clicked on place 1!');

				gameLogic();
			});
			// Add to the parent view.
			playGameIPAD.add(firstplace);
			
		
		// Create 2nd place image holder
		var secondplace = Ti.UI.createImageView
			({
				image : 'images/2ndplace.jpg',
				height:200,
				width:200,
				top:222,
				left:413
			});
			//Handle touch functionality
			secondplace.addEventListener('click', function() 
			{
				placementSelected=2;
				Ti.API.info('You clicked on place 2!');
				
				gameLogic();

		
			});
			// Add to the parent view.
			playGameIPAD.add(secondplace);
		
		
		// Create 3rd place image holder
		var thirdplace = Ti.UI.createImageView
			({
				image : 'images/3rdplace.jpg',
				height:200,
				width:200,
				top:222,
				left:717

			});
			//Handle touch functionality
			thirdplace.addEventListener('click', function() 
			{
				placementSelected=3;
				
				Ti.API.info('You clicked on place 3!');
				
				gameLogic();
		
						
			});
			// Add to the parent view.
			playGameIPAD.add(thirdplace);
		
		
		
		// Create 1st image 
		var first = Ti.UI.createImageView
			({
				image : image1,
				height:200,
				width:200,
				top:436,
				left:117
			});
			//Handle touch functionality
			first.addEventListener('click', function() 
			{
				imageSelected = image1;
				placementSelected = 0;
				
				Ti.API.info(image1);

				imagePlace = 1;
				
				gameLogic();

						
			});
			// Add to the parent view.
			playGameIPAD.add(first);
						

		
		// Create 2nd image 
		var second = Ti.UI.createImageView
			({
				image : image2,
				height:200,
				width:200,
				top:436,
				left:414
			});
			//Handle touch functionality
			second.addEventListener('click', function() 
			{
				imageSelected = image2;
				
				placementSelected = 0;

				Ti.API.info(image2);
				
				imagePlace = 2;

							
				gameLogic();

		
		
			});
			// Add to the parent view.
			playGameIPAD.add(second);

		
		// Create 3rd image
		var third = Ti.UI.createImageView
			({
				image : image3,
				height:200,
				width:200,
				top:436,
				left:720
			});
			//Handle touch functionality
			third.addEventListener('click', function() 
			{
				imageSelected = image3;
				
				placementSelected = 0;

				Ti.API.info(image3);
				
				imagePlace = 3;

								
				gameLogic();

						
			});
			// Add to the parent view.
			playGameIPAD.add(third);
									

						
		
		//back button -> to main menu screen
		var b1 = Ti.UI.createButton
			({
				title:'Back to main screen',
				width:300,
				height:50,
				top:700
			});
			b1.addEventListener('click', function(e)
			{
				reset();
				playGameIPAD.close();
				winLinearIPAD.close();
				winIPAD.open();
				winRelativeIPAD.open();
			});
			playGameIPAD.add(b1);
			
	}

	
else
{
	
	 imageSelected=0;
	
	 placementSelected=0;
	
	 onRoundNumber= 0;
	
	 isGameOver = false;
}
				

function gameLogic()
{
	//------------------------------Game Logic----------------------------------------------------------
switch (onRoundNumber)
{
	case 1:
			//Check to see if move one is correct:
			if(imageSelected == correct1 && placementSelected == 1)
			{
				
				if(imagePlace == 1)
				{
						//change location of 1st image to correct placement on screen
						first.setTop(219);
				}
				if(imagePlace == 2)
				{
						//change location of image to correct placement on screen
						second.setTop(219);
						second.setLeft(118);
				}
	
				if(imagePlace == 3)
				{
						//change location of image to correct placement on screen
						third.setTop(219);
						third.setLeft(118);
				}
				

				
				//do this
				Ti.API.info('You beat round 1!');
						
				// Set to move on to next round: 
				onRoundNumber = 2;
				
			}
			else
			{
				//reset();
			}
	break;

	case 2:
			//Check to see if move one is correct:
			if (onRoundNumber == 2)
			{
				if(imageSelected == correct2 && placementSelected == 2)
				{

					if(imagePlace == 1)
					{
							//change location of 1st image to correct placement on screen
							first.setTop(215);
							first.setLeft(414);
					}
					if(imagePlace == 2)
					{
							//change location of image to correct placement on screen
							second.setTop(215);
							second.setLeft(414);
					}
		
					if(imagePlace == 3)
					{
							//change location of image to correct placement on screen
							third.setTop(215);
							third.setLeft(414);
					}
			
					//do this
					Ti.API.info('You beat round 2!');
				
			
					// Set to move on to next round: 
					onRoundNumber = 3;
		
				}
				else
				{
					//reset();
				}
			}
	break;

	case 3:
		if(imageSelected == correct3 && placementSelected == 3)
		{

			if(imagePlace == 1)
			{
					//change location of 1st image to correct placement on screen
					first.setTop(215);
					first.setRight(115);
			}
			if(imagePlace == 2)
			{
					//change location of image to correct placement on screen
					second.setTop(215);
					second.setRight(115);
			}

			if(imagePlace == 3)
			{
					//change location of image to correct placement on screen
					third.setTop(215);
					third.setRight(115);
			}

			Ti.API.info('You beat round 3!');
		  				   
	  if(platform=='ipad')
	  {				
			setTimeout(function(){
				
			var videoURL = "RewardAnimationStills/reward.mp4";

				//set up video
			 var activeMovie = Titanium.Media.createVideoPlayer({
		        url : videoURL,
		        scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL,
		        autoplay : true,
		        fullscreen : true
		    });
		
			//add video to screen
			playGameIPAD.add(activeMovie);
	
		  	//autoReward(); 
			activeMovie.play();
			
			setTimeout(function(){
			  playGameIPAD.remove(activeMovie);
			}, 5000);


			}, 500);
	   }			   

		  	
			// //Creates a dialog popup that on button click plays the reward screen
		 	// var dialog = Ti.UI.createAlertDialog({
			    // message:'Great Job! On to the next round!', 
			    // buttonNames: ['Continue']
			  // });
			  // dialog.addEventListener('click', function(ev) {
			    // if (ev.index == 0) 
			    // {
			      // autoReward(); 
			      // playVideo = true;
				// }
			  // });
			  // dialog.show();
				  			
		  	
	
	  		// Set to move on to next round: 
			onRoundNumber = 4;
			gameWon();


		}
		else
		{
			//reset();
		}
	break;
}
}


function gameWon()
{						
	//------------------------------Game Logic----------------------------------------------------------
	
	//Check to see if player had won the round:
	if(onRoundNumber == 4)
	{	
		
		//increment score
		score++;

		//PLAYER WON:			
		Ti.API.info('You Won the game!!');
									
		//Label 'You Win!'
		youWinLabel.setText('You Win! Great Job!');
			
			roundsPerGameNumber++;
			roundsPerGameCheck();
			changeScoreImage();
								
	}	
			
}

function roundsPerGameCheck()
{
	if (roundsPerGameNumber == roundsPerGame)
	{
		youWinLabel.setText('All Rounds Completed!');
		Ti.API.info('Your Score: ');
		Ti.API.info(score);
					


	}
	else
	{

		reset();
			

	}

}

function reset()
{
		// stay on same round 
		onRoundNumber = 1;
		imageSelected = 0;
		placementSelected = 0;
		imagePlace = 0;
	

		randomImages();
		 
		if(!(roundsPerGame == score))
		{
		
			first.setImage(image1);
			first.setTop(436);
			first.setLeft(117);
			
			second.setImage(image2);
			second.setTop(436);
			second.setLeft(414);
			
			third.setImage(image3);
			third.setTop(436);
			third.setLeft(720);
			
			Ti.API.info(imagePlace);
			Ti.API.info(imagePlace);
			Ti.API.info(imagePlace);
		}
		else
		{
			playGameIPAD.remove(first);
			playGameIPAD.remove(second);
			playGameIPAD.remove(third);
		}
		
		
		//youWinLabel.setText('');
		

}

function randomImages()
{
				
			myImages.sort(function() {return 0.5 - Math.random()})	
			
			image1 = myImages[0];
			image2 = myImages[1];
			image3 = myImages[2];
	
}

function changeScoreImage()
{
			if (roundsPerGame == 1)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
			} 
			if (roundsPerGame == 2)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}
				
			} 
			if (roundsPerGame == 3)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}			
			} 
			if (roundsPerGame == 4)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}					
			}
			if (roundsPerGame == 5)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}		
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}				
			}
			if (roundsPerGame == 6)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}	
				if (score == 6)
				{
					score6.setImage('images/star.png');
				}					
			}
			if (roundsPerGame == 7)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}	
				if (score == 6)
				{
					score6.setImage('images/star.png');
				}
				if (score == 7)
				{
					score7.setImage('images/star.png');
				}	
				
			}
			if (roundsPerGame == 8)
			{
				if (score == 1)
				{
					score1.setImage('images/star.png');
				}
				if (score == 2)
				{
					score2.setImage('images/star.png');
				}	
				if (score == 3)
				{
					score3.setImage('images/star.png');
				}	
				if (score == 4)
				{
					score4.setImage('images/star.png');
				}
				if (score == 5)
				{
					score5.setImage('images/star.png');
				}	
				if (score == 6)
				{
					score6.setImage('images/star.png');
				}	
				if (score == 7)
				{
					score7.setImage('images/star.png');
				}	
				if (score == 8)
				{
					score8.setImage('images/star.png');
				}	
				
			}

			
}
	
	//Creates button for Play Game
	//When clicked - opens gamemenu file
	var rewardB = Ti.UI.createButton({
		color: '#000000',
		title:'Replay Video',
		width:155,
		height:50,
		top:20,
		right:125
	});
	//Adds click functionality to the play game function 
	rewardB.addEventListener('click', function()
	{
			var videoURL = "RewardAnimationStills/blocks.mp4";

				//set up video
			 var activeMovie2 = Titanium.Media.createVideoPlayer({
		        url : videoURL,
		        scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL,
		        autoplay : true,
		        fullscreen : true
		    });
		
			//add video to screen
			playGameIPAD.add(activeMovie2);
	
		  	//autoReward(); 
			activeMovie2.play();
			
			setTimeout(function(){

			 	playGameIPAD.remove(activeMovie2);

				
			}, 17000);
	});
	//Adds game play button to view
	playGameIPAD.add(rewardB);

//reward on round win
function autoReward()
{
		//opens up the game play menu
		rewardVideoWin.open();
		//closes current/main window (without this they two windows open on top of each other)
		playGameIPAD.close();
}

