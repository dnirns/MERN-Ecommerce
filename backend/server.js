const express = require('express')
const products = require('./data/data')

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
  const product = products.find(product => product._id === req.params.id)
  res.json(product)
})







//? START SERVER
app.listen(5000, console.log('server running on local host 5000'))
