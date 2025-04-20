function greetByDaySwitch() {
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

const greetByTimeIfElse = () => {
  let greeting
  const date = new Date()
  let time = date.getHours()
  if (time < 10) {
    greeting = 'Good morning'
  } else if (time < 20) {
    greeting = 'Good day'
  } else {
    greeting = 'Good evening'
  }
  return greeting
}

const greetByTimeTernary = () => {
  const date = new Date()
  const time = date.getHours()
  const greeting =
    time < 10 ? 'Good morning' : time < 20 ? 'Good day' : 'Good evening'
  return greeting
}

describe('branchOperations: Switch', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2025-03-30'))
  })

  test('greetByDaySwitch: weekend', () => {
    expect(greetByDaySwitch()).toBe('It is Weekend')
  })

  afterAll(() => {
    jest.useRealTimers()
  })
})

describe('branchOperations: If-Else and Ternary', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('01 Apr 2025 11:00:00 GMT').getTime())
  })

  test('greetByTimeIfElse: evening', () => {
    expect(greetByTimeIfElse()).toBe('Good evening')
  })

  test('greetByTimeTernary: evening', () => {
    expect(greetByTimeTernary()).toBe('Good evening')
  })

  afterAll(() => {
    jest.useRealTimers()
  })
})
