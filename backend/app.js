const ErrorHandler = require('./utils/ErrorHandler')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(fileUpload({ useTempFiles: true }))

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'backend/config/.env'
    })
}

app.use(ErrorHandler)

module.exports = app