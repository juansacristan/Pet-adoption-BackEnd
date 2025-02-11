const mongoose = require("mongoose");
// const validateId = require ('../helpers/validate-id-helper');


const { dbInsertUser, dbGetUsers, dbDeleteUser, dbGetUserById, dbUpdateUserById, } = require("../services/users.service");

async function getUsers(req, res){

    try {
        const data = await dbGetUsers()
        res.json({
            ok: true,
            data: data
        });
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener todos los usuarios'
        })
    }

};

async function createUsers(req, res){
    const inputData = req.body;

    try {
        const data = await dbInsertUser(inputData);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al crear usuario'
        })
    }


};

async function deleteUsers(req, res){
    const id = req.params.id

    try {
        const data = await dbDeleteUser(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar usuario'
        })
    }


};

async function getUsersById(req, res){
    const id = req.params.id

    try {
        // validateId(id);
        const data = await dbGetUserById(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener usuario por Id'
        })
    }


};

async function patchUsers(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateUserById (id, inputData);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar un usuario por id'
        })
    }
    
}



module.exports ={
    getUsers,
    createUsers,
    getUsersById,
    deleteUsers,
    patchUsers,
}