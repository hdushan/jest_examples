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
})
