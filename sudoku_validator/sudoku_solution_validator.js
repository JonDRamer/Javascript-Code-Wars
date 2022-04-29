function validSolution(sudokuArray) {
  let validSolution = true

  // Check for zeros
  validSolution = findZeros(sudokuArray)
  if (!validSolution) {
    return validSolution
  }

  validSolution = validateArrayGroup(sudokuArray)
  if (!validSolution) {
    return validSolution
  }

  // Create arrays out of each column
  const verticalArrays = createVerticalArrays(sudokuArray)
  validSolution = validateArrayGroup(verticalArrays)
  if (!validSolution) {
    return validSolution
  }

  // ToDo: Create 3x3 sub-arrays
  const subArrays = createSubArrays(sudokuArray)
  validSolution = validateArrayGroup(subArrays)
  return validSolution
}

function findZeros(twoDArray) {
  const hasZeros = twoDArray.some(e => e.includes(0)) ? false : validSolution
  return hasZeros
}

function validateArrayGroup(twoDArray) {
  if (twoDArray.length !== 9) {
    throw new Error('Insufficient Array Length: ', `Array has ${twoDArray.length} items instead of 9.`)
  }
  for (let i = 0; i < twoDArray.length; i++) {
    const nestedArray = twoDArray[i]
    const requiredNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (nestedArray.length) {
      for (let i = 0; i < requiredNums.length; i++) {
        const element = requiredNums[i];
        if (!nestedArray.includes(element)) {
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