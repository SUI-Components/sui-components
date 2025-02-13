import {faker} from '@faker-js/faker'

export const getFullNames = (n = 0) => {
  return Array.from({length: n}, () => {
    const firstName = faker.person.firstName()
    const middleName = faker.person.middleName()
    const lastName = faker.person.lastName()
    const nameCode = `${firstName[0]}${middleName[0]}${lastName[0]}`
    return {name: `${firstName} ${middleName} ${lastName}`, code: nameCode}
  })
}
