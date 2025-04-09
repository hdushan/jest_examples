import axios from 'axios'

async function gender(name) {
  try {
    let response = await axios.get(`https://api.genderize.io?name=${name}`)
    console.log(response.data)
    return response.data.gender
  } catch (error) {
    console.log(error)
  }
}

export { gender }
