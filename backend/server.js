import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorHandlers.js'

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

app.use('/api/products', productRoutes)

//?ERROR HANDLER FUNCTIONS
app.use(notFound)

app.use(errorHandler)

//? START SERVER

//dotenv variable for port number
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
