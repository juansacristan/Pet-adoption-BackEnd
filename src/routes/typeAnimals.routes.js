const express = require ('express');
const router = express.Router();


const { createAnimal } = require('../controllers/animal.controllers');


//Definir todas las rutas para entidad TypeAnimal --> http://localhost:3000/api/animals
router.post('/', createAnimal)

module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos