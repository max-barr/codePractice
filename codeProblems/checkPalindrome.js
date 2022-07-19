// Given the string, check if it is a palindrome.
// For inputString = "aabaa", the output should be solution(inputString) = true;
// For inputString = "abac", the output should be solution(inputString) = false;
// For inputString = "a", the output should be solution(inputString) = true.

solution = (str) => {
    // splitting the string into an array of characters, reversing all the characters in the array and then joining them back into a string to check if the string is the same from front to back.
    const reversed = str.split("").reverse().join("");
    if (reversed === str) {
        return true;
    }
    return false;
}