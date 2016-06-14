angular.module('clock').service('clockControlService', function(){

 var secondHand = document.getElementById('seconds');
 var minuteHand = document.getElementById('minutes');
 var minuteHandTracker = 6;
 var hourHandTracker = null;
 var refreshInterval = undefined;
 var secondHandTracker = 6;
 var refreshInterval;


this.start = function(){
	 refreshInterval = setInterval(clockMechanism,1000);		
	}

//the clock mechanism including moving the second hand and the minute hand after a complete turn ( hour not yet working)
	function clockMechanism(){
		if(secondHand.style.transform === "rotate(354deg)") {
			changeMinuteHand();
		}
		
		secondHand.style.transform = "rotate(" +secondHandTracker+ "deg)";
		secondHandTracker+=6;

		console.log(secondHand.style.transform);
				
	}

	//moves the minute hand 
	 function changeMinuteHand(){
		minuteHand.style.transform = "rotate(" +minuteHandTracker+ "deg)";
		minuteHandTracker+=6;
	}

	

	this.stop = function(){
		clearInterval(refreshInterval);
		console.log('here');
	}

	this.reset = function(){
		console.log('reset made');
		secondHand.style.transform = "rotate(0deg)";
		clearInterval(refreshInterval);
		location.reload();

	}


})