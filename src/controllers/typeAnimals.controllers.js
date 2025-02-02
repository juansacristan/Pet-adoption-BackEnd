const TypeAnimalModel = require("../models/TypeAnimal.model");

async function createAnimal(req, res){
    const inputData = req.body;

    const data = await TypeAnimalModel.create(inputData);

    res.json({
        ok: true,
        msg: 'Crea animal',
        data: data
    })
};

module.exports = {
    createAnimal
};