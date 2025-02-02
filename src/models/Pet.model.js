const mongoose = require ('mongoose');

/** Paso 1: Crear la estructura de datos del documento */
const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    race:{
        type: String,
    },
    age:{
        /** Edad en meses */
        type: Number,
        min: 1,
        default: 1
    },
    gender:{
        type: String,
        genders:['male', 'female']
    },
    typeAnimal:{
        type: mongoose.Schema.ObjectId,     /** Asociamos el tipo al Id del documento */
        ref: 'animal'       /** de la coleccion 'animal' */
    },
    description:{
        type: String,
    },
    urlImage:{
        type: String
    },
    state:{
        type: String,
        states: ['vacunado', 'adoptado', 'recuperado', 'hospitalizado']
    }
});

/** Paso 2: Asociar la estructura de datos (documento) con una coleccion */
const PetModel = mongoose.model(
    'pets',         //Nombre de la coleccion donde se agruparan los documentos
    PetSchema       // Nombre de la estructura de datos del docuemnto
);

module.exports = PetModel;