var Field = (function(){

        var Field = function(container, game){
                var box;
                if (typeof container === 'string'){
                box = document.getElementById(container)};

                //var container = document.getElementById(container);

                this.reset = function(){
                        //reset to green
                };

                this.checkBases = function(){
                        if (game.onFirst == true){
                                document.getElementById(24).classList.toggle('onBase', true);
                                document.getElementById(24).classList.toggle('base', false);
                        } else if (game.onFirst != true)
                                {document.getElementById(24).classList.toggle('onBase', false);
                                document.getElementById(24).classList.toggle('base', true);};
                        if (game.onSecond == true){
                                document.getElementById(12).classList.toggle('onBase', true)
                                document.getElementById(12).classList.toggle('base', false);
                        } else if (game.onSecond != true)
                                {document.getElementById(12).classList.toggle('onBase', false);
                                document.getElementById(12).classList.toggle('base', true);};
                        if (game.onThird == true){
                                document.getElementById(20).classList.toggle('onBase', true)
                                document.getElementById(20).classList.toggle('base', false);
                        } else if (game.onThird != true)
                                {document.getElementById(20).classList.toggle('onBase', false);
                                document.getElementById(20).classList.toggle('base', true);};
                };

                this.clearOutfield = function(){
                        console.log('clearing');
                        for (outfield = 0; outfield < 12; outfield++){
                        document.getElementById(outfield).classList.toggle('hit', false);
                        document.getElementById(outfield).classList.toggle('outField', false);
                        document.getElementById(outfield).classList.toggle('green', true);
                        document.getElementById(outfield).innerHTML = '';
                        };
                };


                this.placePlayer = function(where){
                        console.log('placing from field.js');
                        console.log(where);
                        document.getElementById(where).className = 'outField';
                }; //end placePlayer

                this.announce = function(was, announcement){
                        if (announcement == 'out'){
                                alert('Strike three, Yerrout!');};
                        if (announcement >= 50 && announcement <=79){
                                document.getElementById(was).classList.toggle('green', true);
                                document.getElementById(was).classList.toggle('hit', false);
                                document.getElementById(was).innerHTML = '';
                        alert('Steeeeee-rike!');
                        } else if (announcement >= 90 && announcement <= 100){
                                document.getElementById(was).classList.toggle('green', true);
                                document.getElementById(was).classList.toggle('hit', false);
                                document.getElementById(was).innerHTML = '';
                                alert('Home run!');
                        };
                };

                this.placeBall = function(was, is){
                        console.log('was');
                        console.log(was);
                        console.log('is');
                        console.log(is);
                        console.log('placing ball at ' + is);
                        console.log(typeof where);
                        document.getElementById(was).classList.toggle('green', true);
                        document.getElementById(was).classList.toggle('hit', false);
                        document.getElementById(was).innerHTML = '';
                        //document.getElementById(where).className('hit');
                        document.getElementById(is).classList.toggle('hit', true);
                        document.getElementById(is).innerHTML = 'B'
                        game.was = is;
                };

                this.updateBillboard = function(newScore){
                        document.getElementById('billboard').innerHTML = "Score: " + game.score + '<br>'
                        + 'Outs: ' + game.outs;
                };

                this.displayGameOver = function(score){
                        var endGame = document.createElement('div');
                        endGame.setAttribute('class', 'billboard');
                        endGame.innerHTML= "Game Over! You scored " + game.score + ' runs. Reload to play again!';
                        document.getElementById(container).appendChild(endGame);
                        game.reset();
                        game.resetBases();
                        game.resetOutfield();
                        (function(){
                        window.setTimeout(function(){
                        document.getElementById(container).removeChild(endGame)}, 2000);
                        })();
                };

                this.render = function(){
                        var diamond = document.createElement('table');
                        diamond.setAttribute('id', 'grounds')
                        box.appendChild(diamond);
                        for (var row = 0; row<7; row++){
                        var rows = document.createElement('tr');
                        diamond.appendChild(rows);
                                for (var cell = 0; cell<5; cell++){
                                var cells = document.createElement('td');
                                cells.setAttribute('id', (row*5+cell));
                                        if (cells.id < 12){
                                        cells.className = 'green';
                                        cells.onclick = function(){game.placePlayer(this.id)};
                                        }else if (cells.id == 13 || cells.id == 14){
                                        cells.className = 'green';
                                        }else if (cells.id ==15 || cells.id ==19 || cells.id ==16 || cells.id ==17 || cells.id==18
                                        || cells.id == 21 || cells.id == 23 || cells.id == 25 || cells.id == 26 || cells.id == 27
                                        || cells.id == 28 || cells.id == 29 || cells.id == 30 || cells.id == 31 || cells.id == 33
                                        || cells.id == 34)
                                        {cells.className = 'green'}
                                        else if (cells.id == 12 || cells.id == 20 || cells.id == 24 || cells.id == 32){
                                        cells.className = 'base'}
                                        else if (cells.id == 22){
                                        cells.className = 'mound'
                                        };//end attribute loops
                                rows.appendChild(cells);
                                }; // end for cells
                        }//end for rows
                        document.getElementById(32).onclick = function(){game.swing()};
                        document.getElementById(22).onclick = function(){game.resetOutfield()};
                        var billboard = document.createElement('div');
                        billboard.classList.toggle('billboard', true);
                        billboard.setAttribute('id', 'billboard');
                        billboard.innerHTML = "Score: " + game.score + "<br>" + 'Outs: ' + game.outs;
                        document.getElementById('field').appendChild(billboard);
                }//end render

        } //end Field

                return Field;

})();

var doStuff = function(){
game1 = new Mechanics();
var rollOut = new Field('field', game1);
rollOut.render();
game1.gui(rollOut);

}

window.onload = doStuff;