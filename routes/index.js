let router = require('express').Router()

let user = require('./user')
let city = require('./city')

router.use('/user', user)
router.use('/city', city)

module.exports = router;
