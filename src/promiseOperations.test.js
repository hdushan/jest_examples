import { describe } from 'node:test'

function promiseExample(name) {
  return new Promise((resolve, reject) => {
    if (name.toLowerCase() === 'hans') {
      resolve('me')
    } else {
      reject('not me')
    }
  })
}

const promiseCaller = (name) => {
  return promiseExample(name)
    .then((returnedString) => {
      return returnedString
    })
    .catch((errorString) => {
      return errorString
    })
}

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
