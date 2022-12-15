const fs = require('fs')


class Carritos{
    constructor(){this.db ='./carritos.txt'}

    async addToCart(req, res){
        try{
            if (fs.existsSync("./cart.txt")){
               const data = await fs.readFile("./cart.txt", 'utf-8', async (err, cont) =>{
                const products = JSON.parse(fs.readFileSync("./products.txt", 'utf-8'))
                const cart = JSON.parse(fs.readFileSync("./cart.txt", 'utf-8'))

                const selectedProd = products.find(x => x.id === req.body.id)
                const prodIndex = products.findIndex(x => x.id === req.body.id)
                delete selectedProd.stock
                selectedProd.quantity = req.body.quantity
                products[prodIndex].stock -= req.body.quantity
                cart.push(selectedProd)
                const writeProds = await fs.writeFileSync("./products.txt", JSON.stringify(products))
                const writeCard = await fs.writeFileSync("./cart.txt", JSON.stringify(cart))

                res.status(201).send('Producto agregado al carrito con exito')
               }) 
            }else{
                const data = []
                const newPRoduct = req.body
                newPRoduct.id = 1
                data.push(newPRoduct)

                const writeFile = fs.writeFileSync("./cart.txt", JSON.stringify(data))
                res.status(201).send('Producto guardado con exito')
            }
        }catch (error){
            res.send(error)
        }
    } 

}


const carritosControl = new Carritos()

module.exports = carritosControl 