const express = require('express')
const router = express.Router()
const Favourite = require('../models/favourite')
const CheckOut = require('../models/checkout')

router.post('/favourites',(req,res) => {
    Favourite.create(req.body).then(favourite => res.send(favourite))
})
router.post('/checkouts',(req,res) => {
    CheckOut.create(req.body).then(checkout => res.send(checkout))
})

module.exports = router