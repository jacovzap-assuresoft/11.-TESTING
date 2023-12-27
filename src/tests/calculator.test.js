describe('Calculator functions', () => {
  let display
  let calculator

  beforeAll(() => {
    document.body.innerHTML = `<div id="display">0</div>`
    display = document.getElementById('display')
    calculator = require('../js/index.js')
  })

  afterEach(() => {
    calculator.clearDisplay()
  })

  test('writeNumber', () => {
    calculator.writeNumber('3')
    expect(display.innerText).toEqual('3')
  })

  test('writeOperator', () => {
    calculator.writeOperator('+')
    expect(display.innerText).toEqual('+')
  })

  test('writeInCalculator', () => {
    calculator.writeInCalculator('7')
    expect(display.innerText).toEqual('7')
  })

  test('clearDisplay', () => {
    calculator.writeNumber('3')
    calculator.writeOperator('+')
    calculator.writeNumber('2')
    calculator.clearDisplay()
    expect(display.innerText).toEqual('0')
  })

  test('calculate', () => {
    let numbers = []
    let operations = []

    numbers.push('2')
    numbers.push('2')
    numbers.push('2')
    numbers.push('5')
    numbers.push('4')

    operations.push('×')
    operations.push('÷')
    operations.push('+')
    operations.push('-')

    expect(calculator.calculate(operations, numbers)).toEqual(3)
  })

  test('invalid operation', () => { 
    let numbers = []
    let operations = []

    numbers.push('2')
    numbers.push('2')

    operations.push('^')

    expect(calculator.calculate(operations, numbers)).toEqual(0)
  })

  test('execute', () => {
    calculator.writeNumber('3')
    calculator.writeOperator('+')
    calculator.writeNumber('2')
    calculator.execute()
    expect(display.innerText).toEqual(5)
  })
})
