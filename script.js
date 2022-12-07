
const display = document.getElementById('calc-disp');
const btns = document.getElementsByClassName('buttons');
const clear = document.getElementById('C');
const numbers = document.getElementById('numbDisplay');
let numbArray = [];
let numbString;



let numbArrayTwo = [];
let numbStringTwo;

let numbArrayThree = [];
let numbStringThree;
//----------------------------------------------------------------------------------------------------------




// THIS FUNCTION MAKES OPERATORS UNCLICKABLE WHEN THE BODY OF THE CALCULATOR PAGE IS LOADED. 
function onlyNumbers() {
    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);
    });

    for (const buttons of btns) {
        buttons.removeEventListener('click', concatSecondNumbers);
    }
}
//------------------------------------------------------------------------------------------------------------------



// LOOP AND NAMED FUNCTION FOR CONCATENATING FIRST NUMBERS ONTO DISPLAY
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
    }

    operators.forEach(item => {
        item.addEventListener('click', concatOperators);//-------TURNS OPERATOR BUTTONS BACK ON ONCE A NUMBER IS CLICKED. 
    });


    }
//--------------------------------------------------------------------------------------------------------------------------------------



// LOOP AND FUNCTION FOR OPERATORS ONTO DISPLAY, REMOVES FIRST SET OF NUMBERS FROM DISPLAY AND PROHIBITS CLICK OF ANOTHER OPERATOR OR NUMBER

function concatOperators() {
    numbArrayTwo.push(this.innerHTML);
    numbStringTwo = numbArrayTwo.join('');
    numbers.style.display = "none";


    if (numbStringTwo.length = 1) {
        operatorDisplay.innerHTML = numbStringTwo;
    }
    else {
        operators.forEach(item => {
            item.removeEventListener('click', concatOperators);
        });
    }


    for (const buttons of btns) {
        buttons.removeEventListener('click', concatFirstNumbers);
    }

    for (const buttons of btns) {
        buttons.addEventListener('click', concatSecondNumbers);
    }


}
//-------------------------------------------------------------------------------------------------------------------------------




// LOOP AND NAMED FUNCTION FOR CONCATENATING 2ND GROUP OF NUMBERS ONTO DISPLAY
function concatSecondNumbers() {
    numbArrayThree.push(this.innerHTML);
    numbStringThree = numbArrayThree.join('');
    operatorDisplay.style.display = "none";

    if (numbStringThree.length <= 12) {
        numbersTwo.innerHTML = numbStringThree;
    }
    else {
        numbStringThree = numbStringThree.substring(0, 12);
        numbersTwo.innerHTML = numbStringThree;
    }
    
}
//---------------------------------------------------------------------------------------------------------------------------------






// CLEAR BUTTON EVENT LISTENER FUNCTION
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);
    });

    for (const buttons of btns) {
        buttons.removeEventListener('click', concatSecondNumbers);
    }

    for (const buttons of btns) {
        buttons.addEventListener('click', concatFirstNumbers);
    }

    
    numbers.innerHTML = '';
    numbersTwo.innerHTML = '';
    operatorDisplay.innerHTML = '';
    numbArrayOne.length = 0;
    numbArrayTwo.length = 0;
    numbArrayThree.length = 0;
    numbers.style.display = "inline";
    numbersTwo.style.display = "inline";
    operatorDisplay.style.dipslay = "inline";
}
//----------------------------------------------------------------------------------------------------------------------












//------------------------------------------------------
// MATH BELOW



calculate.addEventListener('click', operate);


function addNumbers(a,b) {
    console.log(a + b);
}

function subtractNumbers(a,b) {
    console.log(a - b);
}

function multiplyNumbers(a,b) {
    console.log(a * b); 
}

function divideNumbers(a,b) {    
}






function operate(a, b) {
    a = parseInt(numbStringOne);
    b = parseInt(numbStringThree);

    console.log(a);
    console.log(numbStringTwo);
    console.log(b);


    if (numbStringTwo == '-') {   // When == changed to =, it works... kinda.
        subtractNumbers(a, b);
    } else if (numbStringTwo == '+') {
        addNumbers(a, b);
    } else if (numbStringTwo == 'x') {
        multiplyNumbers(a, b);
    } else if (numbStringTwo ==='/') {
        divideNumbers(a, b);
    } //else return null;

}

















//if(str.length > 10) str = str.substring(0,10);


// Type in number and has limit to how many times, so numbers fit in diplay -----FINISHED
// When you click an operator it removes eventListener from all other operators -------FINISHED
// Ability to type in second string of numbers 
// function takes two the two strings of numbers and calculates them based on chosen operator, once = is clicked.
// prints final string onto display






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














/*----------------------------------------------------------------------------------------------



//--BACK UP IN CASE I FUCK UP-----

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
//----------------------------------------------------------------------------------------------------------




// THIS FUNCTION MAKES OPERATORS UNCLICKABLE WHEN THE BODY OF THE CALCULATOR PAGE IS LOADED. 
function onlyNumbers() {
    operators.forEach(item => {
        item.removeEventListener('click', concatOperators);
    });
}
//------------------------------------------------------------------------------------------------------------------



// LOOP AND NAMED FUNCTION FOR CONCATENATING NUMBERS ONTO DISPLAY

for (const buttons of btns) {
    buttons.addEventListener('click', function () {
        numbArray.push(buttons.innerHTML);
        numbString = numbArray.join('');

        if (numbString.length <= 12) {
            numbers.innerHTML = numbString;
        }
        else {
            numbString = numbString.substring(0, 12);
            numbers.innerHTML = numbString;
            console.log(numbString);
        }

    });
}





clear.addEventListener('click', function() {
    numbers.innerHTML = '';
    numbArray.length = 0;
});

    




//------------------------------------------------------
// MATH BELOW




function addNumbers(a,b) {
    return a + b;
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


// Type in number and has limit to how many times, so numbers fit in diplay
// When you click an operator it removes eventListener from all buttons
// Ability to type in second string of numbers 
// function takes two the two strings of numbers and calculates them based on chosen operator, once = is clicked.

// prints final string onto display






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

