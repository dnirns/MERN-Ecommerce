const express = require('express')
const products = require('./data/products')

const app = express()



//? ROUTES

//* HOME ROUTE
app.get('/', (req, res) => {
  res.send('api running')
})

//* ALL PRODUCTS ROUTE
app.get('/api/products', (req, res) => {
  res.json(products)
})




//? start server
app.listen(5000, console.log('server running on local host 5000'))
