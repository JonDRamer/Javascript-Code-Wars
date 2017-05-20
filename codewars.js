"use strict";

//----------#1 SEQUENCE SUM----------

function sequenceSum(start, end, step) {
  let current = start;
  let series = [];
  if (start > end) {
    return 0;
  }
  while (current <= end) {
    series.push(current);
    current += step;
  }
  let sum = series.reduce(function(acc, curr) {
    return acc + curr;
  });
  console.log(sum);
  return sum;
}
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

function likes(arr) {
  if (arr.length < 1) {
    return "no one likes this";
  } else if (arr.length === 1) {
    return arr[0] + " likes this";
  } else if (arr.length === 2) {
    return arr[0] + " and " + arr[1] + " like this";
  } else if (arr.length === 3) {
    return arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
  } else {
    let others = arr.length - 2;
    return arr[0] + ", " + arr[1] + " and " + others + " others like this";
  }
}
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

function uniqueInOrder(sequence) {
  let list = [];
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== list[list.length - 1]) {
      list.push(sequence[i]);
    }
  }
  return list;
}

// uniqueInOrder('AAAABBBCCDAABBB');

//----------#3 END OF UNIQUE IN ORDER!----------

//----------#4 Multiples of 3 & 5---------------------

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let arrayToSum = [];
  let count = 1;
  while (count < number) {
    if (count % 3 === 0 || count % 5 === 0) {
      arrayToSum.push(count);
    }
    count++;
  }
  if (arrayToSum.length !== 0) {
    let sum = arrayToSum.reduce((acc, curr) => {
      return acc + curr;
    });
    return sum;
  }
  return 0;
}
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

function pigIt(string) {
  let words = string.split(' ');
  let pigLatinWords = [];
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split('');
    let popped = letters.shift();
    letters.push(popped, 'ay');
    let latinString = letters.join('');
    pigLatinWords.push(latinString);
  }
  return pigLatinWords.join(' ');
}
pigIt('Pig latin is cool');


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

function spinWords(string) {
  let wordArray = string.split(' ');
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > 4) {
      wordArray[i] = wordArray[i].split('')
        .reverse()
        .join('');
    }
  }
  return wordArray.join(' ');
}
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

function digital_root(number) {
  let stringifiedNumber = number.toString();
  stringifiedNumber = stringifiedNumber.split('');
  let reducedNumber = stringifiedNumber.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  });
  if (stringifiedNumber.length > 1) {
    return digital_root(reducedNumber);
  }
  return parseInt(reducedNumber);
}
// digital_root(16);

//----------#7 SUM OF DIGITAL ROOT---------------------

//----------#8 FIND THE ODD INT---------------------
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(array) {
  let count = 0;
  let previous = null;
  let sortedArray = array.sort();
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === previous) {
      count++;
      previous = sortedArray[i];
    } else if (sortedArray[i] !== previous) {
      if (sortedArray[i] !== previous && count % 2 !== 0) {
        return previous;
      }
      previous = sortedArray[i];
      count = 1;
    }
  }
  if (count % 2 !== 0) {
    return previous;
  } else {
    return "No odds found";
  }
}
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
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

function humanReadable(sec) {
  let hours = Math.floor(sec / 3600);
  if (hours.toString()
    .length < 2) {
    hours = "0" + hours;
  }
  let minutes = Math.floor(sec % 3600 / 60);
  if (minutes.toString()
    .length < 2) {
    minutes = "0" + minutes;
  }
  let seconds = sec % 60;
  if (seconds.toString()
    .length < 2) {
    seconds = "0" + seconds;
  }
  let time = hours + ":" + minutes + ":" + seconds;
  return time;
}
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


function validParentheses(parens) {
  let openParens = [];
  let closedParens = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      openParens.push(parens[i]);
    } else {
      closedParens.push(parens[i]);
    }
  }
  console.log(openParens);
  console.log(closedParens);
  if (openParens.length === closedParens.length) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;

}
validParentheses("(())((()())())")

//----------#10 END OF VALID PARENTHESIS------------------
