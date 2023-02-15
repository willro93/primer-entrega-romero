const express = require('express');
const productsRouter = require('./router/products.router.js')
const cartsRouter = require('./router/carts.router.js')

const app = express();

app.listen(8080, ()=> console.log('server up!'));

//NOTE - middleware para recibir json
app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use('/api/products', productsRouter);

app.use('/api/carts', cartsRouter);