const mongoose = require ('mongoose');

/** Paso 1: Crear la estructura de datos del documento */
const TypeAniamlSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
});

/** PAso 2: Asociar la estructura de datos (documento) con una coleccion */
const TypeAnimalModel = mongoose.model(
    'animal',
    TypeAniamlSchema
)

module.exports = TypeAnimalModel;