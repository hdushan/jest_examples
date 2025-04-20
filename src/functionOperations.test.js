function add(num1, num2) {
  return num1 + num2
}

const addArrow = (num1, num2) => {
  return num1 + num2
}

const arrowWithoutArguments = () => {
  return 1
}

const arrowFunctionSingleLine = (x) => x * 2

describe('Function Operations', () => {
  test('Normal function', () => {
    expect(add(1, 2)).toBe(3)
  })

  test('Arrow function', () => {
    expect(addArrow(1, 2)).toBe(3)
  })

  test('Arrow function without arguments', () => {
    expect(arrowWithoutArguments()).toBe(1)
  })

  test('Single line arrow function', () => {
    expect(arrowFunctionSingleLine(2)).toBe(4)
  })
})
