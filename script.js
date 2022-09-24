
const display = document.getElementById('calc-disp');
const btns = document.getElementsByClassName('buttons');
const clear = document.getElementById('C');
const numbers = document.getElementById('numbDisplay');
let numbArray = [];
let numbString;


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