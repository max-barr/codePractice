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

// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

const incrementOdds = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            arr[i]++;
        }
    }
    console.log(arr);
    return arr;
}
incrementOdds([1,2,3,4,5,6,7]);

// *****************************************************************************

// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

const previousLengths = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let stringLength = arr[i].length;
        arr[i] = stringLength;
    }
    console.log(arr);
    return arr;
}
previousLengths(["Hello", "World", "My", "Name", "Is", "String"]);

// *****************************************************************************

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

const addSeven = (arr) => {
    let newArr = [];
    for(let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    console.log(newArr);
    return newArr;
}
addSeven([3,1,5,7,21]);

// *****************************************************************************

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

const reverseArray = (arr) => {
    arr.reverse();
    console.log(arr);
    return arr;    
}
reverseArray([3,1,6,4,2]);

// *****************************************************************************

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

const negative = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            newArr.push(-Math.abs(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}
negative([1,-3,5,-7,7,8,0]);

// *****************************************************************************

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

const alwaysHungry = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy");
        }
    }
    if(arr.includes("food") == false) {
        console.log("I'm hungry");
    }
}
alwaysHungry(["food", 2,3,"food",6,7,8]);
alwaysHungry([1,2,3,4]);

// *****************************************************************************

// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

const scale = (arr, num) => {
    for(let i =0; i < arr.length; i++) {
        arr[i] *= num;
    }
    console.log(arr);
    return arr;
}
scale([2,4,6,8], 4);




