const express = require('express');
const productsRouter = require('./router/products.router.js')

const app = express();

app.listen(8080, ()=> console.log('server up!'));

app.use(express.json())
app.use(express.urlencoded({extends: true}))

app.use('/api/products', productsRouter)

