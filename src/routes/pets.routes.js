const express = require ('express');
const router = express.Router();

const getPets = require('../controllers/pets.controllers');

//Definir todas las rutas para entidad Pets --> hhtp://localhost:3000/api/pets
router.get('/', getPets);

module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos