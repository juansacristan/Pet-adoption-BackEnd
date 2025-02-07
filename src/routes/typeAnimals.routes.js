const express = require ('express');
const router = express.Router();


const { createAnimal, getAnimal, getAnimalById, deleteAnimal, patchAnimal } = require('../controllers/typeAnimals.controllers');


//Definir todas las rutas para entidad TypeAnimal --> http://localhost:3000/api/animals
router.post('/', createAnimal) // Registrar animal
router.get('/', getAnimal);
router.get('/:id', getAnimalById); // Obtener la mascota de Id
router.delete ('/:id', deleteAnimal); // Eliminar una mascota
router.patch ('/:id', patchAnimal); //Actualizar la mascota
module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos