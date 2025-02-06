const express = require ('express');
const router = express.Router();

const { createPets, getPets, getPetsById, deletePets, patchPets } = require('../controllers/pets.controllers');

//Definir todas las rutas para entidad Pets --> http://localhost:3000/api/pets
router.get('/', getPets);
router.post('/', createPets); //Registrar  mascota
router.get('/', getPetsById); // Obtener la mascota de Id
router.delete ('/', deletePets); // Eliminar una mascota
router.patch ('/', patchPets); //Actualizar la mascota

module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos