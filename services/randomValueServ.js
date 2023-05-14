const generateRandomValue = (start, end) => {
  if (end > start || end === start) {
    return Math.floor(Math.random() * (end - start) + start)
  } else {
    return Math.floor(Math.random() * (start - end) + end)
  }
}

module.exports = generateRandomValue
