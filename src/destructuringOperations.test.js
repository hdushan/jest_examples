const { expect, describe } = require('@jest/globals')

describe('Destructuring operations', () => {
  test('Destructure Object, including an example alias', () => {
    // Create an Object
    let person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 50,
      eyeColor: 'blue'
    }

    // Destructuring, showing an alias example too
    let { firstName, lastName: lName, country = 'US' } = person
    expect(firstName).toBe('John')
    expect(lName).toBe('Doe')
    expect(country).toBe('US')
  })

  test('Destructure Array', () => {
    // Create an Array
    const fruits = ['Bananas', 'Oranges', 'Apples', 'Mangos']

    // Destructuring
    let [fruit1, fruit2] = fruits
    expect(fruit1).toBe('Bananas')
    expect(fruit2).toBe('Oranges')

    // Destructuring, skip array values
    let [fruitX1, , , fruitX2] = fruits
    expect(fruitX1).toBe('Bananas')
    expect(fruitX2).toBe('Mangos')

    // Destructuring, rest property
    let [fruitY1, fruitY2, ...rest] = fruits
    expect(fruitY1).toBe('Bananas')
    expect(fruitY2).toBe('Oranges')
    expect(rest).toEqual(['Apples', 'Mangos'])
  })
})
