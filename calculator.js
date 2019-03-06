////// Initialise variables:
// create an empty array to store numbers and operations to be performed when someone hits =
let toCalculate = [];
// create a variable to store the total - number
let total = 0;
// create a numberString variable - string
let numberString = '0';

updateDisplay(numberString);




//// calculator functions ////

function updateDisplay(content) {
    document.querySelector('#display').innerHTML = content;
}

function canBeDisplayed(content) {
    if (content[0] === '-') {
        return (content.length <= 11 ? true : false);
    }
    return (content.length <= 10 ? true : false);
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




const buttonActions = {
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
}










////// When a button is clicked, check the value of that button:
document.querySelector('#buttons').addEventListener('click', function (event) {

    buttonId = event.target.id;
    console.log(buttonId);

    const functionToCall = buttonActions[buttonId].action;
    const value = buttonActions[buttonId].value;
    functionToCall(value);
});



/*



    // if it's an operator then add the last value (numberString)
    // and the operator clicked to the array and clear numberString
    if (buttonVal === '+' || buttonVal === '-' || buttonVal === 'x' || buttonVal === '÷') {

        // check if a number has been added
        if (numberString === '0') {
            //check if there's an old total to work from
            if (total !== 0) {
                toCalculate.push(total);
                toCalculate.push(buttonVal);
                total = 0;
                return;
            } else if (toCalculate.length === 0) {
                return;
            } else {
                //check whether the last thing added was another operator
                let lastThingAdded = toCalculate[toCalculate.length - 1];
                //console.log('The last thing added was', lastThingAdded);
                if (isNaN(lastThingAdded)) {
                    // if it was, replace with the new operator
                    toCalculate[toCalculate.length - 1] = buttonVal;
                }
                return;
            }
        }

        toCalculate.push(numberString);
        toCalculate.push(buttonVal);
        numberString = '0';
    }

    // if it's the equals button then add the last entry (numberString) to the array
    if (buttonVal === '=') {
        toCalculate.push(numberString);
        // then perform the calculation stored in the array:
        console.log('Calculating:', toCalculate);

        // get the first number from the array
        total = Number(toCalculate[0]);

        // loop through the array to get the next symbol and number
        for (let i = 1; i < toCalculate.length; i += 2) {
            let operator = toCalculate[i];
            let nextNumber = Number(toCalculate[i + 1]);

            // perform approprite calculation
            if (operator === '+') {
                total += nextNumber;
            } else if (operator === '-') {
                total -= nextNumber;
            } else if (operator === 'x') {
                total *= nextNumber;
            } else if (operator === '÷') {
                total /= nextNumber;
            }
            // continue until everything in the array has been calculated
        }

        // round total for display
        total = round(total, 4);

        //  if answer is too large to display change to exponential
        if (!canBeDisplayed(total.toString())) {
            total = total.toExponential(4);
        }

        // update the displayed value with the answer,
        updateDisplay(total);

        // clear the array and numberString
        toCalculate = [];
        numberString = '0';
    }

    // if it's the +/- button then toggle making the number negative
    if (buttonVal === '+/-') {
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

    // if it's the CE button then clear the latest entry (stored in numberString) and clear the display
    if (buttonVal === 'CE') {
        numberString = '0';
        total = 0;
        updateDisplay(numberString);
    }

    // if it's the AC button then clear everything
    if (buttonVal === 'AC') {
        total = 0;
        numberString = '0';
        toCalculate = [];
        updateDisplay(numberString);
    }

});

// function to round results
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}





*/
