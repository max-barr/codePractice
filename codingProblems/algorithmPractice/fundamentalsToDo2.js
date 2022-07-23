// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

const countdown = (num) => {
    let newArray = [];
    for (let i = num; i >= 0; i--) {
        newArray.push(i);
    }
    console.log(newArray);
    return newArray;
}
countdown(8);

// *****************************************************************************

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

const printAndReturn = ([num1, num2]) => {
    console.log(num1);
    return num2;
}
console.log(printAndReturn([1,2]));

// *****************************************************************************

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

const firstPlusLength = (arr) => {
    let sum = arr[0] + arr.length;
    console.log(sum);
    return sum;
}
firstPlusLength([1,2,3]);
firstPlusLength(["hello", 2,3]);
firstPlusLength([false, 2,3]);

// *****************************************************************************

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

const greaterThanSecond = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    console.log("Count: " + count);
    return count;
}
console.log(greaterThanSecond([1,3,5,7,9,13]));

// *****************************************************************************

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

const greaterThanSecond2 = (arr) => {
    let newArray = [];
    let count = 0;
    if (arr.length < 2) {
        console.log("Count: " + 0);
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            newArray.push(arr[i]);
            count++;
        }
    }
    console.log("Count: " + count);
    console.log("New Array: " + newArray);
    return newArray;
}
greaterThanSecond2([1]);
greaterThanSecond2([2,3,5,6,2,1,4,4,6]);

// *****************************************************************************

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

const lengthAndValue = (num1, num2) => {
    let newArray = [];
    if (num1 == num2) {
        console.log("Jinx!")
        return;
    }
    for (let i = 0; i < num1; i++) {
        newArray.push(num2);
    }
    console.log(newArray);
    return newArray;
}
lengthAndValue(2,2);
lengthAndValue(6,4);

// *****************************************************************************

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

const fitFirstValue = (arr) => {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}
fitFirstValue([13,2,4]);
fitFirstValue([3,4,5,6]);
fitFirstValue([4,2,3,4]);

// *****************************************************************************

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

const fahrenheitToCelsius = (fDegrees) => {
    let celsius = (fDegrees - 32) * 5/9;
    console.log(celsius);
    return celsius;
}
fahrenheitToCelsius(90);

// *****************************************************************************

// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

const celsiusToFahrenheit = (cDegrees) => {
    let fahrenheit = 9/5 * cDegrees + 32;
    console.log(fahrenheit);
    return fahrenheit;
}
celsiusToFahrenheit(35);