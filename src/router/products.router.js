const { Router } = require('express');

const router = Router();

const products = [
    {
      id: "1",
      title: "Shampoo Sólido de Romero",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto1.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "2",
      title: "Acondicionador Sólido de Canéla",
      description: "El mejor producto",
      price: "160",
      thumbnail: "foto2.jpg",
      code: "aco1",
      stock: "200 unidades"
    },
    {
      id: "3",
      title: "Shampoo Sólido de Maracuyá",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto3.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "4",
      title: "Shampoo Sólido de Linaza",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto4.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "5",
      title: "Shampoo Sólido de Carbón",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto5.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "6",
      title: "Shampoo Sólido de Café",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto6.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "7",
      title: "Shampoo Sólido de Cola de caballo",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto7.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "8",
      title: "Shampoo Sólido de Avena",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto8.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "9",
      title: "Acondicionador Sólido de Coco ",
      description: "El mejor shampoo",
      price: "160",
      thumbnail: "foto9.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "10",
      title: "Shampoo Sólido de Chocolate",
      description: "El mejor shampoo",
      price: "150",
      thumbnail: "foto10.jpg",
      code: "shamp1",
      stock: "500 unidades"
    },
    {
      id: "11",
      title: "Shampoo Sólido de Pétalos de rosa",
      description: "El mejor shampoo",
      price: "160",
      thumbnail: "foto1.jpg",
      code: "shamp1",
      stock: "500 unidades"
    }
  ]

router.get('/', (req, res) => {
    const limit =req.query.limit;
    if(!limit || (limit!=="150" && limit!=="160")) res.json({products})
    let productFilter = products.filter(producto => producto.price===limit);
    res.json({products: productFilter})
})

router.get('/:pid',(req, res) => {
    const pid = req.params.pid
    let product = products.find(item => item.id === pid)
    if (!product) res.send({ error: "User not found"})
    else res.send({product})
})

router.post('/', (req, res) => {
    //TODO
    res.send('POST /users')
})

module.exports = router
