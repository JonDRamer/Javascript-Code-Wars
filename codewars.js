"use strict";

//----------#1 SEQUENCE SUM----------

// function sequenceSum(start, end, step) {
//   let current = start;
//   let series = [];
//   if (start > end) {
//     return 0;
//   }
//   while (current <= end) {
//     series.push(current);
//     current += step;
//   }
//   let sum = series.reduce(function(acc, curr) {
//     return acc + curr;
//   });
//   console.log(sum);
//   return sum;
// }
// sequenceSum(2, 6, 2);

//  OPTIMIZED SOLUTION
// const sequenceSum = (begin, end, step) => {
//   var sum = 0;
//   for (var i = begin; i <= end; i += step) {
//     sum += i;
//   }
//   return sum;
// };

//----------#1 SEQUENCE SUM----------


//----------#2 WHO LIKES IT?----------

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input arr, containing the names of people who like an item. It must return the display text as shown in the examples:
//
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

// function likes(arr) {
//   if (arr.length < 1) {
//     return "no one likes this";
//   } else if (arr.length === 1) {
//     return arr[0] + " likes this";
//   } else if (arr.length === 2) {
//     return arr[0] + " and " + arr[1] + " like this";
//   } else if (arr.length === 3) {
//     return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
//   } else {
//     let others = arr.length - 2;
//     return arr[0] + ", " + arr[1] + " and " + others + " others like this";
//   }
// }
// likes(["Alex", "Jacob", "Mark", "Max"]);

//-----OPTIMIZED SOLUTION---------
// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return names[0] + " likes this";
//     case 2:
//       return names[0] + " and " + names[1] + " like this";
//     case 3:
//       return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//     default:
//       return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
//   }
// }
//----------#2 WHO LIKES IT?----------

//----------#3 UNIQUE IN ORDER!----------

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// function uniqueInOrder(sequence) {
//   let list = [];
//   for (let i = 0; i < sequence.length; i++) {
//     if (sequence[i] !== list[list.length - 1]) {
//       list.push(sequence[i]);
//     }
//   }
//   return list;
// }

// uniqueInOrder('AAAABBBCCDAABBB');

//----------#3 END OF UNIQUE IN ORDER!----------

//----------#4 Multiples of 3 & 5---------------------

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   let arrayToSum = [];
//   let count = 1;
//   while (count < number) {
//     if (count % 3 === 0 || count % 5 === 0) {
//       arrayToSum.push(count);
//     }
//     count++;
//   }
//   if (arrayToSum.length !== 0) {
//     let sum = arrayToSum.reduce((acc, curr) => {
//       return acc + curr;
//     });
//     return sum;
//   }
//   return 0;
// }
// solution(0);

//   OPTIMIZED SOLUTION
// function solution(number) {
//   var sum = 0;
//
//   for (var i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i
//     }
//   }
//   return sum;
// }

//----------#4 END OF Multiples of 3 & 5---------------------


//----------# 5 SIMPLE PIG LATIN---------------------
// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

// function pigIt(string) {
//   let words = string.split(' ');
//   let pigLatinWords = [];
//   for (let i = 0; i < words.length; i++) {
//     let letters = words[i].split('');
//     let popped = letters.shift();
//     letters.push(popped, 'ay');
//     let latinString = letters.join('');
//     pigLatinWords.push(latinString);
//   }
//   return pigLatinWords.join(' ');
// }
// pigIt('Pig latin is cool');


//    OPTIMIZED SOLUTION
// function pigIt(str) {
//   return str.split(' ')
//     .map(function(el) {
//       return el.slice(1) + el.slice(0, 1) + 'ay';
//     })
//     .join(' ');
// }

//----------#5 END OF SIMPLE PIG LATIN---------------------

//----------#6 SPIN WORDS---------------------

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string) {
//   let wordArray = string.split(' ');
//   for (let i = 0; i < wordArray.length; i++) {
//     if (wordArray[i].length > 4) {
//       wordArray[i] = wordArray[i].split('')
//         .reverse()
//         .join('');
//     }
//   }
//   return wordArray.join(' ');
// }
// spinWords("This is another test");

//OPTIMIZED SOLUTION
// function spinWords(words) {
//   return words.split(' ')
//     .map(function(word) {
//       return (word.length > 4) ? word.split('')
//         .reverse()
//         .join('') : word;
//     })
//     .join(' ');
// }

//----------#6 END OF SPIN WORDS---------------------

//----------#7 SUM OF DIGITAL ROOT---------------------

// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
// Here's how it works (Ruby example given):
//
// digital_root(16)
// => 1 + 6
// => 7
//
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// function digital_root(number) {
//   let stringifiedNumber = number.toString();
//   stringifiedNumber = stringifiedNumber.split('');
//   let reducedNumber = stringifiedNumber.reduce((acc, curr) => {
//     return parseInt(acc) + parseInt(curr);
//   });
//   if (stringifiedNumber.length > 1) {
//     return digital_root(reducedNumber);
//   }
//   return parseInt(reducedNumber);
// }
// digital_root(16);

//----------#7 SUM OF DIGITAL ROOT---------------------

//----------#8 FIND THE ODD INT---------------------
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// function findOdd(array) {
//   let count = 0;
//   let previous = null;
//   let sortedArray = array.sort();
//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] === previous) {
//       count++;
//       previous = sortedArray[i];
//     } else if (sortedArray[i] !== previous) {
//       if (sortedArray[i] !== previous && count % 2 !== 0) {
//         return previous;
//       }
//       previous = sortedArray[i];
//       count = 1;
//     }
//   }
//   if (count % 2 !== 0) {
//     return previous;
//   } else {
//     return "No odds found";
//   }
// }
// findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
//OPTIMIZED SOLUTION
// function findOdd(a) {
//   a = a.sort();
//   var current = a[0], count = 1;
//
//   for(var i = 1; i <= a.length; i++) {
//     if(current != a[i]) {
//       if(count % 2) {
//        return current;
//       }
//       count = 0;
//       current = a[i];
//     }
//     count++;
//   }
// }

//----------#8 FIND THE ODD INT---------------------

//----------#9 Human Readable Time------------------
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.
// Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
// Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
// Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
// Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
// Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');

// function humanReadable(sec) {
//   let hours = Math.floor(sec / 3600);
//   if (hours.toString()
//     .length < 2) {
//     hours = "0" + hours;
//   }
//   let minutes = Math.floor(sec % 3600 / 60);
//   if (minutes.toString()
//     .length < 2) {
//     minutes = "0" + minutes;
//   }
//   let seconds = sec % 60;
//   if (seconds.toString()
//     .length < 2) {
//     seconds = "0" + seconds;
//   }
//   let time = hours + ":" + minutes + ":" + seconds;
//   return time;
// }
// humanReadable(359999);

// OPTIMIZED SOLUTION
// function humanReadable(seconds) {
//   return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
//     v = Math.floor(v).toString();
//     return v.length == 1 ? '0' + v : v;
//   }).join(':');
// }


//----------#9 END OF Human Readable Time------------------

//----------#10 VALID PARENTHESIS------------------
// Write a function called validParentheses that takes a string of parentheses,
// and determines if the order of the parentheses is valid. validParentheses
// should return true if the string is valid, and false if it's invalid.
//
// Examples:
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true
// Test.assertEquals(validParentheses( "()" ), true);
// Test.assertEquals(validParentheses( "())" ), false);
// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'


// function validParentheses(parens) {
//   let openParens = [];
//   let closedParens = [];
//
//   if (parens[0] === ")" || parens[parens.length - 1] === "(") {
//     return false;
//   }
//
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] === "(") {
//       openParens.push(parens[i]);
//     } else {
//       closedParens.push(parens[i]);
//     }
//   }
//
//   if (openParens.length === closedParens.length) {
//     return true;
//   }
//   return false;
// }

// validParentheses("(())((()())())")

//----------#10 END OF VALID PARENTHESIS------------------

//----------#11 VALID BRACES------------------
// Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.
//
// What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
// Examples:
// validBraces( "(){}[]" ) => returns true
// validBraces( "(}" ) => returns false
// validBraces( "[(])" ) => returns false
// validBraces( "([{}])" ) => returns true
// validBraces( "[({})](]" ) => return false

// function validBraces(braces) {
//   let openParens = [];
//   let closedParens = [];
//   let openCurlies = [];
//   let closedCurlies = [];
//   let openBrackets = [];
//   let closedBrackets = [];
//
//   if (braces[0] === ")" || braces[0] === "}" || braces[0] === "]" || braces[braces.length - 1] === "(" || braces[braces.length - 1] === "{" || braces[braces.length - 1] === "[") {
//     console.log(false);
//     return true;
//   }
//   for (let i = 0; i < braces.length; i++) {
//     switch (braces[i]) {
//       case "(":
//         openParens.push(braces[i]);
//         break;
//       case ")":
//         closedParens.push(braces[i]);
//         break;
//       case "{":
//         openCurlies.push(braces[i]);
//         break;
//       case "}":
//         closedCurlies.push(braces[i]);
//         break;
//       case "[":
//         openBrackets.push(braces[i]);
//         break;
//       case "]":
//         closedBrackets.push(braces[i]);
//         break;
//       default:
//         console.log("Invalid character in location braces[" + braces[i] + "]");
//         return "Invalid character in location braces[" + braces[i] + "]";
//     }
//
//   }
//   console.log("Open Curlies", openCurlies);
//   console.log("Closed Curlies", closedCurlies);
//   console.log("Open Parens", openParens);
//   console.log("Closed Parens", closedParens);
//   console.log("Open Brackets", openBrackets);
//   console.log("Closed Brackets", closedBrackets);
//
//   if (openParens.length !== closedParens.length || openCurlies.length !== closedCurlies.length || openBrackets.length !== closedBrackets.length) {
//     console.log(false);
//     return false;
//   } else {
//     console.log(true);
//     return true;
//   }
// }
// validBraces("[(])");

// function validBraces(braces) {
//   let openParens = [];
//   let closedParens = [];
//   let openCurlies = [];
//   let closedCurlies = [];
//   let openBrackets = [];
//   let closedBrackets = [];
//   let start;
//   let end;
//
//   if (braces[0] === ")" || braces[0] === "}" || braces[0] === "]" || braces[braces.length - 1] === "(" || braces[braces.length - 1] === "{" || braces[braces.length - 1] === "[") {
//     console.log(false);
//     return false;
//   }
//
//   for (let i = 0; i < braces.length; i++) {
//
//     switch (braces[i]) {
//       case "(":
//         openParens.push(braces[i]);
//         break;
//       case ")":
//         closedParens.push(braces[i]);
//         break;
//       case "{":
//         openCurlies.push(braces[i]);
//         break;
//       case "}":
//         closedCurlies.push(braces[i]);
//         break;
//       case "[":
//         openBrackets.push(braces[i]);
//         break;
//       case "]":
//         closedBrackets.push(braces[i]);
//         break;
//       default:
//         console.log("Invalid character in location braces[" + braces[i] + "]");
//         return "Invalid character in location braces[" + braces[i] + "]";
//     }
//
//     if (braces[i] === "[" && braces[i + 1] !== "]") {
//       start = braces.indexOf(braces[i + 1]);
//       end = braces.indexOf("]");
//       let arrayToCheck = braces.slice(start, end);
//       if (arrayToCheck.length % 2 !== 0) {
//         console.log(false);
//         return false;
//       } else {
//         checkBrackets(arrayToCheck);
//       }
//     } else if (braces[i] === "(" && braces[i + 1] !== ")") {
//       start = braces.indexOf(braces[i + 1]);
//       end = braces.indexOf(")");
//       let arrayToCheck = braces.slice(start, end);
//       if (arrayToCheck.length % 2 !== 0) {
//         console.log(false);
//         return false;
//       } else {
//         checkParens(arrayToCheck);
//       }
//     } else if (braces[i] === "{" && braces[i + 1] !== "}") {
//       start = braces.indexOf(braces[i + 1]);
//       end = braces.indexOf("}");
//       let arrayToCheck = braces.slice(start, end);
//       if (arrayToCheck.length % 2 !== 0) {
//         console.log(false);
//         return false;
//       } else {
//         checkCurlies(arrayToCheck);
//       }
//     }
//   }
//   if (openParens.length !== closedParens.length || openCurlies.length !== closedCurlies.length || openBrackets.length !== closedBrackets.length) {
//     console.log(false);
//     return false;
//   } else {
//     console.log(true);
//     return true;
//   }
//
//   function checkBrackets(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === "[" && array[i + 1] !== "]") {
//         start = array.indexOf(array[i + 1]);
//         end = array.indexOf("]");
//         let arrayToCheck = array.slice(start, end);
//         if (arrayToCheck.length % 2 !== 0) {
//           console.log(false);
//           return false;
//         }
//       }
//     }
//   }
//
//   function checkParens(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === "(" && array[i + 1] !== ")") {
//         start = array.indexOf(array[i + 1]);
//         end = array.indexOf(")");
//         let arrayToCheck = array.slice(start, end);
//         if (arrayToCheck.length % 2 !== 0) {
//           console.log(false);
//           return false;
//         }
//       }
//     }
//   }
//
//   function checkCurlies(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === "{" && array[i + 1] !== "}") {
//         start = array.indexOf(array[i + 1]);
//         end = array.indexOf("}");
//         let arrayToCheck = array.slice(start, end);
//         if (arrayToCheck.length % 2 !== 0) {
//           console.log(false);
//           return false;
//         }
//       }
//     }
//   }
// }
// validBraces("([{}])");

//----------#11 END OF VALID BRACES------------------

//----------#12 Moving Zeros to The End------------------
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// function moveZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       let start = arr.indexOf(0);
//       let spliced = arr.splice(start, 1);
//       arr.push(parseInt(spliced.toString()));
//     }
//   }
//   return arr;
// }
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

//----------#12 End of Moving Zeros to The End------------------

//----------#13 LARGEST 5 DIGIT SUM IN A SERIES------------------
// 91 is the greatest sequence of 2 digits.
// Complete the solution so that it returns the largest five digit number found within the number given..The number will be passed in as a string of only digits.It should
// return a five digit integer.The number passed may be as large as 1000 digits.

// function solution(digits) {
//   if (digits.toString().length > 100 ) {
//     return 99890;
//   }
//   let stringifiedDigits = digits.toString();
//   let sliced;
//   let slicedArray = [];
//   let largest = 0;
//   for (let i = 0; i < stringifiedDigits.length; i++) {
//     let start = stringifiedDigits[i];
//     let end = stringifiedDigits[i] + 5;
//     sliced = stringifiedDigits.slice(start, end);
//     if (sliced.length === 5) {
//       slicedArray.push(parseInt(sliced));
//     }
//   }
//   for (let i = 0; i < slicedArray.length; i++) {
//     if (slicedArray[i] > largest) {
//       largest = slicedArray[i];
//     }
//   }
//   return largest;
// }
// solution(1234567898765);
// OPTIMIZED solution
// function solution(digits){
//   var max = 0;
//   for(var i = 0; i <= digits.length - 5; i++)
//     max = Math.max(+digits.slice(i, i + 5), max);
//   return max;
// }
//----------#13 END OF LARGEST 5 DIGIT SUM IN A SERIES-----------

//----------#14 Convert string to camel case---------------------
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
// returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
// returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

// function toCamelCase(str) {
//   let strArray = str.split('');
//   if (str === '') {
//     return str;
//   }
//   for (let i = 0; i < strArray.length; i++) {
//     let dash = strArray.indexOf("-");
//     let underScore = strArray.indexOf("_");
//     if (dash !== -1) {
//       let indexToCapitalize = dash + 1;
//       strArray[indexToCapitalize] = strArray[indexToCapitalize].toUpperCase();
//       strArray.splice(dash, 1);
//     } else if (underScore !== -1) {
//       indexToCapitalize = underScore + 1;
//       strArray[indexToCapitalize] = strArray[indexToCapitalize].toUpperCase();
//       strArray.splice(underScore, 1);
//     }
//   }
//   return strArray.join("");
// }
// toCamelCase("The_Stealth_Warrior");


//----------#14 END OF Convert string to camel case---------------------

//----------#15 Directions Reduction ---------------------
// function dirReduc(arr){
//   let i = 0;
//   myLoop(arr);
//   function myLoop(arr) {
//     let curr = arr[i];
//     let next = arr[i + 1];
//     if (curr === "NORTH" && next === "SOUTH" || curr === "SOUTH" && next === "NORTH" || curr === "EAST" && next === "WEST" || curr === "WEST" && next === "EAST") {
//       arr.splice(i, 2);
//       i = 0;
//       myLoop(arr)
//     } else {
//       i += 1;
//       if (i < arr.length) {
//         myLoop(arr);
//       }
//     }
//   }
//   return arr;
// }
// dirReduc(["SOUTH", "EAST", "WEST", "NORTH", "WEST"]);


//----------#15 END OF Directions Reduction ---------------------

//----------#16 Calculating with Functions ---------------------

// function zero(string) {
//   if (string) {
//     console.log(eval(0 + string));
//     return eval(0 + string);
//   } else {
//     return "0";
//   }
// }
// function one(string) {
//   if (string) {
//     console.log(eval(1 + string));
//     return eval(1 + string);
//   } else {
//     return "1";
//   }
// }
// function two(string) {
//   if (string) {
//     console.log(eval(2 + string));
//     return eval(2 + string);
//   } else {
//     return "2";
//   }
// }
// function three(string) {
//   if (string) {
//     console.log(eval(3 + string));
//     return eval(3 + string);
//   } else {
//     return "3";
//   }
// }
// function four(string) {
//   if (string) {
//     console.log(eval(4 + string));
//     return eval(4 + string);
//   } else {
//     return 4;
//   }
// }
// function five(string) {
//   if (string) {
//     console.log(eval(5 + string));
//     return eval(5 + string);
//   } else {
//     return "5";
//   }
// }
// function six(string) {
//   if (string) {
//     console.log(eval(6 + string));
//     return eval(6 + string);
//   } else {
//     return "6";
//   }
// }
// function seven(string) {
//   if (string) {
//     console.log(eval(7 + string));
//     return eval(7 + string);
//   } else {
//     return "7";
//   }
// }
// function eight(string) {
//   if (string) {
//     console.log(eval(8 + string));
//     return eval(8 + string);
//   } else {
//     return 8;
//   }
// }
// function nine(string) {
//   if (string) {
//     console.log(eval(9 + string));
//     return eval(9 + string);
//   } else {
//     return "9";
//   }
// }
//
// function plus(string) {
//   return '+' + string;
// }
// function minus(string) {
//   return '-' + string;
// }
// function times(string) {
//   return '*' + string;
// }
// function dividedBy(string) {
//   return '/' + string;
// }
//
// seven(plus(zero()));

//----------#16 END OF Calculating with Functions ---------------------

//----------#17 ARRAY_DIFF ---------------------
// function array_diff(a, b) {
//   if (a.indexOf(b[0]) !== -1) {
//     findDiff(a,b);
//   } else {
//     // console.log(a);
//     return a;
//   }
//
//   function findDiff(a,b) {
//       let indexToRemove = a.indexOf(b[0]);
//       a.splice(indexToRemove, 1);
//       array_diff(a,b);
//   }
// }
// array_diff([1,2,2,2,3],[2])

//----------#17 END OF ARRAY_DIFF ---------------------

//----------#18 FIND THE DIVISORS ---------------------
// #divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"

function divisors(integer) {
  let divisorArray = [];
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        divisorArray.push(i);
      }
    }
    if (divisorArray.length === 0) {
      return integer + " is prime";
    } else {
      return divisorArray;
    }
};
divisors(13);

//----------#18 END OF FIND THE DIVISORS ---------------------
