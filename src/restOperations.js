import axios from 'axios'

async function gender(name) {
  try {
    let response = await axios.get(`https://api.genderize.io?name=${name}`)
    return response.data.gender
  } catch (error) {
    throw new Error(`Failed to fetch gender data: ${error.message}`)
  }
}

export { gender }
