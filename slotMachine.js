console.log ("this is working");
// testing is JavaSCript is connected. play with the console to verify if the functions are working as inteneded

function getElement (id) { // generic function to get code to interact with HTML
    return document.getElementById(id)
}

function getRandomNumber () { // initial random number
    return Math.floor(Math.random() * 100)+1;
}

function chanceModifier (){ // re-assigning value to the random number
    var randomIndex = getRandomNumber();
    if (randomIndex <= 50) {
        return 0
    } else if (randomIndex <= 75) {
        return 1
    } else if (randomIndex <= 90) {
        return 2
    } else if (randomIndex <= 98) {
        return 3 
    } else {
        return 4
    }
}

function getColumn () { // generating an array of modified numbers for each coloumn
    var getColumnArr = [] // this way the rows share a common source for spin animation
    if ( getColumnArr.length < 10 ) {
        for (let i = 0; i < 10; i++) {
            var r = chanceModifier();
            getColumnArr.push(r);
        } 
    }
    console.log(getColumnArr)
    return getColumnArr;
}

function getPokemonImage (slotValue) {

    var pokemonImageArray = [];
    pokemonImageArray.push('<img class="pokemon" src="https://cdn2.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png"  id="bulbasaur" alt="bulbasaur">');
    pokemonImageArray.push('<img class="pokemon" src="https://cdn2.bulbagarden.net/upload/thumb/7/73/004Charmander.png/500px-004Charmander.png"  id="charmander" alt="charmander">');
    pokemonImageArray.push('<img class="pokemon" src="https://cdn2.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/500px-007Squirtle.png"  id="squirtle" alt="squirtle">');
    pokemonImageArray.push('<img class="pokemon" src="https://cdn2.bulbagarden.net/upload/thumb/1/17/025Pikachu-Original.png/1200px-025Pikachu-Original.png"  id="pikachu" alt="pikachu">');
    pokemonImageArray.push('<img class="pokemon" src="https://cdn2.bulbagarden.net/upload/thumb/6/6e/133Eevee_LG.png/220px-133Eevee_LG.png"  id="eevee" alt="eevee">');

    return pokemonImageArray[slotValue];
}

function spin () { // upon clicking pull, the column arrays are generated...
    

    var slotMatrix = [];
    var numColumns = 3;
    
    for(var i = 0; i < numColumns; i++){
        slotMatrix.push(getColumn().slice(7)); // +7 <--
    }

    var table = document.getElementById("myTab1")
    var numRows = table.rows.length;
    var numCols = table.rows[0].cells.length;
    
    
    var colIndex = 0 // <--- beginner noob stuff. no do ~
    while (colIndex < numCols) {
        // do something
        var rowIndex = 0;
        while (rowIndex < numRows) {
            //do something else
            var cell = table.rows[rowIndex].cells[colIndex]
            cell.innerHTML = slotMatrix[colIndex][rowIndex];
            rowIndex++;
        }
        colIndex++;
    }
    
    var table = document.getElementById("myTab1");
    for (var colIndex = 0; colIndex < numCols; colIndex++) {
        for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
            var row = table.rows[rowIndex];
            var cell = row.cells[colIndex];
            cell.innerHTML = slotMatrix[colIndex][rowIndex];
        }
    }
    
    var table = document.getElementById("myTab1") // this is the shortcut ~ study
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        for (var j = 0, row; row = table.rows[j]; j++){
            var cell = row.cells[i];
            cell.innerHTML = getPokemonImage(slotMatrix[i][j]);
        }
    }

    



    var slotT1 = slotMatrix[0][0];
    var slotC1 = slotMatrix[0][1]; // 2.) set a variable as index from array
    var slotB1 = slotMatrix[0][2];

    var slotT2 = slotMatrix[1][0];
    var slotC2 = slotMatrix[1][1];
    var slotB2 = slotMatrix[1][2];

    var slotT3 = slotMatrix[2][0];
    var slotC3 = slotMatrix[2][1];
    var slotB3 = slotMatrix[2][2];
    
    console.log("round of pulling numbers complete")
    
    var winCounter = 0 // every "win" will increase counter by "1"
    function outcome () {
        TopWin()
        CenterWin()
        BotWin()
        DDownWin() 
        DUpWin()
        console.log(winCounter);
        if (0 < winCounter){
            victory()
            playBoing()
        } else {
            defeat()
        }
    }
    outcome();
    function TopWin () {
        if  (slotT1 == slotT2 && slotT1 == slotT3) { // top row
            console.log ("Top Row Won")
            return winCounter = winCounter + 1;
        }
    }
    function CenterWin () {
        if (slotC1 == slotC2 && slotC1 == slotC3) { // center row
            console.log ("Center Row Won")
            return winCounter = winCounter + 1;
        }
    }
    function BotWin () {
        if (slotB1 == slotB2 && slotB1 == slotB3) { // bot row
            console.log ("Bot Row Won")
            return winCounter = winCounter + 1;
        }
    }
    function DDownWin () {
        if (slotT1 == slotC2 && slotT1 == slotB3) { // diangonal down
            console.log ("Dianganol Down Won")
            return winCounter = winCounter + 1;
        }
    }
    function DDownWin () {
        if (slotT1 == slotC2 && slotT1 == slotB3) { // diangonal down
            console.log ("Dianganol Down Won")
            return winCounter = winCounter + 1;
        }
    }
    function DUpWin(){
        if (slotB1 == slotC2 && slotB1 == slotT3) { // diagonal up        
            console.log ("Dianganol Up Won")
            return winCounter = winCounter + 1;
        }
    } 

}


function victory() {
    const editMessage = document.querySelector('.message')
    return editMessage.innerText = "You Win!"
   
}

function defeat() {
    const editMessage = document.querySelector('.message')
    return editMessage.innerText = "You Lose!"
 }

function playBoing() {
    const boing = document.getElementById("boing")
    boing.play();
}


/*
Description: Calls spin() multiple times.
Parameters: @numSpins - number of times to call spin()
Return: --void--
*/
async function spinMultiple(numSpins){
    if(numSpins < 1 || typeof numSpins != 'number')
        return;

    var buttons = document.getElementsByClassName("buttonSpin");

    disableButtons(buttons, true)

    for (let i = 0; i<numSpins; i++) {
        await timer(1000);
        spin();
    }

    disableButtons(buttons, false)
}

/*
Description: disables HTMLS buttons
Parameters: @buttons - HTML collection of buttons
            @disabled - boolean ( true or false )
Return: --void--
*/

function disableButtons(buttons, disabled) {
    for (let i=0; i<buttons.length; i++) {
        buttons.item(i).disabled = disabled
    }
}
function timer(ms) { return new Promise(res => setTimeout(res, ms)); } // timer function declared for task()

