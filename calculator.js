////// Initialise variables:

// create an empty array to store numbers and operations to be performed when someone hits =
var toCalculate = [];
// create a variable to store the total - number
var total = 0;
// create a temp variable - string
var temp = '';

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

    // if it's the x button then add the last entry (temp) and * to the array, clear temp
    if (buttonVal === 'x') {
        toCalculate.push(temp);
        toCalculate.push('*');
        console.log(toCalculate,temp)
        temp = '';
    }

    // if it's the % button then add the last entry (temp) and / to the array, clear temp
    if (buttonVal === '÷') {
        toCalculate.push(temp);
        toCalculate.push('/');
        console.log(toCalculate,temp)
        temp = '';
    }

});




// if it's the AC button then clear everything
    
// if it's the CE button then clear the latest entry (stored in temp) and clear the display
  



// if it's the equals button then add the last entry (temp) to the array
// then perform the calculation stored in the array:
// get the first number from the array
// loop through the array to get the next symbol and number
// perform approprite calculation
// continue until everything in the array has been calculated
// if the answer is negative, tranform the output so it will display nicely
// update the displayed value with the answer, clear the array and temp

// if it's + or - then add the last value (temp)
// and + or - (depending on what is clicked) to the array and clear temp