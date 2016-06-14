angular.module('clock').controller('clockControl', function(clockControlService){
  var clockControl = this;
  
 

  clockControl.startHands = function(){ 
  	clockControlService.startInterval();
	

	}

   clockControl.startClock = function(){
   		clockControlService.start();
		
	}

	 
});

