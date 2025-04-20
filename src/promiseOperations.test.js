import { promiseExample, promiseCaller } from './promiseOperations'

describe('Promise Operations', () => {
  it('Promise example', async () => {
    await expect(promiseExample('hans')).resolves.toBe('me')
    await expect(promiseExample('peter')).rejects.toBe('not me')
  })

  it('Promise caller example', async () => {
    expect(await promiseCaller('hans')).toBe('me')
    expect(await promiseCaller('peter')).toBe('not me')
  })
})
