import { Car, User, isTooOld, isVeteran } from './typeOperations'
import { describe, test, expect } from '@jest/globals'

describe('Type Operations', () => {
  const user: User = {
    name: 'John',
    age: 30
  }

  const car: Car = {
    make: 'Ford',
    year: 2019
  }

  test('Older user', () => {
    expect(isVeteran(user)).toBe(false)
  })

  test('Older car', () => {
    expect(isTooOld(car)).toBe(true)
  })
})
