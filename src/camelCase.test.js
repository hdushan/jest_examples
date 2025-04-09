import { camelize } from './camelCase.js'

test('mix of space and special chars', () => {
  expect(camelize('This is&a*sentence')).toBe('thisIsASentence')
})

test('underscores', () => {
  expect(camelize('This_is_a_sentence')).toBe('thisIsASentence')
})

test('dashes', () => {
  expect(camelize('This-is-a-sentence')).toBe('thisIsASentence')
})

test('single word', () => {
  expect(camelize('This')).toBe('this')
})

test('numbers', () => {
  expect(camelize('This is8a9sentence')).toBe('thisIsASentence')
})

test('multiple spaces between words', () => {
  expect(camelize('This  is a     sentence')).toBe('thisIsASentence')
})

test('space after sentence', () => {
  expect(camelize('This  is a     sentence ')).toBe('thisIsASentence')
})

test('space before sentence', () => {
  expect(camelize('  This  is a     sentence')).toBe('thisIsASentence')
})
