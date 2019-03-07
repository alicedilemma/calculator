//// initialise variables ////

let toCalculate = []; // to store numbers and operators to calculate
let total = 0; // result of calculation
let numberString = '0'; // string to store numbers as they're created

updateDisplay(numberString);



//// general calculator functions ////

function updateDisplay(content) {
    document.querySelector('#display').innerHTML = content;
}

function canBeDisplayed(content) {
    if (content[0] === '-') {
        return (content.length <= 8 ? true : false);
    }
    return (content.length <= 7 ? true : false);
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}



//// button functions ////

function addNumber(number) {
    if (numberString === '0') {
        numberString = number;
    } else {
        numberString += number;
    }
    // don't let numbers get bigger than the display
    if (!canBeDisplayed(numberString)) {
        numberString = numberString.slice(0, numberString.length - 1);
    }
    updateDisplay(numberString);
    // discard old total
    total = 0;
}

function addDecimal(decimal) {
    // only allow one decimal point per number
    if (numberString.includes(decimal)) {
        return;
    }
    // add a zero if there's no number before the decimal point
    if (numberString === '-') {
        numberString += '0';
    }
    numberString += decimal;
    // don't let numbers get bigger than the display
    if (!canBeDisplayed(numberString)) {
        numberString = numberString.slice(0, numberString.length - 1);
    }
    updateDisplay(numberString);
    // discard old total
    total = 0;
}

function addOperator(operator) {
    // check if a new number has been added
    if (numberString === '0') {
        // check if there's a previous total to work from
        if (total !== 0) {
            toCalculate.push(total);
            toCalculate.push(operator);
            total = 0;
            return;
            // check if there's nothing to calculate
        } else if (toCalculate.length === 0) {
            return;
            //check if the last thing added was another operator
        } else {
            const lastThingAdded = toCalculate[toCalculate.length - 1];
            //console.log('The last thing added was ', lastThingAdded);
            if (isNaN(lastThingAdded)) {
                // if it was an operator, replace with the new operator
                toCalculate[toCalculate.length - 1] = operator;
            }
            return;
        }
    }
    toCalculate.push(numberString);
    toCalculate.push(operator);
    numberString = '0';
}

function clearAll() {
    numberString = '0';
    total = 0;
    toCalculate = [];
    updateDisplay(numberString);
}

function clearEntry() {
    numberString = '0';
    total = 0;
    updateDisplay(numberString);
}

function equals() {
    toCalculate.push(numberString);
    console.log('Calculating:', toCalculate.join(' '));
    total = eval(toCalculate.join(''));
    // round total for display
    total = round(total, 4);
    // if answer is too large to display change to an exponential
    if (!canBeDisplayed(total.toString())) {
        total = total.toExponential(1);
    }
    updateDisplay(total);
    toCalculate = [];
    numberString = '0';
}

function toggleNegative() {
    if (numberString === '0') {
        numberString = '-';
    } else if (numberString === '-') {
        numberString = '0';
    } else if (numberString[0] === '-') {
        numberString = numberString.slice(1, numberString.length);
    } else {
        numberString = '-' + numberString;
    }
    updateDisplay(numberString);
}

function turnOff() {
    clearAll();
    updateDisplay('');
}



//// button object ////

const buttonActions = {
    // numbers
    zero: { action: addNumber, value: '0' },
    one: { action: addNumber, value: '1' },
    two: { action: addNumber, value: '2' },
    three: { action: addNumber, value: '3' },
    four: { action: addNumber, value: '4' },
    five: { action: addNumber, value: '5' },
    six: { action: addNumber, value: '6' },
    seven: { action: addNumber, value: '7' },
    eight: { action: addNumber, value: '8' },
    nine: { action: addNumber, value: '9' },
    decimal: { action: addDecimal, value: '.' },
    // operators
    add: { action: addOperator, value: '+' },
    subtract: { action: addOperator, value: '-' },
    multiply: { action: addOperator, value: '*' },
    divide: { action: addOperator, value: '/' },
    // equals
    equals: { action: equals },
    clear: { action: clearAll },
    'clear-entry': { action: clearEntry },
    negative: { action: toggleNegative },
    off: { action: turnOff }
}



//// when a button is clicked ////

document.querySelector('#buttons').addEventListener('click', function (event) {
    buttonId = event.target.id;
    //console.log(buttonId);

    const functionToCall = buttonActions[buttonId].action;
    const value = buttonActions[buttonId].value;
    functionToCall(value);
});
