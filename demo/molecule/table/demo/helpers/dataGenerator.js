import faker from 'faker'

export const generateDataTable = numRows =>
  new Array(numRows).fill(0).map(() => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: Math.round(Math.random() * 80) + 20,
    address: faker.address.streetAddress()
  }))
