//Contiene la lógica de la aplicación 
//(Conexión a DB, operaciones lógicas)

const {usersModel} = require('../models');

//Las funciones declaradas reciben lo que envía Express:Request y Response

/**
 * Lista de usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) =>{
    const data = await usersModel.find({});
    res.send({data})
};

/**
 * Detalle de usuario
 * @param {*} req 
 * @param {*} res 
 */
const getUser = (req, res) =>{};

/**
 * Insertar un registro de usuario
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) =>{
    const { body} = req
    console.log(body)
    const data = await usersModel.create(body)
    //Los controladores siempre deben retornar algo
    res.send({data})
};

/**
 * Actualizar usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = (req, res) =>{};

/**
 * Eliminar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = (req, res) =>{};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser}