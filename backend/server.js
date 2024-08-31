const app = require('./app')
const connectMongoDB = require('./config/database')

process.on('uncaughtException', (err) => {
    console.log(`Uncaught exception: ${err.message}`)
    server.close(() => process.exit(1))
})

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'backend/config/.env'
    })
}

connectMongoDB()

const PORT = process.env.PORT || 8000
const server = app.listen(PORT, () => {
    console.log(`>>> Server is up and running on port ${PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Unhandled promise rejection: ${err.message}`)
    server.close(() => process.exit(1))
})
