const express = require ('express');
const router = express.Router();


const { createAnimal, getAnimal, getAnimalById, deleteAnimal, patchAnimal } = require('../controllers/typeAnimals.controllers');
const validateId = require('../middlewares/validate-id.middleware');
const { validateAuthUser } = require('../middlewares/validate-auth-user.middleware');


//Definir todas las rutas para entidad TypeAnimal --> http://localhost:3000/api/animals
router.post('/', validateAuthUser, createAnimal) // Registrar animal
router.get('/', getAnimal);
router.get('/:id', validateId, getAnimalById); // Obtener la mascota de Id
router.delete ('/:id', validateId, validateAuthUser, deleteAnimal); // Eliminar una mascota
router.patch ('/:id', validateId, validateAuthUser, patchAnimal); //Actualizar la mascota
module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos