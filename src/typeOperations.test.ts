import {
  Car,
  User,
  isTooOld,
  isVeteran,
  fnWithTypeInArgumentsReturnsPromise
} from './typeOperations'
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

  test('Age check', async () => {
    expect(
      await fnWithTypeInArgumentsReturnsPromise({ age: 22, name: 'hans' })
    ).toBe('hans is old')
    await expect(
      fnWithTypeInArgumentsReturnsPromise({ age: 20, name: 'hans' })
    ).rejects.toThrow('hans is young')
  })
})
