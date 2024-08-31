const { upload } = require('../multer')
const { isAuthenticated, isAdmin } = require('../middleware/auth')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require('../utils/ErrorHandler')
// const sendToken = require('../utils/jwtToken')
// const sendMail = require('../utils/sendMail')
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
            console.log(`Error deleting file -> ${uploadedFile.originalname}`)
            res.status(500).json({ message: `Error deleting "${uploadedFile.originalname}"` })
          } else {
            console.log(`Deleted file -> ${uploadedFile.originalname}`)
            res.json({ message: `Deleted "${uploadedFile.originalname}" because user already exists`})
          }

          if (fs.existsSync(uploadedFile.path)) {
            fs.unlinkSync(uploadedFile.path)
          }
        })
      }
      
      return next(new ErrorHandler(`User with email "${user.email}" already exists`, 400))
    }

    const fileUrl = uploadedFile ? path.join(uploadedFile.filename) : 'default-avatar'
    dev && console.log(uploadedFile ? uploadedFile : 'No file selected')

    const newUser = await User.create({
      name: name,
      email: email,
      password: password, 
      avatar: fileUrl
    })

    if (newUser) {
      res.status(201).json({
        newUser,
        success: true
      })
    } else {
        res.status(401)
        throw new Error('Invalid User Data')
    }

    dev && console.log(newUser)

  } catch (err) {
    return next(new ErrorHandler(err.message, 400))
  }
})

module.exports = router