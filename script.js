
//Dont think I need this ------>  const display = document.getElementById('calc-disp');
const btns = document.getElementsByClassName('buttons');
const clear = document.getElementById('C');
const numbers = document.getElementById('numbDisplay');
const operatorDisplay = document.getElementById('operatorDisplay');
const numbersTwo = document.getElementById('numbTwoDisplay');
const operators = document.querySelectorAll('.operators');
const calculate = document.getElementById('calculate');

let numbArrayOne = [];
let numbStringOne;

let numbArrayTwo = [];
let numbStringTwo;

let numbArrayThree = [];
let numbStringThree;
//------------------------------------------------------







// LOOP AND NAMED FUNCTION FOR CONCATENATING NUMBERS ONTO DISPLAY
for (const buttons of btns) {
    buttons.addEventListener('click', concatFirstNumbers);
}

function concatFirstNumbers() {
    numbArrayOne.push(this.innerHTML);//-----------"THIS" is a game changer!
    numbStringOne = numbArrayOne.join('');

    if (numbStringOne.length <= 12) {
        numbers.innerHTML = numbStringOne;
    }
    else {
        numbStringOne = numbStringOne.substring(0, 12);
        numbers.innerHTML = numbStringOne;
        console.log(numbStringOne);
    }
    
}
/* RE-USE THIS IF NAMED FUNCTION DOESNT WORK.----------------
// LOOP AND FUNCTION FOR CONCATENATING NUMBERS ONTO DISPLAY
for (const buttons of btns) {
    buttons.addEventListener('click', function () {
        numbArrayOne.push(buttons.innerHTML);
        numbStringOne = numbArrayOne.join('');

        if (numbStringOne.length <= 12) {
            numbers.innerHTML = numbStringOne;
        }
        else {
            numbStringOne = numbStringOne.substring(0, 12);
            numbers.innerHTML = numbStringOne;
            console.log(numbStringOne);
        }

    });
}
//------------------------------------------------------------
*/




// LOOP AND FUNCTION FOR OPERATORS ONTO DISPLAY, REMOVES FIRST SET OF NUMBERS FROM DISPLAY AND PROHIBITS CLICK OF ANOTHER OPERATOR OR NUMBER
operators.forEach(item => {
    item.addEventListener('click', concatOperators);
});

function concatOperators() {
    numbArrayTwo.push(this.innerHTML);
    numbStringTwo = numbArrayTwo.join('');
    operatorDisplay.innerHTML = numbStringTwo;
    numbers.style.display = "none";
    console.log(numbStringTwo);

    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);
    });
}



//----------------------------------------------------






// CLEAR BUTTON EVENT LISTENER FUNCTION----------
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    operators.forEach(item => {
        item.addEventListener('click', concatOperators);
    });

    numbers.innerHTML = '';
    numbersTwo.innerHTML = '';
    operatorDisplay.innerHTML = '';
    numbArrayOne.length = 0;
    numbArrayTwo.length = 0;
    numbArrayThree.length = 0;
    numbers.style.display = "inline";
    numbersTwo.style.display = "inline";
}
//----------------------------------------------












//------------------------------------------------------
// MATH BELOW

function addNumbers(a,b) {
    return numbStringOne + numbStringThree;
}
function subtractNumbers(a,b) {
    return a - b;
}
function multiplyNumbers(a,b) {
    return a * b;
}
function divideNumbers(a,b) {
    return a / b;
}



//if(str.length > 10) str = str.substring(0,10);


// Type in number and has limit to how many times, so numbers fit in diplay -----FINISHED
// When you click an operator it removes eventListener from all other operators -------FINISHED
// Ability to type in second string of numbers 
// function takes two the two strings of numbers and calculates them based on chosen operator, once = is clicked.
// prints final string onto display