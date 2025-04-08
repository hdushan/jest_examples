test('Array operations', () => {
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
  expect(fruits instanceof Array).toBe(true)
  expect(Array.isArray(fruits)).toBe(true)
  expect(fruits.length).toEqual(4)
  expect(fruits.toString()).toEqual('Banana,Orange,Apple,Mango')
  expect(fruits[1]).toBe('Orange')
  expect(fruits.at(1)).toBe('Orange')
  expect(fruits.join('*')).toEqual('Banana*Orange*Apple*Mango')
  expect(fruits.pop()).toBe('Mango')
  expect(fruits.length).toEqual(3)
  expect(fruits).toEqual(['Banana', 'Orange', 'Apple'])
  expect(fruits.push('Lemon')).toBe(4) // Append. Returns length
  expect(fruits).toEqual(['Banana', 'Orange', 'Apple', 'Lemon'])
  expect(fruits.shift()).toBe('Banana')
  expect(fruits.length).toEqual(3)
  expect(fruits.unshift('Lime')).toEqual(4) // Add to front. Returns length
  expect(fruits).toEqual(['Lime', 'Orange', 'Apple', 'Lemon'])
  fruits[fruits.length] = 'Kiwi' // Append to end
  expect(fruits).toEqual(['Lime', 'Orange', 'Apple', 'Lemon', 'Kiwi'])
  expect(fruits.concat(['Tomato'])).toEqual([
    'Lime',
    'Orange',
    'Apple',
    'Lemon',
    'Kiwi',
    'Tomato'
  ])
  fruits[0] = 'Grape'
  expect(fruits).toEqual(['Grape', 'Orange', 'Apple', 'Lemon', 'Kiwi'])
  expect(fruits.toSorted()).toEqual([
    'Apple',
    'Grape',
    'Kiwi',
    'Lemon',
    'Orange'
  ]) // does not change original
  expect(fruits.sort()).toEqual(['Apple', 'Grape', 'Kiwi', 'Lemon', 'Orange']) // changes original
  expect(
    [12, 45, 11, 90, 6].sort((a, b) => {
      // Sorts in ascending order. The normal sort function only works correctly on strings
      // When the sort() function compares two values, it sends the values to the compare function,
      // and sorts the values according to the returned (negative, zero, positive) value.
      // If the result is negative, a is sorted before b.
      // If the result is positive, b is sorted before a.
      // If the result is 0, no changes are done with the sort order of the two values.
      return a - b
    })
  ).toEqual([6, 11, 12, 45, 90])
  const cars = [
    { type: 'Volvo', year: 2016 },
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 }
  ]
  expect(cars.sort((a, b) => a.year - b.year)).toEqual([
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
    { type: 'Volvo', year: 2016 }
  ])

  // // foreach
  // fruits.forEach((fruit) => {
  //   console.log(fruit)
  // })
  // // iterate over string after converting it to array
  // Array.from('ABCDEFG').forEach((letter) => {
  //   console.log(letter)
  // })

  // map
  expect([1, 2, 3].map((x) => x * 2)).toEqual([2, 4, 6])
  // filter
  expect([1, 2, 3].filter((x) => x > 1)).toEqual([2, 3])
  // reduce
  expect(
    [1, 2, 3].reduce((accumulator, currentValue) => accumulator + currentValue)
  ).toEqual(6)
  // every
  expect([1, 2, 3].every((x) => x > 0)).toBe(true)
  // some
  expect([1, 2, 3].some((x) => x > 2)).toBe(true)
  // ... spread operator
  const q1 = ['Jan', 'Feb', 'Mar']
  const q2 = ['Apr', 'May', 'Jun']
  expect([...q1, ...q2]).toEqual(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
  expect(fruits.indexOf('Lemon')).toEqual(3)
  expect(['Apple', 'Orange', 'Apple', 'Mango'].lastIndexOf('Apple')).toBe(2)
  expect(fruits.includes('Lemon')).toBe(true)
  expect(
    [4, 9, 16, 25, 29].find((value) => {
      // "find" returns the value of the first array element that passes a test function
      return value > 18
    })
  ).toEqual(25)
  expect([1, 2, 3].reverse()).toEqual([3, 2, 1]) // changes original
  expect([1, 2, 3].toReversed()).toEqual([3, 2, 1]) // does not change original
  expect(Math.max.apply(null, [1, 2, 3])).toBe(3)
  expect(Math.min.apply(null, [1, 2, 3])).toBe(1)
})
