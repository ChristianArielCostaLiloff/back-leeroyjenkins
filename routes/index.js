let router = require('express').Router()

let user = require('./user')
let city = require('./city')
let itinerary = require('./itinerary')
let hotel = require('./hotel')
let show = require('./show')
let reaction = require('./reaction')
let comment = require('./comment')

router.use('/auth', user)
router.use('/city', city)
router.use('/itinerary', itinerary)
router.use('/hotel', hotel)
router.use('/show', show)
router.use('/reaction', reaction)
router.use('/comment', comment)

module.exports = router;