let temporaryNumber = ''
const displayShown = []
const operations = []
const numbers = []

const display = document.getElementById('display')

function validateNumberAndPush () {
  if (temporaryNumber !== '') {
    numbers.push(temporaryNumber)
    temporaryNumber = ''
  }
}

function writeNumber (value) {
  temporaryNumber += value
  writeInCalculator(value)
}

function writeOperator (value) {
  validateNumberAndPush()
  operations.push(value.trim())
  writeInCalculator(value)
}

function writeInCalculator (value) {
  displayShown.push(value)
  const displayString = displayShown.join('')
  display.innerText = displayString
}

function clearDisplay () {
  displayShown.splice(0, displayShown.length)
  operations.splice(0, operations.length)
  numbers.splice(0, numbers.length)
  temporaryNumber = ''

  display.innerText = '0'
}

function calculate (operationsArr, numbersArr) {
  if (numbersArr.length === 1) return numbersArr[0]
  else {
    let result = 0

    const operationIndex = operationsArr.indexOf('×')
    if (operationIndex !== -1) {
      result = numbersArr[operationIndex] * numbersArr[operationIndex + 1]
      numbersArr.splice(operationIndex, 2, result)
      operationsArr.splice(operationIndex, 1)
      return calculate(operationsArr, numbersArr)
    }

    const operationIndex2 = operationsArr.indexOf('÷')
    if (operationIndex2 !== -1) {
      result = numbersArr[operationIndex2] / numbersArr[operationIndex2 + 1]
      numbersArr.splice(operationIndex2, 2, result)
      operationsArr.splice(operationIndex2, 1)
      return calculate(operationsArr, numbersArr)
    }

    const operationIndex3 = operationsArr.indexOf('+')
    if (operationIndex3 !== -1) {
      result =
        Number(numbersArr[operationIndex3]) +
        Number(numbersArr[operationIndex3 + 1])
      numbersArr.splice(operationIndex3, 2, result)
      operationsArr.splice(operationIndex3, 1)
      return calculate(operationsArr, numbersArr)
    }

    const operationIndex4 = operationsArr.indexOf('-')
    if (operationIndex4 !== -1) {
      result = numbersArr[operationIndex4] - numbersArr[operationIndex4 + 1]
      numbersArr.splice(operationIndex4, 2, result)
      operationsArr.splice(operationIndex4, 1)
      return calculate(operationsArr, numbersArr)
    }
    return result
  }
}

function execute () {
  validateNumberAndPush()
  const result = calculate(operations, numbers)

  displayShown.splice(0, displayShown.length)
  displayShown[0] = result

  display.innerText = result
}

module.exports = {
  validateNumberAndPush,
  writeNumber,
  writeOperator,
  writeInCalculator,
  clearDisplay,
  calculate,
  execute
}
