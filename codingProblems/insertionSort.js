const insertionSort = (arr) => {
    let len = arr.length;
    // Start at i=1 because we assume index 0 is in the correct position.
    for (let i = 1; i < len; i++) {
        // Choosing first element in unsorted subarray
        let current = arr[i];
        // The last element of the sorted subarray
        let j = i-1;
        while ((j >= 0) && (arr[j] > current)) {
            // Move j to the right by setting j+1 to j
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    console.log(arr);
    return arr;
}

insertionSort([5,2,4,6,1,3]);