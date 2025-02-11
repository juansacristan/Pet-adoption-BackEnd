const mongoose = require ('mongoose');

const AdoptionSchema = new mongoose.Schema({
    petId:{
        type: mongoose.Schema.ObjectId,
        ref: 'pets',
        required: true
    },
    userId:{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
        required: true
    },
    state:{
        type: String,
        states:['proceso', 'transito', 'adoptado', 'reservado', 'disponible']
    },
    gender:{
        type: String,
        genders: ['macho', 'femenino']
    },
    age:{
        type: String,
    },
    race:{
        type: String,
        required: true
    },
    size:{
        type: String,
    }
})

const AdoptionModel = mongoose.model(
    'adoption',         //Nombre de la coleccion donde se agruparan los documentos
    AdoptionSchema       // Nombre de la estructura de datos del docuemnto
);

module.exports = AdoptionModel;