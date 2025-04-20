import { describe } from 'node:test'

function promiseExample(name) {
  return new Promise((resolve, reject) => {
    if (name.toLowerCase() === 'hans') {
      resolve()
    } else {
      reject()
    }
  })
}

const promiseCaller = (name) => {
  return promiseExample(name)
    .then(() => {
      return 'resolved'
    })
    .catch(() => {
      return 'rejected'
    })
}

describe('Promise Operations', () => {
  it('Promise example', async () => {
    await expect(promiseExample('hans')).resolves.toBeUndefined()
    await expect(promiseExample('peter')).rejects.toBeUndefined()
  })

  it('Promise caller example', async () => {
    expect(await promiseCaller('hans')).toBe('resolved')
    expect(await promiseCaller('peter')).toBe('rejected')
  })
})
