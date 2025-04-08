const { expect } = require('@jest/globals')

test('Object operations', () => {
  // Create an Object
  let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
  }
  expect(person.age).toBe(50)
  // or
  const person2 = new Object()
  person2.firstName = 'John'
  person2.lastName = 'Doe'
  expect(person2['lastName']).toBe('Doe')
  expect(JSON.stringify(person2)).toEqual(
    '{"firstName":"John","lastName":"Doe"}'
  )
  // or
  const person3 = {}
  person3.firstName = 'John'
  person3.lastName = 'Doe'
  delete person3.firstName
  expect(person3['firstName']).toBeUndefined()
  expect(Object.values(person3)).toEqual(['Doe'])
  // Objects can contain properties and methods
  const person4 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
  expect(person4.fullName()).toBe('John Doe')
  expect(Object.keys(person4)).toEqual([
    'firstName',
    'lastName',
    'age',
    'eyeColor',
    'fullName'
  ])

  // type
  function Person(first, last) {
    this.firstName = first
    this.lastname = last
    this.age = 40
  }
  let person5 = new Person('hans', 'Raj')
  expect(person5.age).toEqual(40)

  // Create an Object
  const person6 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50
  }

  // Destructuring, showing an alias example too
  let { firstName, lastName: lName, country = 'US' } = person6
  expect(firstName).toBe('John')
  expect(lName).toBe('Doe')
  expect(country).toBe('US')
})
