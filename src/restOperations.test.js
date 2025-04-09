import { gender } from './restOperations'

describe('REST Operations with axios', () => {
  test('GET operation without mocking', async () => {
    expect(await gender('hans')).toBe('male')
  })
})
