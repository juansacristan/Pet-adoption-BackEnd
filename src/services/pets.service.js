const PetModel = require("../models/Pet.model");

async function dbinsertPet(newAnimal) {
    //TypeAnimalModel: Devuleve un Promise
    return await PetModel.create (newAnimal);
}

async function dbGetPets() {
    return await PetModel.find();
}

async function dbDeletePet (id){
    // return await PetModel.findByIdAndDelete(id);
    return await PetModel.findOneAndDelete({ _id: id });
}

async function dbGetPetById (id){
    return await PetModel.findById(id);
    return await PetModel.findOne({ _id: id });
}

async function dbUpdatePetsById (id, newUser){
    return await PetModel.findByIdAndUpdate(
        id,
        newUser,
        {new: true}
    );
    return await PetModel.findOneAndUpdate(
        { _id: id },
        newUser,
        {new: true}
    );
}

module.exports = {
    dbGetPets,
    dbinsertPet,
    dbDeletePet,
    dbGetPetById,
    dbUpdatePetsById
};