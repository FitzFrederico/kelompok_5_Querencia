const express = require('express');

const router = express.Router();

router.get('/signin', async (req, res) => {
    res.render('pages/signin')
})

router.get('/signup', (req, res) => {
    res.render('pages/signup')
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email == "ha@hi.com" && password == "123") {
        req.session.isLoggedIn = true;
        res.redirect('/')
    }
    else {
        res.render('pages/signup')
    }
})


module.exports = router;