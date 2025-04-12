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
