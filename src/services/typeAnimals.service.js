const TypeAnimalModel = require("../models/TypeAnimal.model");

async function dbinsertAnimal(newAnimal) {
    //TypeAnimalModel: Devuleve un Promise
    return await TypeAnimalModel.create (newAnimal);
}

async function dbGetAnimal() {
    return await TypeAnimalModel.find();
}

async function dbDeleteAnimal (id){
    // return await TypeAnimalModel.findByIdAndDelete(id);
    return await TypeAnimalModel.findOneAndDelete({ _id: id });
}

async function dbGetAnimalById (id){
    return await TypeAnimalModel.findById(id);
    return await TypeAnimalModel.findOne({ _id: id });
}

async function dbUpdateAnimalById (id, newUser){
    return await TypeAnimalModel.findByIdAndUpdate(
        id,
        newUser,
        {new: true}
    );
    return await TypeAnimalModel.findOneAndUpdate(
        { _id: id },
        newUser,
        {new: true}
    );
}

module.exports = {
    dbinsertAnimal,
    dbGetAnimal,
    dbDeleteAnimal,
    dbGetAnimalById,
    dbUpdateAnimalById
};