const ErrorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')
const user = require('./controllers/user')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'backend/config/.env'
    })
}

app.use('/api/v2/user', user)
app.use(ErrorHandler)

module.exports = app