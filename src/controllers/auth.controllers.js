const mongoose = require ("mongoose");
const { dbGetUserByUsername } = require("../services/users.service");
const encryptedPassword = require("../helpers/bcrypt.helpers");

async function loginUser(req, res){

    // Paso 1: Obtener los datos para autenticar el usuario
        const inputData = req.body;

    // Paso 2: Verificar si el usuario existe en DB: email
    const dataFound = await dbGetUserByUsername( inputData.username );

    //Paso 3: Verifico si el usuario existe y retorno un mensaje al cliente - SE DETIENE
    if( ! dataFound){
        return res.json({
            ok: false,
            msg: 'El usuario ya existe'
        });
    }

    //Paso 4: Encriptamos la contrasena
    const hashPass = encryptedPassword(inputData.password);
    console.log(hashPass);

    //Paso 5: Crear el Payload
    const payload = {
        name: dataFound.name,
        username: dataFound.username,
        role: dataFound.role,
        id: dataFound._id
    };

    //Paso 6: Crear un Token

    res.json(inputData)
}

module.exports = loginUser;