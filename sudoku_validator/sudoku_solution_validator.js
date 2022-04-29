function validSolution(sudokuArray) {
  // Check rows
  if (!validateArrayGroup(sudokuArray)) {
    return false
  }

  // Create and check colums
  const verticalArrays = createVerticalArrays(sudokuArray)
  if (!validateArrayGroup(verticalArrays)) {
    return false
  }

  // ToDo: Create 3x3 sub-arrays
  const subArrays = createSubArrays(sudokuArray)
  return validateArrayGroup(subArrays)
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