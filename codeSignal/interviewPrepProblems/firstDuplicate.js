// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3. 
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// O(n2) complexity
function firstDuplicate(a) {
    let minimumSecondIndex = a.length;
    // first pointer to check numbers
    for (let i = 0; i < a.length; i++) {
        // second pointer to compare numbers
        for (let j = i+1; j < a.length; j++) {
            if (a[i] == a[j]) {
                // Use Math.min method to compare the minimumSecondIndex to j, effectively setting it to j.
                minimumSecondIndex = Math.min(minimumSecondIndex, j);
            }
        }
    }
    if (minimumSecondIndex == a.length) {
        return -1;
    } else {
        return a[minimumSecondIndex];
    }
}

// O(n) complexity
solution = (a) => {
    // Create a new set to store each value in the array
    let seen = new Set();
    // Loop through the array
    for (let i = 0; i < a.length; i++) {
        // If the set already has a[i], return it and it's the first duplicate
        if (seen.has(a[i])) {
            return a[i];
        } else {
            // Otherwise, add it to the set
            seen.add(a[i]);
        }
    }
    // If there are no duplicates, return -1
    return -1;
}