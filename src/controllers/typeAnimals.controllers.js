const TypeAnimalModel = require("../models/TypeAnimal.model");
const { dbinsertAnimal, dbGetAnimal, dbDeleteAnimal, dbGetAnimalById, dbUpdateAnimalById } = require("../services/typeAnimals.service");

async function createAnimal(req, res){
    const inputData = req.body;

    try {
        // insertTypeAnimal(inputData) Recibe un Promise
        const data = await dbinsertAnimal(inputData);

        res.json({
            ok: true,
            data: data
        });

    } catch (error) {
        console.error(error);   //Error al desarrollador

        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion. El animal no se ha registrado'
        });
    }
};

async function getAnimal(req, res){
    try {
        const data = await dbGetAnimal()
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener todos las animales'
        })
    }

};
async function deleteAnimal(req, res){
    const id = req.params.id

    try {
        const data = await dbDeleteAnimal(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar animal'
        })
    }


};

async function getAnimalById(req, res){
    const id = req.params.id

    try {
        const data = await dbGetAnimalById(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener Animal por Id'
        })
    }


};

async function patchAnimal(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateAnimalById (id, inputData);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar una mascota por id'
        })
    }
    
};


module.exports = {
    createAnimal,
    getAnimal,
    deleteAnimal,
    getAnimalById,
    patchAnimal
};