const OpenAI = require('openai')

export default async function openAi(message) {
  const openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const response = await openaiClient.responses.create({
    model: 'gpt-4o',
    input: message
  })

  return response.output_text
}
