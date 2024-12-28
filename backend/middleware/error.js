const ErrorHandler = require('../utils/ErrorHandler')

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal Server Error'

    // wrong mongodb id
    if (err.name === 'CastError') {
        err = new ErrorHandler(`Resources not found with this id, Invalid ${err.path}`, 400)
    }

    // duplicate key 
    if (err.code === 11000) {
        err = new ErrorHandler(`Duplicate key ${Object.keys(err.keyValue)}`, 400)
    }

    // wrong jwt
    if (err.name === 'JsonWebTokenError') {
        err = new ErrorHandler(err.message, 400)
    }

    // expired jwt
    if (err.name === 'TokenExpiredError') {
        err = new ErrorHandler(err.message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}