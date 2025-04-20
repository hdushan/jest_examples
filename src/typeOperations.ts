export type User = {
  name: string
  age: number
  gender?: string
}

export interface Car {
  make: string
  year: number
  model?: string
}

export function isVeteran(user: User): boolean {
  return user.age >= 60
}

export function isTooOld(car: Car) {
  return car.year < 2020
}

export function fnWithTypeInArgumentsReturnsPromise(person: {
  name: string
  age: number
}): Promise<string> {
  return new Promise((resolve, reject) => {
    if (person.age < 21) {
      reject(new Error(`${person.name} is young`))
    }
    resolve(`${person.name} is old`)
  })
}
