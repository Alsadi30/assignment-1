const express = require('express')
const setMiddleware = require('./middleware')
const setRouter = require('./routes/index')

const app = express()

setMiddleware(app)
app.use(setRouter)

app.get('/', (req, res) => {
  res.send('I am ok , you should start working')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  console.log('Server in running on Port 8080')
})
