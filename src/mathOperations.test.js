describe('Math Operations', () => {
  describe('Rounding Functions', () => {
    test('round method', () => {
      expect(Math.round(1.4)).toEqual(1)
      expect(Math.round(1.5)).toEqual(2)
    })

    test('ceil method', () => {
      expect(Math.ceil(1.4)).toEqual(2)
    })

    test('floor method', () => {
      expect(Math.floor(1.5)).toEqual(1)
    })

    test('trunc method', () => {
      expect(Math.trunc(1.9)).toEqual(1)
    })
  })

  describe('Sign and Absolute Value', () => {
    test('sign method', () => {
      expect(Math.sign(-4.5)).toEqual(-1)
      expect(Math.sign(4.5)).toEqual(1)
      expect(Math.sign(0)).toEqual(0)
    })

    test('abs method', () => {
      expect(Math.abs(-4.5)).toEqual(4.5)
    })
  })

  describe('Power and Square Root', () => {
    test('pow method', () => {
      expect(Math.pow(2, 3)).toEqual(8)
    })

    test('sqrt method', () => {
      expect(Math.sqrt(64)).toEqual(8)
    })
  })

  describe('Min and Max', () => {
    test('min method', () => {
      expect(Math.min(2, 7, 1, 45)).toEqual(1)
    })

    test('max method', () => {
      expect(Math.max(2, 7, 1, 45)).toEqual(45)
    })
  })

  describe('Random Number Generation', () => {
    test('random number between 0 and 15', () => {
      expect(Math.floor(Math.random() * 15)).toBeGreaterThanOrEqual(0)
      expect(Math.floor(Math.random() * 15)).toBeLessThan(15)
    })

    test('random number between 5 and 15', () => {
      expect(Math.floor(Math.random() * 10) + 5).toBeGreaterThanOrEqual(5)
      expect(Math.floor(Math.random() * 10) + 5).toBeLessThan(15)
    })

    test('getRndInteger function', () => {
      // Function that returns random num between 2 nums, incl both
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      expect(getRndInteger(5, 15)).toBeGreaterThanOrEqual(5)
      expect(getRndInteger(5, 15)).toBeLessThanOrEqual(15)
    })
  })

  describe('Equality Comparisons', () => {
    test('loose equality (==)', () => {
      expect(5 == '5').toBe(true)
    })

    test('strict equality (===)', () => {
      expect(5 === '5').toBe(false)
    })
  })

  describe('JavaScript Operators', () => {
    test('nullish coalescing operator (??)', () => {
      let a = null
      let b = 'test'
      expect(a ?? 'Hans').toEqual('Hans')
      expect(b ?? 'Hans').toEqual('test')
    })

    test('optional chaining operator (?.)', () => {
      const car = { type: 'Fiat', model: '500', color: 'white' }
      expect(car?.name).toBeUndefined()
    })
  })
})
