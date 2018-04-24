$("document").ready(function() {

    var computerRandom;
    var wins = 0;
    var losses = 0;
    var total = 0;

    //to start game 
    var startGame = function() {
        $(".crystalsPanel").empty();
        $("#winORlost").empty();
        $("#startButton").empty();
        //array for crystals images
        var crystalImages = [
            'assets/images/diamond3.png',
            'assets/images/diamond1.png',
            'assets/images/diamond2.png',
            'assets/images/diamond4.png'
        ];
        //get computer random number and print it on the scrren
        computerRandom = Math.floor(Math.random() * 100) + 19;

        $("#computerNumber").html("Magic Number : " + computerRandom);

        //created crystals and assign classes to store data
        for (var i = 0; i < 4; i++) {

            crystalRandom = Math.floor(Math.random() * 12) + 1;

            var crystal = $("<div>");
            // assign images and random number to crystal attributes
            crystal.attr({
                "class": 'crystal',
                "data-crystal": crystalRandom
            });
            crystal.css({
                "background-image": "url('" + crystalImages[i] + "')",
                "background-size": "cover"
            });
            $(".crystalsPanel").append(crystal);

        }

        $("#totalScore").html("Your Total Score is:  " + total);
    }

    startGame();

    $(document).on("click", ".crystal", function() {
        //convert string "number" into number "number" to calculate total score
        var number = parseInt($(this).attr('data-crystal'));
        total += number;
        $("#totalScore").html("Your Total Score is:  " + total);

        //check all conditions for the game

        if (total > computerRandom) {
            losses++;
            $("#lost").html("Losses :" + losses);
            //create a start button 
            $("#winORlost").html("You Lost!" )
            $("#startButton").html('<button id="clear" type="button" class="btn btn-raised btn-secondary">Start Game</button>')
            alert(total)
            total = 0;

            var main = $("body");
            var btns = main.find("#clear");
            main.on("click", "#clear", function() {

                startGame();
            });

        } else if (total === computerRandom) {
            wins++;
            $("#win").html("Wins :" + win);
            $("#winORlost").html("You Won!" );
            $("#startButton").html('<button id="clear" type="button" class="btn btn-raised btn-secondary">Start Game</button>')
            total = 0;
            var main = $("body");
            var btns = main.find("#clear");
            main.on("click", "#clear", function() {

                startGame();
            });
        }

    });

});