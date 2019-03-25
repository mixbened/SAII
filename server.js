require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const PORT = process.env.PORT || 8060
const app = express()

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(bodyParser.json())

app.use(express.static('web-client/dist'));


app.listen(PORT, () => console.log('App is rocking on Port ' + PORT))
