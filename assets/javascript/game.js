$("document").ready( function(){

var computerRandom;
var wins = 0;
var losses = 0;
var total = 0;


//to start game 
var startGame = function(){
    $(".crystalsPanel").empty();
    //array for crystals images
    var crystalImages = [
	    'assets/images/diamond3.png',
        'assets/images/diamond1.png',
        'assets/images/diamond2.png',
        'assets/images/diamond4.png'
        ];
    //get computer random number and print it on the scrren
    computerRandom = Math.floor(Math.random()*100) + 19;

    $("#computerNumber").html("Magic Number : " + computerRandom);

    //created crystals and assign classes to store data
    for ( var i = 0; i < 4; i ++){

        crystalRandom = Math.floor(Math.random()*12) + 1;

        var crystal = $("<div>");

        crystal.attr({"class": 'crystal', "data-crystal": crystalRandom});
        crystal.css({"background-image":"url('"+ crystalImages[i] +"')", "background-size" : "cover"});

        $(".crystalsPanel").append(crystal);


    }

    $("#totalScore").html("Your Total Score is:  " + total);
}

startGame();

$("document").on("click", ".crystal", function(){
    
    var number = $(this).data(crystalRandom);

    console.log(number);

 })



});