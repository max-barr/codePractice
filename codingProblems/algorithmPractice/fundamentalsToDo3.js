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

