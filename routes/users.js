const express = require("express");
const { getUsers, getUser, createUser } = require("../controllers/users");
const { validatorCreateUser } = require("../validators/users")
const router = express.Router(); // Router: Manejador de rutas

//TODO http://localhost/users (GET, POST, DELETE, PUT)
//Declaración de rutas:

router.get("/", getUsers);

//Listar detalles
router.post("/", validatorCreateUser, createUser);

module.exports = router; 