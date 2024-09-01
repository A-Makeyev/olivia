const { upload } = require('../multer')
const { isAuthenticated, isAdmin } = require('../middleware/auth')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const welcomeEmail = require('../templates/welcomeEmail')
const ErrorHandler = require('../utils/ErrorHandler')
const sendToken = require('../utils/jwtToken')
const sendMail = require('../utils/sendMail')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()
const dev = process.env.NODE_ENV !== 'PRODUCTION'

router.post('/create-user', upload.single('file'), async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const user = await User.findOne({ email })
    const uploadedFile = req.file

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
      let errMsg = `User with email "${user.email}" already exists`
      dev && console.log(errMsg)
      return next(new ErrorHandler(errMsg, 400))
    }

    const fileUrl = uploadedFile ? path.join(uploadedFile.filename) : 'default-avatar'
    dev && console.log(uploadedFile ? uploadedFile : 'No file selected')

    const newUser = {
      name: name,
      email: email,
      password: password, 
      avatar: fileUrl
    }

    const activationToken = createActivationToken(newUser)
    const activationLink = `http://localhost:3000/activation/${activationToken}`

    try {
      await sendMail({
        email: newUser.email,
        subject: 'Activate Your Olivia Account',
        html: welcomeEmail(newUser.name, activationLink)
      }).then(() => {
        res.status(201).json({
          success: true,
          newUser
        })
      })

      dev && console.log(`Activation email has been sent to "${newUser.email}"`)

    } catch(err) {
      return next(new ErrorHandler(err.message, 500))
    }
  } catch (err) {
    return next(new ErrorHandler(err.message, 400))
  }
})

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: '5m',
  })
}

router.post('/activation', catchAsyncErrors(async (req, res, next) => {
  try {
    const { activationToken } = req.body
    const newUser = jwt.verify(activationToken, process.env.ACTIVATION_SECRET)
    
    if (!newUser) {
      return next(new ErrorHandler('Invalid Token', 400))
    }

    const { name, email, password, avatar } = newUser
    let user = await User.findOne({ email })

    if (user) {
      return next(new ErrorHandler(`User with email "${user.email}" already exists`, 400))
    }

    user = await User.create({
      name,
      email,
      password,
      avatar
    })

    dev && console.log(user)
    
    if (user) { 
      res.status(201).json({
        success: true,
        user
      })
      sendToken(user, 201, res)
    } else {
        res.status(401)
        throw new Error('Invalid User Data')
    }

  } catch (err) {
    return next(new ErrorHandler(err.message, 500))
  }
}))

module.exports = router