console.log ("this is working");
// testing is JavaSCript is connected. play with the console to verify if the functions are working as inteneded
// No notes; just code below

function getElement (id) {
    return document.getElementById(id)
}

function getRandomNumber () {
    return Math.floor(Math.random() * 105);
}

function chanceModifier (){
    var randomIndex = getRandomNumber();
    console.log(randomIndex)
    if (randomIndex <= 50) {
        return 1
    } else if (randomIndex <= 75) {
        return 2
    } else if (randomIndex <= 90) {
        return 3
    } else if (randomIndex <= 98) {
        return 4 
    } else {
        return 5
    }
}


function spin () {
    var value1 = getElement('value1');
    var value2 = getElement('value2');
    var value3 = getElement('value3');

    var slot1 = chanceModifier();
    var slot2 = chanceModifier();
    var slot3 = chanceModifier();
    
    console.log("round of pulling numbers complete")

    value1.innerHTML = `${slot1}`;
    value2.innerHTML = `${slot2}`;
    value3.innerHTML = `${slot3}`;

    function outcome () {
        if (slot1 == slot2 && slot1 == slot3 && slot2 == slot3) {
            playBoing();
            victory();
            console.log ("yike! you actually won!?! Cheater...")
        } else {
            defeat();
        }
    }
    outcome();

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

function tenPull () {
    console.log("A 10x pull? Really?")
    for (let i = 0; i<10; i++) {
        spin()
    }
}