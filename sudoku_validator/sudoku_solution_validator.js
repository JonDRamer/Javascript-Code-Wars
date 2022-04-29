function validSolution(sudokuArray) {
  let validSolution = true

  // Return false if you find any zeros
  validSolution = findZeros(sudokuArray)

  // Check horizontal rows for numbers 1-9
  validSolution = validateArrayGroup(sudokuArray)
  if (!validSolution) {
    return validSolution
  }

  // Create arrays out of each column
  const verticalArrays = createVerticalArrays(sudokuArray)

  // Check vertical 9x9 arrays for numbers 1-9
  validSolution = validateArrayGroup(verticalArrays)
  if (!validSolution) {
    return validSolution
  }

  // ToDo: Create 3x3 sub-arrays
  const subArrays = createSubArrays(sudokuArray)
  // ToDo: Check 3x3 sub-arrays
  validSolution = validateArrayGroup(subArrays)
  return validSolution
}

function findZeros(twoDArray) {
  const hasZeros = twoDArray.some(e => e.includes(0)) ? false : validSolution
  if (!hasZeros) {
    return hasZeros
  }
  return hasZeros
}

function validateArrayGroup(twoDArray) {
  if (twoDArray.length < 9) {
    throw new Error('Insufficient Array Length: ', `Array has only ${twoDArray.length} items.`)
  }
  for (let i = 0; i < twoDArray.length; i++) {
    const nestedArray = twoDArray[i]
    const requiredNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (nestedArray.length) {
      for (let i = 0; i < requiredNums.length; i++) {
        const element = requiredNums[i];
        if (!nestedArray.includes(element)) {
          console.log('Nested Array: ', nestedArray, 'does not include: ', element)
          console.log('FOUND an invalid row returning: ', false)
          return false
        }
      }
    }
  }
  return true
}

function createVerticalArrays(twoDArray) {
  let count = 0
  let verticalArrays = []
  let verticalArray = []

  while (count < twoDArray.length) {
    for (let i = 0; i < twoDArray.length; i++) {
      const nestedArray = twoDArray[i];
      const item = nestedArray[count]
      verticalArray.push(item)
    }
    verticalArrays.push(verticalArray)
    verticalArray = []
    count++
  }
  return verticalArrays
}

function createSubArrays(twoDArray) {
  let count = 0
  let subArrays = []
  let subArray = []

  while (arrayHasItems(twoDArray)) {
    for (let i = 0; i < twoDArray.length; i++) {
      const nestedArray = twoDArray[i];
      const slice = nestedArray.splice(0, 3)
      subArray = subArray.concat(slice)
      count++

      if (count === 3) {
        subArrays.push(subArray)
        subArray = []
        count = 0
      }
    }
  }
  return subArrays
}

function arrayHasItems(twoDArray) {
  for (let i = 0; i < twoDArray.length; i++) {
    const element = twoDArray[i];
    if (element.length) {
      return true
    }
  }
  return false
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

// validSolution([
//   [1,2,3,4,5,6,7,8,9],
//   [2,3,1,5,6,4,8,9,7],
//   [3,1,2,6,4,5,9,7,8],
//   [4,5,6,7,8,9,1,2,3],
//   [5,6,4,8,9,7,2,3,1],
//   [6,4,5,9,7,8,3,1,2],
//   [7,8,9,1,2,3,4,5,6],
//   [8,9,7,2,3,1,5,6,4],
//   [9,7,8,3,1,2,6,4,5]
// ]) // => false