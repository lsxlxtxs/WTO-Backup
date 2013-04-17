/* Reward Video Window
 * 
 * Generates game based on the options selected
 * by the user on the playGameIPAD.js page
 * 
 * Author: Laura Seletos
 * Advisor: Dr. Branton
 *  
 * Video tutorial: http://developer.appcelerator.com/question/137134/play-video-in-titanium-studio
 */

//Game Logic:

	var videoURL = "RewardAnimationStills/reward.mp4";

	//creates game menu window
	var rewardVideoWin = Ti.UI.createWindow
	({
		//sets bg border to gray
		backgroundColor: '#333333'
	});

	
	//sets orientation to landscape
	rewardVideoWin.orientationModes = [Ti.UI.LANDSCAPE_LEFT,Ti.UI.LANDSCAPE_RIGHT];
	
	    var activeMovie = Titanium.Media.createVideoPlayer({
        url : videoURL,
        //movieControlMode : Titanium.Media.VIDEO_CONTROL_DEFAULT,
        movieControlStyle : Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
        scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL,
        fullscreen : true,
        autoplay : false
    });
    rewardVideoWin.add(activeMovie);

 
    var closeButton = Ti.UI.createButton({
        title : "Close",
        top : "0dp",
        height : "40dp",
        left : "10dp"
    });
 
   closeButton.addEventListener('click', function() 
   {
		playGameIPAD.open();
		rewardVideoWin.close();
    });
 
    activeMovie.add(closeButton);





