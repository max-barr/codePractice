// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

const threesFives = () => {
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            continue;
        }
        if (i % 5 == 0 || i % 3 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}
threesFives();

// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).

const betterThreesFives = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            continue;
        }
        if (i % 5 == 0 || i % 3 == 0) {
            sum += i;
        }
    }
    console.log(sum);
}
betterThreesFives(100, 4000000);
betterThreesFives(4,12);

// *****************************************************************************

// Generate Coin Change
// Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Example output, given (94):

// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

const generateCoinChange = (cents) => {
    let quarters = Math.floor(cents/25);
    cents -= quarters * 25;
    console.log("cents minus quarters: " + cents);
    let dimes = Math.floor(cents/10);
    cents -= dimes * 10;
    console.log("cents minus dimes: " + cents);
    let nickels = Math.floor(cents/5);
    cents -= nickels * 5;
    console.log("cents minus nickels: " + cents);
    let pennies = cents;
    console.log("quarters " + quarters);
    console.log("dimes " + dimes);
    console.log("nickels " + nickels);
    console.log("pennies " + pennies);
}
generateCoinChange(94);

// *****************************************************************************

// Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
// Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

const messyMath = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num/i == 3) {
            console.log(-1);
            return -1;
        } else if (i % 7 == 0) {
            count += i*2;
        } else if (i % 3 == 0) {
            continue;
        } else {
            count += i;
        }
    }
    console.log(count);
    return count;
}
messyMath(4);
messyMath(3);
messyMath(8);
messyMath(15);

// *****************************************************************************

// Twelve-Bar Blues
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

const twelveBarBlues = () => {
    for(let i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}
twelveBarBlues();

// *****************************************************************************

// Fibonacci
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

const fibonacci = (ind) => {
    let a = 0, b = 1, temp;

    while (ind >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        ind--;
    }

    console.log(b);
    return b;
}
fibonacci(7);