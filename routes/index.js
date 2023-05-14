const router = require('express').Router()
const randomValueRouter = require('./randomValueRoute')
const fakeProfileRouter = require('./fakeProfileRoute')
const countRouter = require('./countRoute')

router.use('/api/v1/random-value', randomValueRouter)
router.use('/api/v1/fake-profile', fakeProfileRouter)
router.use('/api/v1/count', countRouter)

module.exports = router
