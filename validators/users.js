//Importar check del Express validator
const {check} = require("express-validator");
const validateResults = require("../utils/handleValidator")
//Se va a validar que exista la propiedad name, que exista y que no esté vacía
const validatorCreateUser = [
    check("name").exists().notEmpty(),
    check("age").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    check("role").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req,res,next) =>{
        return validateResults(req, res, next)
    }
]

const validatorGetUser = [
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) =>{
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateUser, validatorGetUser}