require("dotenv").config() //Indicación para uso de variables de entorno
const express = require("express") //Express: Para levantar el servidor web
const cors = require("cors") // Librería para evitar error de origen cruzado entre navegadores
const dbConnect= require('./config/mongo') //Importación de dbConnect
const app = express()

app.use(cors()) //Se indica a la aplicación que use el plugin

const port = process.env.PORT || 3000 // Constante referente al puerto a través de variable de entorno

// Invocación de las rutas
// TODO localhost/api/____
app.use("/api", require("./routes"))

//La aplicación comienza a escuchar por el puerto 3000
app.listen(port, () => {
    console.log(`Tu app está lista por http://localhost:${port}`)
})