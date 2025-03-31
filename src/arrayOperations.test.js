test('Array operations', () => {
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
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
})
