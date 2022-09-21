
const display = document.getElementById('calc-disp');
const btns = document.getElementsByClassName('buttons');
const clear = document.getElementById('C');
const numbers = document.getElementById('numbDisplay');
let numbArray = [];
let numbString;


for (const buttons of btns) {
    buttons.addEventListener('click', function() {
        numbArray.push(buttons.innerHTML);
        numbString = numbArray.join('');
        numbers.innerHTML = numbString;
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



