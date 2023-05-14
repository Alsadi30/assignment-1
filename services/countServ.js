const generateCount = string => {
  let stringCount = {}

  stringCount.letter = (string.match(/[a-zA-Z]/g) || []).length
  stringCount.symbol = (string.match(/[^a-zA-Z0-9\s]/g) || []).length
  stringCount.number = (string.match(/\d/g) || []).length

  return stringCount
}

module.exports = generateCount
