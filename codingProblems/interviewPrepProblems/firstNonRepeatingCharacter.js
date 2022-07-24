// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// solution(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// solution(s) = '_'.

// There are no characters in this string that do not repeat.

// Complexity O(n). Linear

const solution = (s) => {
    // Create a new map to store key value pairs of characters and number of occurences 
    const charCount = new Map();
    // Loop through string to add keys and vals to map
    for (let i = 0; i < s.length; i++) {
        // c is the character at index of i
        let c = s.charAt(i);
        // if that character exists, increase the count (value) by 1
        if (charCount.has(c)) {
            charCount.set(c, charCount.get(c) + 1);
        } else {
            // else set the count at 1
            charCount.set(c, 1);
        }
    }
    
    // Loop through the string again to determine first non repeater
    for (let i = 0; i < s.length; i++) {
        // c is the character at index of i
        let c = s.charAt(i);
        // The first key that has a value of only 1 is the first non repeater and will be returned
        if (charCount.get(c) == 1) {
            return c;
        }
    }
    return '_'
}