const express = require ('express');
const router = express.Router();

const { getAdoption, createAdoption, deleteAdoption, patchAdoption } = require('../controllers/adoption.controllers');
const validateId = require('../middlewares/validate-id.middleware');

//Definir todas las rutas para entidad Pets --> http://localhost:3000/api/adoption
router.get('/', getAdoption);
router.post('/', createAdoption); //Registrar adoptado
router.get('/:id', validateId, getAdoption); // Obtener el adoptado de Id
router.delete ('/:id', validateId, deleteAdoption); // Eliminar un adopato
router.patch ('/:id', validateId, patchAdoption); //Actualizar el adoptado


module.exports = router;