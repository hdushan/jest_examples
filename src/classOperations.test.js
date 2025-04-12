import { Person } from './classOperations'
import * as restOperations from './restOperations'

// Mock the gender function from restOperations
jest.mock('./restOperations', () => ({
  gender: jest.fn()
}))

describe('Person Class', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('Initialization', () => {
    test('should create an uninitialized person with capitalized name', () => {
      // Act
      const person = new Person('hans')

      // Assert
      expect(person.name).toBe('Hans')
      expect(person.gender).toBeNull()
      expect(person.initialized).toBe(false)
    })

    test('should initialize with male gender', async () => {
      // Arrange
      restOperations.gender.mockResolvedValue('male')
      const person = new Person('hans')

      // Act
      await person.initialize()

      // Assert
      expect(person.gender).toBe('male')
      expect(person.initialized).toBe(true)
      expect(restOperations.gender).toHaveBeenCalledWith('Hans')
    })

    test('should initialize with female gender', async () => {
      // Arrange
      restOperations.gender.mockResolvedValue('female')
      const person = new Person('emma')

      // Act
      await person.initialize()

      // Assert
      expect(person.gender).toBe('female')
      expect(person.initialized).toBe(true)
      expect(restOperations.gender).toHaveBeenCalledWith('Emma')
    })

    test('should handle initialization errors', async () => {
      // Arrange
      const errorMessage = 'API error'
      restOperations.gender.mockRejectedValue(new Error(errorMessage))
      const person = new Person('alex')

      // Act & Assert
      await expect(person.initialize()).rejects.toThrow(
        `Failed to initialize person: ${errorMessage}`
      )
      expect(person.initialized).toBe(false)
    })
  })

  describe('Methods', () => {
    test('isMale should return true for male gender', async () => {
      // Arrange
      restOperations.gender.mockResolvedValue('male')
      const person = new Person('john')
      await person.initialize()

      // Act & Assert
      expect(person.isMale()).toBe(true)
    })

    test('isMale should return false for female gender', async () => {
      // Arrange
      restOperations.gender.mockResolvedValue('female')
      const person = new Person('jane')
      await person.initialize()

      // Act & Assert
      expect(person.isMale()).toBe(false)
    })

    test('isMale should throw error if called before initialization', () => {
      // Arrange
      const person = new Person('test')

      // Act & Assert
      expect(() => person.isMale()).toThrow(
        'Person not fully initialized. Call initialize() first.'
      )
    })
  })

  describe('Name Capitalization', () => {
    test('should capitalize first letter of name', () => {
      // Arrange & Act
      const person1 = new Person('hans')
      const person2 = new Person('EMMA')
      const person3 = new Person('alex')

      // Assert
      expect(person1.name).toBe('Hans')
      expect(person2.name).toBe('Emma')
      expect(person3.name).toBe('Alex')
    })

    test('should handle names with leading/trailing spaces', () => {
      // Arrange & Act
      const person1 = new Person('  john  ')
      const person2 = new Person(' jane ')

      // Assert
      expect(person1.name).toBe('John')
      expect(person2.name).toBe('Jane')
    })
  })
})
