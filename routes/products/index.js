const {Router} = require('express')
const productosControl = require('../../controllers/products/index.js')
const routerProducts = new Router()

routerProducts.get('/', productosControl.getAll)
routerProducts.post('/', productosControl.save)
routerProducts.put('/', (req, res) => { res.send('router productos')})
routerProducts.delete('/', productosControl.deleteById)



module.exports = routerProducts