const TypeAnimalModel = require("../models/TypeAnimal.model");

async function insertTypeAnimal(newAnimal) {
    //TypeAnimalModel: Devuleve un Promise
    return await TypeAnimalModel.create (newAnimal);
}

module.exports = {
    insertTypeAnimal
};