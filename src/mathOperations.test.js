const { expect } = require('@jest/globals')

test('Math Operations', () => {
  expect(Math.round(1.4)).toEqual(1)
  expect(Math.round(1.5)).toEqual(2)
  expect(Math.ceil(1.4)).toEqual(2)
  expect(Math.floor(1.5)).toEqual(1)
  expect(Math.trunc(1.9)).toEqual(1)
  expect(Math.sign(-4.5)).toEqual(-1)
  expect(Math.sign(4.5)).toEqual(1)
  expect(Math.sign(0)).toEqual(0)
  expect(Math.pow(2, 3)).toEqual(8)
  expect(Math.sqrt(64)).toEqual(8)
  expect(Math.abs(-4.5)).toEqual(4.5)
  expect(Math.min(2, 7, 1, 45)).toEqual(1)
  expect(Math.max(2, 7, 1, 45)).toEqual(45)
  // Returns a random integer from 0 to 15
  expect(Math.floor(Math.random() * 15)).toBeGreaterThanOrEqual(0)
  expect(Math.floor(Math.random() * 15)).toBeLessThan(15)
  // Returns a random integer from 5 to 15
  expect(Math.floor(Math.random() * 10) + 5).toBeGreaterThanOrEqual(5)
  expect(Math.floor(Math.random() * 10) + 5).toBeLessThan(15)
  // Function that return randon num between 2 nums, incl both
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  expect(getRndInteger(5, 15)).toBeGreaterThanOrEqual(5)
  expect(getRndInteger(5, 15)).toBeLessThanOrEqual(15)
  expect(5 == '5').toBe(true)
  expect(5 === '5').toBe(false)
  // The ?? operator returns the first argument if it is not nullish (null or undefined).
  let a = null
  let b = 'test'
  expect(a ?? 'Hans').toEqual('Hans')
  expect(b ?? 'Hans').toEqual('test')
  // The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
  const car = { type: 'Fiat', model: '500', color: 'white' }
  expect(car?.name).toBeUndefined()
})
