angular.module('clock').service('clockControlService', function(){

 var secondHand = document.getElementById('seconds');
 var minuteHand = document.getElementById('minutes');
 var minuteHandTracker = 6;
 var hourHandTracker = null;
 var refreshInterval = undefined;
 var secondHandTracker = 6;
 var refreshInterval;

//we have to kill this refreshinterval variable when we want to stop the app, see below
this.start = function(){
	 refreshInterval = setInterval(clockMechanism,1000);		
	}

//the clock mechanism including moving the second hand and the minute hand after a complete turn (hour functionality TBA)
	function clockMechanism(){
		secondHand.style.transform = "rotate(" +secondHandTracker+ "deg)";
		// if we've come full circle reset the rotation variable 'secondHandTracker'
		if(secondHandTracker === 354){
			secondHandTracker = 0;
			changeMinuteHand();
		}
		secondHandTracker+=6;
				
	}

	//moves the minute hand 
	 function changeMinuteHand(){
		minuteHand.style.transform = "rotate(" +minuteHandTracker+ "deg)";
		minuteHandTracker+=6;
	}

	
	//stops the counting and the analog
	this.stop = function(){
		clearInterval(refreshInterval);
		console.log('here');
	}

	//resets the counting
	this.reset = function(){
		console.log('reset made');
		secondHand.style.transform = "rotate(0deg)";
		//we kill the interval here. 
		clearInterval(refreshInterval);
		location.reload();

	}


})