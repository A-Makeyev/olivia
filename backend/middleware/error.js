const ErrorHandler = require('../utils/ErrorHandler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    // wrong mongodb id
    if (err.name === 'CastError') {
        const msg = `Resources not found with this id, Invalid ${err.path}`
        err = new ErrorHandler(msg, 400)
    }

    // duplicate key 
    if (err.code === 11000) {
        const msg = `Duplicate key ${Object.keys(err.keyValue)}`
        err = new ErrorHandler(msg, 400)
    }

    // wrong jwt
    if (err.name === 'JsonWebTokenError') {
        const msg = `Invalid token ${err.message}`
        err = new ErrorHandler(msg, 400)
    }

    // expired jwt
    if (err.name === 'TokenExpiredError') {
        const msg = `Expired token ${err.message}`
        err = new ErrorHandler(msg, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}