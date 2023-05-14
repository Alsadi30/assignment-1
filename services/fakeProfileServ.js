const { faker } = require('@faker-js/faker')

const generateProfile = data => {
  let keyword = ['firstName', 'lastName', 'email', 'age', 'avater', 'address']

  let profile = {}

  data.map(value => {
    if (keyword.includes(value)) {
      if (value === 'firstName') {
        profile.firstName = faker.person.firstName()
      } else if (value === 'lastName') {
        profile.lastName = faker.person.lastName()
      } else if (value === 'email') {
        profile.email = faker.internet.email()
      } else if (value === 'age') {
        profile.age = faker.number.int({ min: 1, max: 130 })
      } else if (value === 'avater') {
        profile.avater = faker.image.avatar()
      } else if (value === 'address') {
        profile.address = faker.location.city()
      }
    }
  })
  return profile
}

module.exports = generateProfile
