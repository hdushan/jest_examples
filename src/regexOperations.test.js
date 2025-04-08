describe('Regex Operations', () => {
  const testString = 'Hans Raj does not like the word Raj in his name'

  test('Normal string search', () => {
    let offset = testString.search('Raj')
    expect(offset).toBe(5)
  })

  test('Regex string search', () => {
    let offset = testString.search(/raj/i)
    expect(offset).toBe(5)
  })
})
