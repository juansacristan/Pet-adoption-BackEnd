const express = require ('express');
const router = express.Router();

const { getPets, getPetsById, deletePets, patchPets, createPetsPrivate, createPetsPublic } = require('../controllers/pets.controllers');
const validateId = require('../middlewares/validate-id.middleware');
const { validateAuthUser } = require('../middlewares/validate-auth-user.middleware');

//Definir todas las rutas para entidad Pets --> http://localhost:3000/api/pets
router.get('/', getPets);
router.post('/', validateAuthUser, createPetsPrivate); //Registrar  mascota Private
router.post('/public', createPetsPublic); //Registrar mascota Public
router.get('/:id', validateId, getPetsById); // Obtener la mascota de Id
router.delete ('/:id', validateId, validateAuthUser, deletePets); // Eliminar una mascota
router.patch ('/:id', validateId, validateAuthUser, patchPets); //Actualizar la mascota

module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos