const { dbGetUserByUsername } = require("../services/users.service");

async function validateUserExists(req, res, next){
    console.log('Soy el middleware de validación de usuario');
    // Paso 1: Obtengo los datos enviados
    const inputData = req.body;
    try {
            // Paso 2: Consulto si el usuario existe en la DB (email --> username)
    const dataFound = dbGetUserByUsername(inputData.username);

        // Paso 3: Verifico Si el usuario existe y retorno un mensaje al cliente - SE DETIENE
        if(dataFound){
            return res.json({
                ok: false,
                msg: 'El usuario ya existe'
            })
        }

            //Paso 4: Paso el control del flujo a la siguiente funcion (con el next)
    next();

    } 
    catch (error) {
        console.error(error); // Mensaje en consola para el desarrollador
        res.json({
            ok: false,
            msg:'Ha ocurrido una excpecion al verificar si el usuario existe'
        })
        
    }



    // Paso 4: Registramos el usuario
    // const data = await dbInsertUser(inputData);


};


module.exports = validateUserExists;