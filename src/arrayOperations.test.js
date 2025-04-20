describe('Array Operations', () => {
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango']

  describe('Array Creation and Type Checking', () => {
    test('array type checking', () => {
      expect(fruits instanceof Array).toBe(true)
      expect(Array.isArray(fruits)).toBe(true)
      expect(fruits.length).toEqual(4)
    })
  })

  describe('Array Access', () => {
    test('accessing array elements', () => {
      expect(fruits[1]).toBe('Orange')
      expect(fruits.at(1)).toBe('Orange')
    })

    test('array to string conversion', () => {
      expect(fruits.toString()).toEqual('Banana,Orange,Apple,Mango')
      expect(fruits.join('*')).toEqual('Banana*Orange*Apple*Mango')
    })
  })

  describe('Array Modification', () => {
    test('pop and push methods', () => {
      expect(fruits.pop()).toBe('Mango')
      expect(fruits.length).toEqual(3)
      expect(fruits).toEqual(['Banana', 'Orange', 'Apple'])
      expect(fruits.push('Lemon')).toBe(4) // Append. Returns length
      expect(fruits).toEqual(['Banana', 'Orange', 'Apple', 'Lemon'])
    })

    test('shift and unshift methods', () => {
      expect(fruits.shift()).toBe('Banana')
      expect(fruits.length).toEqual(3)
      expect(fruits.unshift('Lime')).toEqual(4) // Add to front. Returns length
      expect(fruits).toEqual(['Lime', 'Orange', 'Apple', 'Lemon'])
    })

    test('direct index assignment', () => {
      fruits[fruits.length] = 'Kiwi' // Append to end
      expect(fruits).toEqual(['Lime', 'Orange', 'Apple', 'Lemon', 'Kiwi'])
      fruits[0] = 'Grape'
      expect(fruits).toEqual(['Grape', 'Orange', 'Apple', 'Lemon', 'Kiwi'])
    })

    test('concat method', () => {
      expect(fruits.concat(['Tomato'])).toEqual([
        'Grape',
        'Orange',
        'Apple',
        'Lemon',
        'Kiwi',
        'Tomato'
      ])
    })
  })

  describe('Array Sorting', () => {
    test('sort and toSorted methods', () => {
      expect(fruits.toSorted()).toEqual([
        'Apple',
        'Grape',
        'Kiwi',
        'Lemon',
        'Orange'
      ]) // does not change original
      expect(fruits.sort()).toEqual([
        'Apple',
        'Grape',
        'Kiwi',
        'Lemon',
        'Orange'
      ]) // changes original
    })

    test('numeric sorting', () => {
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
    })

    test('object sorting', () => {
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
    })
  })

  describe('Array Iteration Methods', () => {
    test('map method', () => {
      expect([1, 2, 3].map((x) => x * 2)).toEqual([2, 4, 6])
    })

    test('filter method', () => {
      expect([1, 2, 3].filter((x) => x > 1)).toEqual([2, 3])
    })

    test('reduce method', () => {
      expect(
        [1, 2, 3].reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )
      ).toEqual(6)
    })

    test('every method', () => {
      expect([1, 2, 3].every((x) => x > 0)).toBe(true)
    })

    test('some method', () => {
      expect([1, 2, 3].some((x) => x > 2)).toBe(true)
    })
  })

  describe('Array Search Methods', () => {
    test('indexOf and lastIndexOf methods', () => {
      expect(fruits.indexOf('Lemon')).toEqual(3)
      expect(['Apple', 'Orange', 'Apple', 'Mango'].lastIndexOf('Apple')).toBe(2)
    })

    test('includes method', () => {
      expect(fruits.includes('Lemon')).toBe(true)
    })

    test('find method', () => {
      expect(
        [4, 9, 16, 25, 29].find((value) => {
          // "find" returns the value of the first array element that passes a test function
          return value > 18
        })
      ).toEqual(25)
    })
  })

  describe('Array Reversal', () => {
    test('reverse and toReversed methods', () => {
      expect([1, 2, 3].reverse()).toEqual([3, 2, 1]) // changes original
      expect([1, 2, 3].toReversed()).toEqual([3, 2, 1]) // does not change original
    })
  })

  describe('Array Utility Methods', () => {
    test('spread operator', () => {
      const q1 = ['Jan', 'Feb', 'Mar']
      const q2 = ['Apr', 'May', 'Jun']
      expect([...q1, ...q2]).toEqual(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
      expect([...q1, 'Dec']).toEqual(['Jan', 'Feb', 'Mar', 'Dec'])
    })

    test('using apply with Math functions', () => {
      expect(Math.max.apply(null, [1, 2, 3])).toBe(3)
      expect(Math.min.apply(null, [1, 2, 3])).toBe(1)
    })
  })
})
