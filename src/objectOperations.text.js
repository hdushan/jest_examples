const { expect } = require('@jest/globals')

test('Object operations', () => {
  // Create an Object
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
  }
  // or
  const person2 = new Object()
  person2.firstName = 'John'
  person2.lastName = 'Doe'
  // or
  const person3 = {}
  person3.firstName = 'John'
  person3.lastName = 'Doe'
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
})
