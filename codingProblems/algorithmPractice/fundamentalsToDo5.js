// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

const sigma = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}
sigma(5);

// *****************************************************************************

// Factorial
// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

const factorial = (num) => {
    let f = 1;
    for(let i = 1; i <= num; i++) {
        f *= i;
    }
    console.log(f);
    return f;
}
factorial(5);

// *****************************************************************************

// Star Art
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.

const drawLeftStars = (num) => {
    let string = '';
    for (let i = 1; i <= 75; i++) {
        if(i <= num) {
            string += '*';
        } else {
            string += ' ';
        }
    }
    console.log(string);
}
drawLeftStars(6);

// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.   

const drawRightStars = (num) => {
    let string = '';
    for (let i = 1; i <= 75; i++) {
        if( i<= (75 - num)) {
            string += ' ';
        } else {
            string += '*';
        }
    }
    console.log(string);
}
drawRightStars(5);

// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.