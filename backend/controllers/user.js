const { upload } = require('../multer')
const { isAuthenticated, isAdmin } = require('../middleware/auth')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const welcomeEmail = require('../templates/welcomeEmail')
const ErrorHandler = require('../utils/ErrorHandler')
const setToken = require('../utils/jwtToken')
const sendMail = require('../utils/sendMail')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()
const dev = process.env.NODE_ENV !== 'PRODUCTION'

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  try {
    const { name, email, password, avatar } = req.body
    const user = await User.findOne({ email })
    const uploadedFile = avatar || req.file

    if (user) {
      if (uploadedFile) {
        fs.unlink(uploadedFile.path, (err) => {
          if (err) {
            let errMsg = `Error deleting "${uploadedFile.originalname}"`
            console.log(errMsg)
            res.status(500).json({ message: errMsg })
          } else {
            dev && console.log(`Deleted file -> ${uploadedFile.originalname}`)
          }

          if (fs.existsSync(uploadedFile.path)) {
            fs.unlinkSync(uploadedFile.path)
          }
        })
      }

      dev && console.log(`User with email "${user.email}" already exists`)
      
      return next(new ErrorHandler('User with this email already exists', 400))
    }

    const fileUrl = uploadedFile ? path.join(uploadedFile.filename) : 'default-avatar'
    dev && uploadedFile && console.log(uploadedFile)

    const newUser = {
      name: name,
      email: email,
      password: password, 
      avatar: fileUrl
    }

    const activationToken = jwt.sign(newUser, process.env.ACTIVATION_SECRET, {
      algorithm: 'HS256', expiresIn: '5m' 
    })

    const activationLink = `http://localhost:3000/activation/${activationToken}`

    try {
      await sendMail({
        email: newUser.email,
        subject: 'Activate Your Olivia Account',
        html: welcomeEmail(newUser.name, activationLink)
      })

      res.status(201).json({
        success: true,
        activationToken: activationToken,
        message: `Activation link has been sent to "${newUser.email}"`,
      })

      dev && console.log(`Activation token has been sent to "${newUser.email}"`)

    } catch(err) {
      return next(new ErrorHandler(err.message, 500))
    }
  } catch (err) {
    return next(new ErrorHandler(err.message, 400))
  }
})

router.post('/activation', catchAsyncErrors(async (req, res, next) => {
  try {
    const { activationToken } = req.body
    const pendingUser = jwt.verify(activationToken, process.env.ACTIVATION_SECRET)

    dev && console.log(pendingUser)

    if (!pendingUser) {
      return next(new ErrorHandler('Invalid Token', 400))
    }

    const { name, email, password, avatar } = pendingUser
    let newUser = await User.findOne({ email })

    if (newUser) {
      return next(new ErrorHandler(`User with email "${user.email}" already exists`, 400))
    }

    newUser = await User.create({
      name,
      email,
      password,
      avatar
    })

    dev && console.log(newUser)

    if (newUser) { 
      setToken(newUser, res, 201)
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid User Data'
      })
    }

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}))

module.exports = router