/*
Given a string, write a function that returns the first non - repeating character. For example, if the input string is leetcode, the function should return l. 
If no such character exists, return #.

function('leetcode') => 'l'
function('lleetccode') => 't'
function('lleetttcccoodde') => 'e'
function('lleetttccoodddee') => '#'
*/

// Brute force approach with nested for loops

function firstNonRepeatingChar(s) {
    if (!s) return '#'
    let firstNonRepeatingChar = null;
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length; j++) {
            if (s[i] !== s[j] && s[i] !== s[i-1]) {
                firstNonRepeatingChar = s[i]
                return firstNonRepeatingChar
            }
            break;
        }
        firstNonRepeatingChar = s[i] !== s[i-1] ? s[i] : '#'
    }
    return firstNonRepeatingChar
}


// Test cases
// console.log(firstNonRepeatingChar('leetcode')); // 'l'
// console.log(firstNonRepeatingChar('lleetccode')); // 't'
// console.log(firstNonRepeatingChar('lleetttcccoodde')); // 'e'
// console.log(firstNonRepeatingChar('lleetttccoodddee')); // '#'
// console.log(firstNonRepeatingChar('aabbccddeeff')); // '#'
// console.log(firstNonRepeatingChar('aabbccddeeffg')); // 'g'
// console.log(firstNonRepeatingChar('')); // '#'
// console.log(firstNonRepeatingChar('a')); // 'a'
// console.log(firstNonRepeatingChar('ab')); // 'a'
// console.log(firstNonRepeatingChar('abc')); // 'a'
// console.log(firstNonRepeatingChar('aabbccddeeffgghh')); // '#'