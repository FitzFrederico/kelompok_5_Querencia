 const express = require('express')
 const Destination = require('../models/destination')
 const router = express.Router()

 router.get('/', (req, res)=> {
     res.render('pages/index')
 })

 router.get('/destinations', async (req, res) => {
     var data = await Destination.find();
     res.render('pages/destinations', {destinations: data});
 })

 router.get('/flights', (req, res) => {
    res.render('pages/flights')
 })
 
 router.get('/trains', (req, res) => {
    res.render('pages/trains')
})
router.get('/hotels', (req, res) => {
   res.render('pages/hotels')
})
router.get('/mybooking', (req, res) => {
    res.render('pages/mybooking')
 })
router.get('/user', (req, res) => {
    res.render('pages/user')
})
router.get('/promotions', (req, res) => {
    res.render('pages/promotions')
})
router.get('/payments', (req, res) => {
    res.render('pages/payments')
})
router.get('/contactus', (req, res) => {
    res.render('pages/contactus')
})
router.get('/howtobook', (req, res) => {
    res.render('pages/howtobook')
})
router.get('/destId', (req, res) => {
    res.render('pages/destId')
})
router.get('/destAustralia', (req, res) => {
    res.render('pages/destAustralia')
})
router.get('/destSwitzerland', (req, res) => {
    res.render('pages/destSwitzerland')
})
router.get('/destUS', (req, res) => {
    res.render('pages/destUS')
})
router.get('/destZimbabwe', (req, res) => {
    res.render('pages/destZimbabwe')
})
router.get('/destJapan', (req, res) => {
    res.render('pages/destJapan')
})
router.get('/destBrz', (req, res) => {
    res.render('pages/destBrz')
})
router.get('/destFrance', (req, res) => {
    res.render('pages/destFrance')
})
router.get('/destUAE', (req, res) => {
    res.render('pages/destUAE')
})

module.exports = router;