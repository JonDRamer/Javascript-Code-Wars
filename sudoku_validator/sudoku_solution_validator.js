function validSolution(sudokuArray) {
  let validSolution = true

  // Return false if you find any zeros
  validSolution = sudokuArray.some(e => e.includes(0)) ? false : validSolution
  if (!validSolution) {
    console.log('FOUND A ZERO returning: ', validSolution)
    return validSolution
  }

  // Create horizontal arrays our of each vertical row and concat those onto the sudokuArray
  let verticalArrays = []
  let verticalArray = []
  count = 0
  while (count < sudokuArray.length) {
    for (let i = 0; i < sudokuArray.length; i++) {
      const nestedArray = sudokuArray[i];
      const item = nestedArray[count]
      verticalArray.push(item)
    }
    verticalArrays.push(verticalArray)
    verticalArray = []
    count++
  }

  // Check vertical 9x9 arrays for numbers 1-9
  for (let i = 0; i < verticalArrays.length; i++) {
    const nestedArray = verticalArrays[i];
    const requiredNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < requiredNums.length; i++) {
      const element = requiredNums[i];
      if (!nestedArray.includes(element)) {
        validSolution = false
        console.log('Nested Array: ', nestedArray, 'does not include: ', element)
        console.log('FOUND an invalid row returning: ', validSolution)
        return validSolution
      }
    }
  }

  // Check horizontal 9x9 arrays for numbers 1-9
  for (let i = 0; i < sudokuArray.length; i++) {
    const nestedArray = sudokuArray[i]
    const requiredNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < requiredNums.length; i++) {
      const element = requiredNums[i];
      if (!nestedArray.includes(element)) {
        validSolution = false
        console.log('Nested Array: ', nestedArray, 'does not include: ', element)
        console.log('FOUND an invalid row returning: ', validSolution)
        return validSolution
      }
    }
  }

  // ToDo: Check 3x3 sub-arrays

  console.log('STATUS: ', validSolution)
  return validSolution
}



// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

// validSolution([
//   [1, 2, 6, 3, 4, 7, 5, 9, 8],
//   [7, 3, 5, 8, 1, 9, 6, 4, 2],
//   [1, 9, 4, 2, 7, 5, 8, 6, 3],
//   [3, 1, 7, 5, 8, 4, 2, 6, 9],
//   [7, 5, 9, 1, 6, 2, 4, 3, 8],
//   [4, 8, 2, 9, 3, 6, 7, 1, 5],
//   [1, 4, 8, 7, 5, 9, 3, 2, 6],
//   [5, 6, 1, 4, 2, 3, 9, 8, 7],
//   [2, 7, 3, 6, 9, 1, 8, 5, 4]
// ]); // => false

validSolution([
  [1,2,3,4,5,6,7,8,9],
  [2,3,1,5,6,4,8,9,7],
  [3,1,2,6,4,5,9,7,8],
  [4,5,6,7,8,9,1,2,3],
  [5,6,4,8,9,7,2,3,1],
  [6,4,5,9,7,8,3,1,2],
  [7,8,9,1,2,3,4,5,6],
  [8,9,7,2,3,1,5,6,4],
  [9,7,8,3,1,2,6,4,5]
]) // => false