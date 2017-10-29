$(function () {
    //alert("p");
    $('#go').click(function () {
        
        //build a function that checks to see  if a car has won the race
        function checkIfComplete () {
            if(isComplete == false) {
                isComplete = true;
            } else {
                place = 'second';
            }
        } 
        //get width of car
        var carWidth = $('.car').width();
        
        //get Width of race Track
        var raceTrackWidth = $(window).width() - carWidth;
        
        //generate Random number b/w 1 and 5000    
        var raceTime1 = Math.floor((Math.random() * 5000) + 1);
        var raceTime2 = Math.floor((Math.random() * 5000) + 1);
        
        //set flag variable to FALSE by default
        var isComplete = false;
        
        //setv a flag variable to FIRST by default
        var place = 'first';
        
        //animate car1 
        $('#car1').animate({
                
            //move the car width of the racetrack
            left:raceTrackWidth,
        }, raceTime1, function() {
            //animation is complete
            
            //run a function
            checkIfComplete();
            
            //give a text feedback in the race info box
            $('#raceInfo1 span').text('Finished the race in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!');
        });
        
                $('#car2').animate({
                
            //move the car width of the racetrack
            left:raceTrackWidth,
        }, raceTime2, function() {
            //animation is complete
            
            //run a function
            checkIfComplete();
            
            //give a text feedback in the race info box
            $('#raceInfo2 span').text('Finished the race in ' + place + ' place and clocked in at ' + raceTime2 + ' milliseconds!');
        });
});
$('#reset').click(function() {
   $('.car').css('left', '0');
    $('.raceInfo span').text('');
});
});
