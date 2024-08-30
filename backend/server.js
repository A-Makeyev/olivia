const app = require('./app')
const connectDB = require('./db/Database')

process.on('uncaughtException', (err) => {
    console.log(`Uncaught exception: ${err.message}`)
    server.close(() => process.exit(1))
})

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'backend/config/.env'
    })
}

connectDB()

const PORT = process.env.PORT || 8000
const server = app.listen(PORT, () => {
    console.log(`>>> Server is up and running on http://localhost:${PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log(`Unhandled promise rejection: ${err.message}`)
    server.close(() => process.exit(1))
})
