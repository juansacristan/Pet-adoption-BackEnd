const mongoose = require ("mongoose");
const { dbGetUserByUsername } = require("../services/users.service");
const { encryptedPassword, verifyEncriptedPassword } = require("../helpers/bcrypt.helpers");
const {generateToken} = require("../helpers/jwt.helper");

async function loginUser(req, res){

    // Paso 1: Obtener los datos para autenticar el usuario
        const inputData = req.body;

        try {
                        // Paso 2: Verificar si el usuario existe en DB: email
            const dataFound = await dbGetUserByUsername( inputData.username );

            //Paso 3: Verifico si el usuario existe y retorno un mensaje al cliente - SE DETIENE
            if( ! dataFound){
                return res.json({
                    ok: false,
                    msg: 'El usuario no existe'
                });
            }

            //Paso 4: Encriptamos la contrasena
            const isValid = verifyEncriptedPassword(inputData.password, dataFound.password);

            if(! isValid){
                return res.json({
                    ok: false,
                    msg: 'Contraseña invalida'
                });
            }

            //Paso 5: Crear el Payload
            const payload = {
                name: dataFound.name,
                username: dataFound.username,
                role: dataFound.role,
                id: dataFound._id
            };

            //Paso 6: Crear un Token
            const token = generateToken(payload)

            res.json({
                ok: true,
                token,
                data: dataFound
            })
            
        } 
        catch (error) {
            console.error(error);
            res.json({
                ok: false,
                msg: 'Ha ocurrido una excpecion al intenta logearse'
            });
            
        }

}

module.exports = loginUser;