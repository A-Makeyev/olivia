const path = require('path')
const multer = require('multer')

const fileFilter = (req, file, cb) => {
    const fileTypes = /jpg|jpeg|png/
    const mimetype = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
    
    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb(new Error('Please upload a valid image file'), false)
    }
}

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/')
    },

    filename: (req, file, cb) => {
        const uuid = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, a => (a ^ Math.random() * 16 >> a / 4).toString(16))
        const filename = file.originalname.split('.')[0] + '-' + Date.now() + '-' + uuid + '.png'
        cb(null, filename)
    }
})

exports.upload = multer({ storage: storage, fileFilter })