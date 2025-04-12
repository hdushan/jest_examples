export type User = {
  name: string
  age: number
}

export function isVeteran(user: User): boolean {
  return user.age >= 60
}
