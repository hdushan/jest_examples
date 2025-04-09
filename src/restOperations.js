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
    let response = await axios({
      method: 'post',
      url: 'http://httpbun.org/post',
      data: {
        message: message
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return JSON.parse(response.data.data).message
  } catch (error) {
    throw new Error(`Failed to echo: ${error.message}`)
  }
}

export { gender, echo }
