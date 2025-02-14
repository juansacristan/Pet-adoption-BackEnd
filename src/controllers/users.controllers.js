const mongoose = require("mongoose");
// const validateId = require ('../helpers/validate-id-helper');


const { dbInsertUser, dbGetUsers, dbDeleteUser, dbGetUserById, dbUpdateUserById, } = require("../services/users.service");

const verifyProperties = require ('../helpers/verify-properties.helpers')

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
        console.error(error.errors);   // Imprime error al desarrollador

        const errors = verifyProperties (error);

        // console.log(errors);

        // const person = {
        //     name: 'Juan',
        //     age: 47,
        //     gender:'Male'
        // }

        // Object.keys   ---> ['name', 'age', 'gender']
        // Object.values ---> ['Juan', 47, 'Male']
        // Object.entries---> [{name:'Juan'}, {age: 47}, {gender:'Male'}]

        // for (const [key, value] of Object.entries(person)){
        //     console.log( value.message);

        //Envia un mensaje de error legible al cliente
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al crear usuario',
            error: errors
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