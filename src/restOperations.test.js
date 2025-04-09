import { gender, echo } from './restOperations'

describe('REST Operations with axios without mocks', () => {
  test('GET operation', async () => {
    expect(await gender('hans')).toBe('male')
  })

  test('POST operation', async () => {
    expect(await echo('hans')).toBe('hans')
  })
})
