const RolModel = require("../models/User.model");
const { insertUser } = require("../services/users.services");

async function createUser(req, res){
    const inputData = req.body;

    try {
        // insertUser (inputData) Recibe un Promise
        const data = await insertUser(inputData);

        res.json({
            ok: true,
            msg: 'Crear usuario',
            data: data
        });

    } catch (error) {
        console.error(error);   //Error al desarrollador

        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion. El usuario no se ha registrado'
        });
    }
}


module.exports = {
    createUser
};