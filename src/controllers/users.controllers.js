const { dbInsertUser, dbGetUsers, } = require("../services/users.services");

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

function getUsersById(req, res){
    res.json({
        ok: true,
        msg: 'Obtener usuario por Id'
    })
};

function deleteUsers(req, res){
    res.json({
        ok: true,
        msg: 'Eliminar un usuario'
    })
};

function patchUsers (req, res){
    res.json({
        ok: true,
        mesg: 'Actualizar usuario'
    })
};


module.exports ={
    getUsers,
    createUsers,
    getUsersById,
    deleteUsers,
    patchUsers
}