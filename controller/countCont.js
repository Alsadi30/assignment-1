const generateCount = require('../services/countServ')

const countController = (req, res) => {
  let { string } = req.body
  if (!string) {
    return res.status(400).json({ message: 'No string provided' })
  }

  const stringCount = generateCount(string)

  res.json(stringCount)
}

module.exports = countController
