describe('Set Operations', () => {
  test('Array to Set', () => {
    let arr = [10, 10, 20, 20, 30, 30]
    let s1 = new Set(arr)
    expect(s1.size).toEqual(3)
    expect(s1.has(10)).toBeTruthy()
    expect(s1.has(20)).toBeTruthy()
    expect(s1.has(30)).toBeTruthy()
    expect(Array.from(s1.values())).toEqual([10, 20, 30]) // array from an iterable
    expect(Array.from(s1)).toEqual([10, 20, 30]) // array from a set

    s1.add(50)
    expect(Array.from(s1)).toEqual([10, 20, 30, 50])
  })
})
