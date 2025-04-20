const OpenAI = require('openai')

export default async function openAi(message) {
  const openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const response = await openaiClient.responses.create({
    model: 'gpt-4o',

    // 'developer' messages provide the system's rules and business logic, like a function definition.
    // user messages provide inputs and configuration to which the developer message instructions
    // are applied, like arguments to a function.
    input: [
      { role: 'developer', content: 'Talk like a news reporter' },
      { role: 'user', content: message }
    ]
  })

  return response.output_text
}
