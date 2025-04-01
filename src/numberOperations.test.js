const { expect } = require('@jest/globals')

test('Number Operations', () => {
  expect(Number.parseInt('123')).toEqual(123)
  expect(Number.isInteger(10)).toBeTruthy()
})
