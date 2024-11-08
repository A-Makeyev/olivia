const ErrorHandler = require('../utils/ErrorHandler')
const catchAsyncErrors = require('./catchAsyncErrors')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const dev = process.env.NODE_ENV !== 'PRODUCTION'

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler('Unauthorized', 401))
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const authorizedUser = await User.findById(decodedToken.id)

    dev && console.log('Decoded Token:', decodedToken)
    dev && console.log('Authorized User:', authorizedUser)

    if (!authorizedUser) {
      return next(new ErrorHandler('User not found', 400))
    }

    req.user = authorizedUser
    next()
})