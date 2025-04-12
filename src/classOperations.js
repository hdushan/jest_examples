import { gender } from './restOperations'

class Person {
  constructor(name) {
    this.name = this.#capitalizeWord(name)
    this.gender = null
    this.initialized = false
  }

  // This is a common pattern called "two-phase construction" where we 
  // separate synchronous initialization from async operations,
  // as constructors cannot be async
  async initialize() {
    try {
      this.gender = await Person.#getGender(this.name)
      this.initialized = true
      return this
    } catch (error) {
      throw new Error(`Failed to initialize person: ${error.message}`)
    }
  }

  isMale() {
    if (!this.initialized) {
      throw new Error('Person not fully initialized. Call initialize() first.')
    }
    return this.gender === 'male'
  }

  // static private method
  static async #getGender(name) {
    return await gender(name)
  }

  // private method
  #capitalizeWord(word) {
    return word
      .toLowerCase()
      .trim()
      .replace(/^./, (startCharOfWord) => startCharOfWord.toUpperCase())
  }
}

export { Person }
