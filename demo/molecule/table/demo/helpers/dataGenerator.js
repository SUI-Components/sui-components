import faker from 'faker'

export const generateDataTable = numRows =>
  new Array(numRows).fill(0).map(() => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    age: Math.round(Math.random() * 80) + 20,
    address: faker.address.streetAddress()
  }))

export const generateDataTableComplexCell = numRows =>
  new Array(numRows).fill(0).map(() => ({
    id: faker.random.uuid(),
    user: {
      name: faker.name.findName(),
      image: faker.image.avatar(),
      company: faker.company.companyName(),
      age: Math.round(Math.random() * 80) + 20,
      address: faker.address.streetAddress(),
      tags: faker.random.words()
    },
    comments: faker.lorem.text()
  }))
