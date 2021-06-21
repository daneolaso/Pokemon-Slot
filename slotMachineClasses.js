function spin() {
     function delay() {
        function setTimeOut() { pullNumbers() } 3;
    }
    // Adds a delay on display to the pullNumbers Function
    // Adds a spinning annimation to pullNumbers function
}

// function getRandomNumber () {
//     return Math.floor(Math.random() * 3);
// }

// function getElement (id) {
//     return document.getElementById(id)
// }

// function spin () {
//     const value1 = getElement('value1');
//     const value2 = getElement('value2');
//     const value3 = getElement('value3');

//     const num1 = getRandomNumber();
//     const num2 = getRandomNumber();
//     const num3 = getRandomNumber();

//     value1.innerHTML = `${num1}`;
//     value2.innerHTML = `${num2}`;
//     value3.innerHTML = `${num3}`;
// }
// This format does the following
// 1.) Sets up a function to get a random number
// 2.) sets up a function to call an element from the HTML
// 3.) Creates a function that ...
//     - saves a varaible of the called element from html as a constant
//     - saves a new varable whose value is determing by the randon number function as a constant
//     - updates/edits the called element variable from the randomNumber variable

function getRandomNumber () {
    return Math.floor(Math.random() * 3);
}

function getElement (id) {
    return document.getElementById(id)
}
function pullNumbers(  array[element]  ) {
    for (let i = 0; i < array.length; i++) {
    // const element = array[i];
   const array[i] = getElement(value`${[i]}`);
   const num[i] = getRandomNumber();
   value[i].innerHTML = `${num[i]}`
    }
    
    // pull first Number of array.lenth
    
    // display number
    // pull next number
}

function outcome() {
    if (num1 == num2 && num1 ==num3 && num2 == num3) {
        playBoing();
        victory();
    } else {
        defeat();
    }
}

function playBoing() {
    const boing = document.getElementById("boing")
    boing.play();
}


function victory() {
    const editMessage = document.querySelector('.message')
    return editMessage.innerText = "You Win!"
    // call account() <-- edit accountBalence
}

function defeat() {
    const editMessage = document.querySelector('.message')
    return editMessage.innerText = "You Lose!"
    // call account() <-- edit accountBalance
}

// account() {
//     add/minus the "bet" from accountBalence
//     return new accountBalence
//     call transactionHistory()
// }

// transactionHistory() {
//     push new transaction to end of the array transactionHistory
//     if arrayLength > 5 then, shift first element from array 
// }

