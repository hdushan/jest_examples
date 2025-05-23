import { gender, echo } from './restOperations'
import axios from 'axios'

// This line has to be at the top level of the file, not in before blocks
// as entire axios object needs to be blocked
jest.mock('axios')

describe('REST Operations with axios mocked', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('GET operation', () => {
    beforeEach(() => {
      axios.get.mockReset()
    })

    test('Should return gender when API call succeeds', async () => {
      // Arrange
      axios.get.mockResolvedValue({
        data: {
          gender: 'female',
          name: 'alice',
          probability: 0.99,
          count: 12345
        }
      })

      // Act
      const result = await gender('alice')

      // Assert
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.genderize.io?name=alice'
      )
      expect(result).toBe('female')
    })

    test('Should throw error when API call fails', async () => {
      // Arrange
      const errorMessage = 'Network Error'
      axios.get.mockRejectedValue(new Error(errorMessage))

      // Act & Assert
      await expect(gender('alice')).rejects.toThrow(
        `Failed to fetch gender data: ${errorMessage}`
      )
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(
        'https://api.genderize.io?name=alice'
      )
    })
  })

  describe('POST operation', () => {
    beforeEach(() => {
      axios.post.mockReset()
    })

    test('Should echo the message when API call succeeds', async () => {
      // Arrange
      axios.post.mockResolvedValue({
        data: {
          json: {
            message: '123'
          }
        }
      })

      // Act
      const result = await echo('123')

      // Assert
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith(
        'http://httpbun.org/post',
        { message: '123' },
        { headers: { 'Content-Type': 'application/json' } }
      )
      expect(result).toBe('123')
    })

    test('Should throw error when API call fails', async () => {
      // Arrange
      const errorMessage = 'Echo Error'
      axios.post.mockRejectedValue(new Error(errorMessage))

      // Act & Assert
      await expect(echo('123')).rejects.toThrow(
        `Failed to echo: ${errorMessage}`
      )
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith(
        'http://httpbun.org/post',
        { message: '123' },
        { headers: { 'Content-Type': 'application/json' } }
      )
    })
  })
})
