/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let pairs = 0;

  nums.forEach((numI, i = 0) => {
    nums.forEach((numJ, j = i + 1) => {
      pairs = (numI == numJ && i < j) ? pairs += 1 : pairs;
    })
  })
  return pairs
};


// numIdenticalPairs([1, 2, 3, 1, 1, 3]) // => 4
// numIdenticalPairs([1, 1, 1, 1]) // => 6
// numIdenticalPairs([1, 2, 3]) // => 0