const { faker } = require('@faker-js/faker')
const generateProfile = require('../services/fakeProfileServ')

const fakeProfileController = (req, res) => {
  let { data } = req.body

  if (!data) {
    return res.status(400).json({ message: 'Missing attributes' })
  }
  const profile = generateProfile(data)
  res.json(profile)
}

module.exports = fakeProfileController
