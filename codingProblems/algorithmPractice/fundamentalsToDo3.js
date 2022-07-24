// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

const biggieSize = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = "big";
        }
    }
    console.log(arr);
    return arr;
}
biggieSize([-1, -3, 4,5,-23,3]);

// *****************************************************************************

// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

const printLowReturnHigh = (arr) => {
    // Use spread operator to quickly copy array
    const min = (Math.min(...arr));
    const max = (Math.max(...arr));
    console.log(min);
    console.log(max);
    return max;
}
printLowReturnHigh([34,4,3,28,2,1,-2]);

// *****************************************************************************

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = (arr) => {
    // print the second to last value
    console.log(arr[arr.length - 2]);
    // loop and check if values are odd. If yes, return the first one.
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 != 0) {
            console.log(arr[i]);
            return arr[i];
        }
    }
}
printOneReturnAnother([2,3,4,5,6,7,8]);

// *****************************************************************************

// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const doubleVision = (arr) => {
    let dubArray = [];
    for(let i = 0; i < arr.length; i++) {
        dubArray.push(arr[i] * 2);
    }
    console.log(dubArray);
    return dubArray;
}
doubleVision([24,6,2,30,50]);

// *****************************************************************************

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
    let positiveCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
    }
    arr[arr.length - 1] = positiveCount;
    console.log(arr);
    return arr;
}
countPositives([-1,1,2,3,4,5,6,1,3]);

// *****************************************************************************

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

const evensOdds = (arr) => {
    let oddCount = 0;
    let evenCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            oddCount++;
            if(oddCount == 3) {
                console.log("That's odd!")
                oddCount = 0
            }
        } else {
            oddCount = 0;
        }
        if(arr[i] % 2 == 0) {
            evenCount++;
            if(evenCount == 3) {
                console.log("Even more so!");
                evenCount = 0;
            }
        } else {
            evenCount = 0;
        }
    }
}
evensOdds([2,1,3,2,2,2,1,3,5,2,4,6,1,3,5]);

// *****************************************************************************

