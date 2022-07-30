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
