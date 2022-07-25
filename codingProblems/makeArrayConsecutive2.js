// arrange the numbers in an array from smallest to largest so that each will be bigger than the previous one exactly by 1. You may need some additional numbers to be able to accomplish that. Figure out the minimum number of additional numbers needed and return that total.

// Example

// For numbers = [6, 2, 3, 8], the output should be
// solution(numbers) = 3.


function solution(nums) {
    // Use the sort method and a compare function to sort values two at a time.
    nums.sort(function(a,b){return a-b});
    // With the array sorted, min is index 0 and max is the last number in the array.
    let min = nums[0];
    let max = nums[nums.length -1];
    // set a count variable to count the number of values needed.
    let count = 0;
    for(let i = min; i < max; i++) {
        // If the index of i is not found, increment the count
        if(nums.indexOf(i) == -1) {
            count++;
        }
    }
    console.log(count);
    return count;
}
solution([1,3,6,9]);