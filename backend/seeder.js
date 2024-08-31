const User = require('./models/user')
const connectMongoDB = require('./config/database')
const users = require('./data/users')

if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: 'backend/config/.env'
    })
}

connectMongoDB()

const importData = async () => {
    try {
        await User.deleteMany()
        // await Order.deleteMany()
        // await Product.deleteMany()

        const createdUsers = await User.insertMany(users)
        // const adminUser = createdUsers[0]._id
        // const sampleProducts = products.map((product) => {
        //     return { ...product, user: adminUser }
        // })
        
        // await Product.insertMany(sampleProducts)
        console.log('DATA IMPORTED')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        // await Order.deleteMany()
        // await Product.deleteMany()

        console.log('DATA DESTROYED')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}