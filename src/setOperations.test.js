describe('Set Operations', () => {
  let arr = [10, 10, 20, 20, 30, 30]
  let s1 = new Set(arr)

  describe('Set Creation', () => {
    test('creating a set from an array removes duplicates', () => {
      expect(s1.size).toEqual(3)
    })
  })

  describe('Set Membership', () => {
    test('checking if elements exist in the set', () => {
      expect(s1.has(10)).toBeTruthy()
      expect(s1.has(20)).toBeTruthy()
      expect(s1.has(30)).toBeTruthy()
      expect(s1.has(40)).toBeFalsy()
    })
  })

  describe('Set to Array Conversion', () => {
    test('converting set to array using Array.from with values()', () => {
      expect(Array.from(s1.values())).toEqual([10, 20, 30])
    })

    test('converting set to array using Array.from directly', () => {
      expect(Array.from(s1)).toEqual([10, 20, 30])
    })
  })

  describe('Set Modification', () => {
    test('adding elements to a set', () => {
      s1.add(50)
      expect(Array.from(s1)).toEqual([10, 20, 30, 50])
    })
  })
})
