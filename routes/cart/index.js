const {Router} = require('express')
const carritosControl = require('../../controllers/cart')

const routerCart = new Router()

routerCart.get('/', (req, res) =>{ res.send('router carrito')})
routerCart.post('/', carritosControl.addToCart)
routerCart.post('/', (req, res) =>{ res.send('router carrito')})
routerCart.delete('/', (req, res) =>{ res.send('router carrito')})
routerCart.delete('/', (req, res) =>{ res.send('router carrito')})



module.exports = routerCart