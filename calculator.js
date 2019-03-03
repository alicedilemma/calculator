////// Initialise variables:

// create an empty array to store numbers and operations to be performed when someone hits =
let toCalculate = [];
// create a variable to store the total - number
let total = 0;
// create a temp variable - string
let temp = '';

////// When a button is clicked, check the value of that button:
document.querySelector('#buttons').addEventListener('click', function(event) {
    console.log(event.target.innerHTML);
    buttonVal = event.target.innerHTML;

    // if the button is a number or . then add it to the temp string
    if ( !isNaN(buttonVal) || buttonVal === '.') {
        console.log('number or decimal');
        temp += buttonVal;
        console.log(temp);
        // display the temp string on the calculator
        document.querySelector('#display').innerHTML = temp;
    }

    // if it's an operator then add the last value (temp)
    // and the operator clicked to the array and clear temp
    if (buttonVal === '+' || buttonVal === '-' || buttonVal === 'x' || buttonVal === '÷') {
        toCalculate.push(temp);
        toCalculate.push(buttonVal);
        console.log(toCalculate,temp)
        temp = '';
    }

    // if it's the equals button then add the last entry (temp) to the array
    if (buttonVal === '=') {
        toCalculate.push(temp);
        // then perform the calculation stored in the array:
        console.log('Calculating:',toCalculate);
        
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

        
        // update the displayed value with the answer, clear the array and temp
        document.querySelector('#display').innerHTML = total;
        toCalculate = [];
        temp = '';
    }

    // if it's the CE button then clear the latest entry (stored in temp) and clear the display
    if (buttonVal === 'CE') {
        temp = '';
        document.querySelector('#display').innerHTML = '';
    }

    // if it's the AC button then clear everything
    if (buttonVal === 'AC') {
        temp = '';
        toCalculate = [];
        document.querySelector('#display').innerHTML = '';
    }

});





    

  





