let router = require('express').Router()

let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')
let hotel = require('./hotel')

router.use('/user', user)
router.use('/city', city)
router.use('/itinerary', itinerary)
router.use('/hotel', hotel)

module.exports = router;