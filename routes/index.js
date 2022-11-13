let router = require('express').Router()

let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')

router.use('/user', user)
router.use('/city', city)
router.use('/itinerary', itinerary)

module.exports = router;
