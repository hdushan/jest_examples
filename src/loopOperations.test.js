describe('Loop Operations', () => {
  const arr = ['a', 'b', 'c']

  test('For loop', () => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
      arr1.push(arr[i])
    }
    expect(arr).toEqual(arr1)
  })

  test('For-Of loop: Array', () => {
    let arr1 = []
    for (let x of arr) {
      // for-in also exists, but wierd for arrays
      arr1.push(x)
    }
    expect(arr).toEqual(arr1)
  })

  test('While loop', () => {
    let arr1 = []
    let i = 0
    while (i < arr.length) {
      arr1.push(arr[i])
      i++
    }
    expect(arr).toEqual(arr1)
  })

  test('While with break', () => {
    let arr1 = []
    let i = 0
    while (i < arr.length) {
      arr1.push(arr[i])
      i++
      if (i == 1) {
        break
      } // same syntax for continue too
    }
    expect(arr1.length).toEqual(1)
  })

  test('Do-While loop', () => {
    let arr1 = []
    let i = 0
    do {
      arr1.push(arr[i])
      i++
    } while (i < arr.length)
    expect(arr).toEqual(arr1)
  })

  test('ForEach loop: Array', () => {
    let arr1 = []
    arr.forEach((letter) => {
      arr1.push(letter)
    })
    expect(arr).toEqual(arr1)
  })

  test('Home-built iterable', () => {
    // A JavaScript iterable is an object that has a Symbol.iterator.
    // The Symbol.iterator is a function that returns a next() function.
    // An iterable can be iterated over with the code: for (const x of iterable) { }

    // Create an Object
    let myNumbers = {}

    // Make it iterable
    myNumbers[Symbol.iterator] = function () {
      let n = 0
      let done = false
      return {
        next() {
          n += 10
          if (n == 50) {
            done = true
          }
          return { value: n, done: done }
        }
      }
    }

    let arr1 = []
    for (const n of myNumbers) {
      arr1.push(n)
    }
    expect(arr1).toEqual([10, 20, 30, 40]) // Note: last value 50 isnt there
  })
})
