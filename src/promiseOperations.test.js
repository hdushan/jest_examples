import {
  promiseExample,
  promiseCaller,
  promiseCallerAsyncAwait
} from './promiseOperations'

describe('Promise Operations', () => {
  it('Promise example', async () => {
    await expect(promiseExample('hans')).resolves.toBe('me')
    await expect(promiseExample('peter')).rejects.toBe('not me')
  })

  it('Promise caller example', async () => {
    expect(await promiseCaller('hans')).toBe('me')
    expect(await promiseCaller('peter')).toBe('not me')
    expect(await promiseCallerAsyncAwait('hans')).toBe('me')
    expect(await promiseCallerAsyncAwait('peter')).toBe('not me')
  })
})
