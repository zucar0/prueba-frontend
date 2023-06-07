//Contiene la lógica de la aplicación 
//(Conexión a DB, operaciones lógicas)
const { matchData } = require("express-validator");
const {usersModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');

//Las funciones declaradas reciben lo que envía Express:Request y Response

/**
 * Lista de usuarios
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) =>{
    try{
        const data = await usersModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res, 'ERROR_GET_USERS')
    }
};

/**
 * Detalle de usuario
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) =>{};

/**
 * Insertar un registro de usuario
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) =>{
    try{

        const body = matchData(req);

        // const { body} = req
        const data = await usersModel.create(body);
        //Los controladores siempre deben retornar algo
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_CREATE_USER')
    }

};

/**
 * Actualizar usuario
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) =>{};

/**
 * Eliminar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = (req, res) =>{};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser}