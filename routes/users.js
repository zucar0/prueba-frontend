const express = require("express");
const router = express.Router(); // Router: Manejador de rutas
const customHeader = require("../middleware/customHeader");
const { validatorCreateUser } = require("../validators/users")
const { getUsers, getUser, createUser } = require("../controllers/users");

//TODO http://localhost/users (GET, POST, DELETE, PUT)
//Declaración de rutas:

router.get("/", getUsers);

//Listar detalles
router.post("/", validatorCreateUser, createUser);

module.exports = router; 