import openAi from './openAi'

test('simple query', async () => {
  expect(await openAi('In one word, which is the largest planet?')).toMatch(
    /Jupiter/i
  )
})
