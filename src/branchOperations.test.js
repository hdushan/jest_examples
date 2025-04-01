const {
  expect,
  test,
  describe,
  beforeEach,
  afterAll
} = require('@jest/globals')

function greetByDay() {
  let text
  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = 'Soon it is Weekend'
      break
    case 0:
    case 6:
      text = 'It is Weekend'
      break
    default:
      text = 'Looking forward to the Weekend'
  }
  return text
}

describe('branchOperations: greetByDay', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2025-03-30'))
  })

  test('greetByDay: weekend', () => {
    expect(greetByDay()).toBe('It is Weekend')
  })

  afterAll(() => {
    jest.useRealTimers()
  })
})

const greetByTime = () => {
  let greeting
  const date = new Date()
  console.log('Date')
  console.log(date)
  let time = date.getHours()
  console.log('Time')
  console.log(time)
  if (time < 10) {
    greeting = 'Good morning'
  } else if (time < 20) {
    greeting = 'Good day'
  } else {
    greeting = 'Good evening'
  }
  return greeting
}

describe('branchOperations: greetByTime', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('01 Apr 2025 11:00:00 GMT').getTime())
  })

  test('greetByTime: evening', () => {
    console.log('Offset')
    console.log(new Date().getTimezoneOffset())
    expect(greetByTime()).toBe('Good evening')
  })

  afterAll(() => {
    jest.useRealTimers()
  })
})
