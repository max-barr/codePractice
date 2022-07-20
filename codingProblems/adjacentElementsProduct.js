// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21. 7 and 3 produce the largest product.

solution = (inputArray) => {
    // Establish baseline of product in array using first two indexes
    let product = inputArray[0] * inputArray[1];

    // Loop through array and multiply elements. If product is greater than current product, it becomes new largest product.
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i+1] >= product) {
            product = inputArray[i] * inputArray[i+1];
        }
    }
    console.log(product);
    return product;
}

solution([1,-4,21,6,9,12]);