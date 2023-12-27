import valida from "../js/index.js"

describe('Calculator functions', () => {
  let temporaryNumber = ''
  let displayShown = []
  let operations = []
  let numbers = []

  beforeEach(() => {
    temporaryNumber = ''
    displayShown = []
    operations = []
    numbers = []
  })

  test('validateNumberAndPush', () => {
    temporaryNumber = '5'
    validateNumberAndPush()
    expect(numbers).toEqual(['5'])
  })

  test('writeNumber', () => {
    writeNumber('3')
    expect(temporaryNumber).toBe('3')
    expect(displayShown).toEqual(['3'])
  })

  test('writeOperator', () => {
    writeOperator('+')
    expect(operations).toEqual(['+'])
    expect(displayShown).toEqual(['+'])
  })

  test('writeInCalculator', () => {
    writeInCalculator('7')
    expect(displayShown).toEqual(['7'])
  })

  test('clearDisplay', () => {
    writeNumber('3')
    writeOperator('+')
    writeNumber('2')
    clearDisplay()
    expect(displayShown).toEqual([])
    expect(operations).toEqual([])
    expect(numbers).toEqual([])
  })

  test('calculate', () => {
    numbers = ['3', '2']
    operations = ['+']
    const result = calculate(operations, numbers)
    expect(result).toBe(5)
  })

  test('execute', () => {
    writeNumber('3')
    writeOperator('+')
    writeNumber('2')
    execute()
    expect(displayShown).toEqual([5])
  })
})
