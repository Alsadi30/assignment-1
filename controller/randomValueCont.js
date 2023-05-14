const generateRandomValue = require('../services/randomValueServ')

const getRandomValueController = (req, res) => {
  const { start, end } = req.body

  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return res.status(400).json({ message: 'Invalid input' })
  }

  const randomValue = parseInt(generateRandomValue(start, end))

  return res.json(randomValue)
}

module.exports = getRandomValueController
