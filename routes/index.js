//Este archivo gestiona la carga dinámica de rutas en la que vamos a escanear archivos del directorio de rutas
const express = require("express");
const fs = require("fs")

const router = express.Router();

const PATH_ROUTES = __dirname;//Constante para ruta absoluta

const removeExtension = (fileName) =>{
    // Genera un array en donde toma el primer valor [users, js]
    return fileName.split('.').shift()
}

//Leer directorio de manera síncrona
const a = fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file)
    // Condición
    if(name !== 'index'){
        console.log(`Cargando ruta de ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //TODO http://localhost:3000/api/users
    }
})
// console.log({a})

module.exports = router;