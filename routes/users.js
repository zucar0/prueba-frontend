const express = require("express");
const router = express.Router(); // Router: Manejador de rutas

//TODO http://localhost/users (GET, POST, DELETE, PUT)
//Declaración de rutas:

router.get("/", (req,res) =>{
    const data =["hola","mundo"]
    res.send({data})
})

module.exports = router; 