const mongoose = require('mongoose')

const connectMongoDB = async () => {
    try {
        mongoose.connect(process.env.DB_URI).then((data) => {
            console.log(`>>> Connected to ${data.connection.host}`)
        })
    } catch (err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectMongoDB