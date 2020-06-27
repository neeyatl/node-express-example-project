/* eslint-disable no-undef */
const express = require('express') // Old non es6 way of doing it
const path = require('path')
const hoganMiddleware = require('hogan-middleware')
const bodyParser = require('body-parser')

const app = express() // Create the app by calling the express function

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)
app.use(express.static(path.join(__dirname, 'static')))

// Set up the app to use 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const indexRouter = require('./routes/index-route')
const registerRouter = require('./routes/register')
const userRouter = require('./routes/user')

app.use('/register', registerRouter)

// Middleware declaration
// This middleware will not apply to registerRouter since this is declared after registerRoute's declaration
app.use((req, res, next) => {
    req.timestamp = new Date().toString()
    next() // Must call this function or else the app will hang
})
app.use('/', indexRouter)
app.use('/users', userRouter)

const port = 8080
app.listen(port) // localhost port number. Can be: 3000, 5000, 8000, 8080
console.log('Server is running on http://localhost:' + port + '/')