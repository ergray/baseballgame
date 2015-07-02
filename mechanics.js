var Mechanics = (function(){

        var Mechanics = function(team1, team2){
        var fouls = 0;
        var strikes = 0;
        var outs = 0;
        var score = 0;
        var _gui;
        var placedPlayers = 0;
        var player1Pos;
        var player2Pos;
        var was = 0; // location the ball fell last
        var onFirst = false;
        var onSecond = false;
        var onThird = false;
        var onBase = 0;
        this.checkForOutfield = checkForOutfield;
        this.checkForGameOver = checkForGameOver;
        this.swing = swing;
        this.gui = gui;
        this.placePlayer = placePlayer;
        this.placedPlayers = placedPlayers;
        this.reset = reset;
        this.score = score;
        this.outs = outs;
        this.player1Pos = player1Pos;
        this.player2Pos = player2Pos;
        this.strikes = strikes;
        this.was = was;
        this.onFirst = onFirst;
        this.onSecond = onSecond;
        this.onThird = onThird;
        this.moveBatter = moveBatter;
        this.onBase = onBase;
        this.resetBases = resetBases;
        this.updateScore = updateScore;
        this.resetOutfield = resetOutfield;


        } //end Mechanics

        var gui = function(useGui){ //initialize GUI

                _gui = useGui;
        };

        var checkForOutfield = function(ball, cellToCheck1, cellToCheck2){
                if ((ball == Number(cellToCheck1)) || (ball == Number(cellToCheck2))){
                this.outs += 1;
                        if (this.checkForGameOver() == true){
                                _gui.displayGameOver();
                                this.reset();
                                this.resetBases();
                                this.resetOutfield();
                                return;
                        };
                _gui.updateBillboard();
                return true;
                };
        };

        var checkForGameOver = function(){
                if (this.outs == 3){
                return true;}
        };


        var placePlayer = function(where){
                this.placedPlayers += 1;
                console.log(this.placedPlayers);
                if (this.placedPlayers == 1){
                        console.log(where);
                        this.player1Pos = where
                } else if (this.placedPlayers == 2){
                        this.player2Pos = where
                };
                if (this.placedPlayers < 3){
                        _gui.placePlayer(where)
                } else {
                        return false
                }
        };

        var reset = function(){
                this.placedPlayers = 0;
                this.outs = 0;
                this.score = 0;
                this.strikes = 0;
                this.onBase = 0;
                this.fouls = 0;
        };

        var resetBases = function(){
                this.onFirst = false;
                this.onSecond = false;
                this.onThird = false;
        };

        var resetOutfield = function(){
                this.placedPlayers = 0;
                this.player1Pos = '';
                this.player2Pos = '';
                _gui.clearOutfield();
        };

        var moveBatter = function(){
                if (this.onBase < 3){
                        this.onBase += 1};
                if (this.onThird == true){
                        this.score += 1;
                        this.updateScore();
                        this.onThird = false;
                };
                if (this.onThird == false && this.onSecond == true){
                        this.onThird = true;
                        this.onSecond = false;
                };
                if (this.onSecond == false && this.onFirst == true){
                        this.onSecond = true;
                        this.onFirst = false;
                };
                if (this.onFirst == false){
                        this.onFirst = true}
        };



        var swing = function(){                                 //determine swing score & landing
                console.log('this is currently was');
                console.log(this.was);
                var swung = Math.floor(Math.random()*100);
                if (swung >= 0 && swung <=4){
                        if (this.checkForOutfield(0, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 0)};
                if (swung >= 5 && swung <=9){
                        if (this.checkForOutfield(1, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 1)};
                if (swung >= 10 && swung <=14){
                        if (this.checkForOutfield(2, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 2)};
                if (swung >= 15 && swung <=19){
                        if (this.checkForOutfield(3, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 3)};
                if (swung >= 20 && swung <=24){
                        if (this.checkForOutfield(4, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 4)};
                if (swung >= 25 && swung <=29){
                        if (this.checkForOutfield(5, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 5)};
                if (swung >= 30 && swung <=34){
                        if (this.checkForOutfield(6, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 6)};
                if (swung >= 35 && swung <=39){
                        if (this.checkForOutfield(7, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 7)};
                if (swung >= 40 && swung <=44){
                        if (this.checkForOutfield(8, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 8)};
                if (swung >= 45 && swung <=49){
                        if (this.checkForOutfield(9, this.player1Pos, this.player2Pos) == true){
                                console.log('Caught!');
                                this.strikes = 0;
                                return};
                        this.moveBatter();
                        _gui.placeBall(this.was, 9)};
                if (swung >= 50 && swung <=79){
                        this.strikes += 1;
                        if (this.strikes == 3){
                                _gui.announce(this.was, 'out')
                                this.outs += 1;
                                _gui.updateBillboard();
                                if (this.checkForGameOver() == true){
                                        _gui.displayGameOver();
                                        this.reset();
                                        this.resetBases();
                                        this.resetOutfield();
                                        return;}
                                this.strikes = 0;
                                return};
                        return;
                        };
                if (swung >= 80 && swung <=89){
                        if (this.strikes < 2);
                        this.strikes += 1;
                        console.log('Foul Ball!');
                        return};
                if (swung >= 90 && swung <=100){
                        this.score += (1 + this.onBase);
                        this.updateScore();
                        this.onBase = 0;
                        this.resetBases();
                        this.strikes = 0;
                        this.fouls = 0;};
                console.log(swung);
                this.strikes = 0;
                this.fouls = 0;
                _gui.checkBases();
                _gui.announce(this.was, swung);

        } // end swing

        var updateScore = function(){
                _gui.updateBillboard(this.score)
        }

        return Mechanics;

})();