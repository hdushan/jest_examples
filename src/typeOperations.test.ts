import { User, isVeteran } from './typeOperations'
import { describe, test, expect } from '@jest/globals'

describe('Type Operations', () => {
  const user: User = {
    name: 'John',
    age: 30
  }

  test('Older user', () => {
    expect(isVeteran(user)).toBe(false)
  })
})
