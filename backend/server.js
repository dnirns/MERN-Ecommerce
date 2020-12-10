import express from 'express'
import path from 'path'
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

app.use('/api/products', productRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('api running')
  })
}

//?ERROR HANDLER FUNCTIONS
app.use(notFound)

app.use(errorHandler)

//? START SERVER

//dotenv variable for port number
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running on port ${PORT}`))
