let router = require('express').Router()

let user = require('./user')
let city = require('./city')
let hotel = require('./hotel')

router.use('/user', user)
router.use('/city', city)
router.use('/hotel', hotel)

module.exports = router;