import express from 'express'
import dotenv from 'dotenv'
import products from'./data/data.js'
import connectDB from './config/db.js'

//? LOAD DOTENV VARIABLES
dotenv.config()

//? CONNECT TO MONGODB ATLAS
connectDB()

const app = express()

//? ROUTES
//* HOME ROUTE
app.get('/', (req, res) => {
  res.send('api running')
})

//* GET ALL PRODUCTS ROUTE
app.get('/api/products', (req, res) => {
  res.json(products)
})

//* GET SINGLE PRODUCT ROUTE
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

//? START SERVER

//dotenv variable for port number
const PORT =  process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
