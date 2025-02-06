const TypeAnimalModel = require("../models/TypeAnimal.model");
const { insertTypeAnimal } = require("../services/typeAnimals.service");

async function createAnimal(req, res){
    const inputData = req.body;

    try {
        // insertTypeAnimal(inputData) Recibe un Promise
        const data = await insertTypeAnimal(inputData);

        res.json({
            ok: true,
            msg: 'Crea animal',
            data: data
        });

    } catch (error) {
        console.error(error);   //Error al desarrollador

        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion. El Animal no se ha registrado'
        });
    }
}


module.exports = {
    createAnimal
};