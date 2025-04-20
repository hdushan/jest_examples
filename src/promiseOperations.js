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
    .then((resolveString) => {
      return resolveString
    })
    .catch((errorString) => {
      return errorString
    })
}

const promiseCallerAsyncAwait = async (name) => {
  try {
    return await promiseExample(name)
  } catch (errorString) {
    return errorString
  }
}

export { promiseExample, promiseCaller, promiseCallerAsyncAwait }
