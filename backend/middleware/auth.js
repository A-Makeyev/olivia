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
    
    dev && console.log(decodedToken)

    const authorizedUser = await User.findById(decodedToken.id)

    if (!authorizedUser) {
      return next(new ErrorHandler('User not found', 400))
    }

    dev && console.log(authorizedUser)

    req.user = authorizedUser
    next()
})