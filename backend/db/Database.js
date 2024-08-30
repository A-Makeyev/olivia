const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`>>> Connected to ${data.connection.host}`)
    })
}

module.exports = connectDB