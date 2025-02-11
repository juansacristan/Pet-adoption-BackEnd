const AdoptionModel = require ("../models/adoption.model")

async function dbinsterAdoption(newAdoption) {
    return await AdoptionModel.create(newAdoption);
    
}

async function dbGetAdoption() {
    return await AdoptionModel.find();
}

async function dbDeleteAdoption(id) {
    return await AdoptionModel.findOneAndDelete({_id: id});
    
}

async function dbGetAdoptionById(id, ) {
    return await AdoptionModel.findById(id);
    
}

async function dbUpdateAdoptionById(id, newAdoption) {
    return await AdoptionModel.findByIdAndUpdate(
        id,
        newAdoption,
        {new: true}
    )
}

module.exports = {
    dbGetAdoption,
    dbinsterAdoption,
    dbDeleteAdoption,
    dbGetAdoptionById,
    dbUpdateAdoptionById
}