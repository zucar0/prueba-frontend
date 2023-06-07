const express = require("express");
const router = express.Router(); // Router: Manejador de rutas
const customHeader = require("../middleware/customHeader");
const { validatorCreateUser, validatorGetUser } = require("../validators/users")
const { getUsers, getUser, createUser, updateUser } = require("../controllers/users");

//TODO http://localhost/users (GET, POST, DELETE, PUT)
//Declaración de rutas:


router.get("/", getUser);

router.get("/:id", validatorGetUser ,getUsers);

//Listar detalles
router.post("/", validatorCreateUser, createUser);

router.put("/:id", validatorCreateUser, validatorGetUser, updateUser);


module.exports = router; 