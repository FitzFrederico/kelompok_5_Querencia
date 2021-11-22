const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'som3_secret_keys',
    cookie: {}
}))

app.use((req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
})

mongoose.connect(('mongodb+srv://Querencia:Kelompok5@cluster0.ocilh.mongodb.net/Querencia?retryWrites=true&w=majority'), (err, res) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('Database terhubung!')
        }
})


const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use('/', indexRouter);
app.use('/user', userRouter);

//port
app.listen('3000', ()=> {
    console.log('Server sudah berjalan di port 3000')
})