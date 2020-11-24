import mongoose from 'mongoose'
import dotenv from 'dotenv'
//?DATA
import users from './users.js'
import products from './products.js'
//?MODELS
import User from '../models/userModel.js'
import Product from '../models/productModel.js'
import Order from '../models/orderModel.js'
//?MONGODB CONNECTION FUNCTION
import connectDB from '../config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    //*DELETE ALL
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    //*IMPORT NEW ADMIN USER
    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id
    console.log('created users')
    //*MAP THROUGH PRODUCTS AND ADD ADMIN AS USER TO EACH ONE
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    console.log('mapped products')
    //*NEW DATABASE OF PRODUCTS WITH THE ADMIN USER ADDED
    await Product.insertMany(sampleProducts)

    console.log('NEW DATA SEEDED!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    //*DELETE ALL
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    console.log('DATA DESTROYED!')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

process.argv[2] === '-d' ? destroyData() : importData()
