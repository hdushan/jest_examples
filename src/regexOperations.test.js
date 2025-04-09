const { expect } = require('@jest/globals')

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

  test('Normal string replace', () => {
    let newTest = testString.replace('does not like', 'likes')
    expect(newTest).toBe('Hans Raj likes the word Raj in his name')
  })

  test('Regex string replace', () => {
    let newTest = testString.replace(/Does Not Like/i, 'likes')
    expect(newTest).toBe('Hans Raj likes the word Raj in his name')
  })

  test('Normal string replaceAll', () => {
    let newTest = testString.replaceAll('Raj', 'RAJ')
    expect(newTest).toBe('Hans RAJ does not like the word RAJ in his name')
  })

  test('Regex string replace All/Global', () => {
    let newTest = testString.replace(/RAJ/gi, 'RAJ')
    expect(newTest).toBe('Hans RAJ does not like the word RAJ in his name')
  })

  test('Regex string contains check', () => {
    let doesItContain = /raj/i.test(testString)
    expect(doesItContain).toBe(true)
  })

  test('Regex extract match as object', () => {
    // Only first match is returned
    let first_match = /raj/i.exec(testString)

    // Returns an object that looks like:
    // [
    //   'Raj',
    //   index: 5,
    //   input: 'Hans Raj does not like the word Raj in his name',
    //   groups: undefined
    // ]
    expect(first_match.length).toBe(1)
    expect(typeof first_match).toBe('object')
    expect(first_match[0]).toBe('Raj')
    expect(first_match.index).toBe(5)
  })

  test('Regex extract match with no match found', () => {
    let match = /rajx/i.exec(testString)
    expect(match).toBeNull()
  })

  test('Regex extract all matches', () => {
    let matches = testString.matchAll(/raj/gi)
    expect(Array.from(matches).length).toBe(2)
    expect(typeof matches).toBe('object')
    // iterable object, so supports forEach, for x of matches etc
    expect(Symbol.iterator in Object(matches)).toBe(true)
  })
})
