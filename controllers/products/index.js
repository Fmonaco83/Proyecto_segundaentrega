const fs = require('fs')


class Productos{
    constructor(){this.db ='./productos.txt'}

    async save(req, res){
        try{
            if (fs.existsSync("./productos.txt")){
                const data = await JSON.parse(fs.readFile("./productos.txt", 'utf-8'))
                const lastProductId = data[data.lenght - 1].id
                const newPRoduct = req.body
                newPRoduct.id = lastProductId
                data.push(newPRoduct)
                const writefile = await fs.writeFileSync("./productos.txt", JSON.stringify(data))
                res.status(201).send('Producto guardado con exito')
            }else{
                const data = []
                const newPRoduct = req.body
                newPRoduct.id = 1 
                data.push(newPRoduct)
                const writeFile = await fs.writeFileSync("./productos.txt", JSON.stringify(data))
                res.status(201).send('Producto guardado con exito')
            }

        }catch(error){
            res.send(error)
        }


    }


    async getAll (){
        try{
            const contenedor = await JSON.parse(fs.readFile("./productos.txt", 'utf-8'))
            return contenedor
        }catch(error) {
            console.log(error)
        }
    }

    async deleteById (id){
        try{
            const contenedor = await JSON.parse(fs.readFile("./productos.txt", 'utf-8'))
            const filtro = contenedor.filter(e => e.id !==id )
            const del = fs.writeFile("./productos.txt",JSON.stringify(filtro,null, 2))
            console.log('ID ELIMINADO')
            
        }catch(error) {
            console.log(error)
        }
        
    } 
}





const productosControl = new Productos()
module.exports = productosControl