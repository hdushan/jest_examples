import axios from 'axios'

async function gender(name) {
  try {
    let response = await axios.get(`https://api.genderize.io?name=${name}`)
    return response.data.gender
  } catch (error) {
    throw new Error(`Failed to fetch gender data: ${error.message}`)
  }
}

async function echo(message) {
  try {
    let response = await axios.post(
      'http://httpbun.org/post',
      { message: message },
      { headers: { 'Content-Type': 'application/json' } }
    )
    // The httpbun.org API returns the message in the json property
    return response.data.json.message
  } catch (error) {
    throw new Error(`Failed to echo: ${error.message}`)
  }
}

export { gender, echo }
