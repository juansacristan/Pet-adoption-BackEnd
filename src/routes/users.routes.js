const express = require ('express');
const router = express.Router();

const { getUsers, createUsers, getUsersById, deleteUsers, patchUsers } = require('../controllers/users.controllers');
const validateId = require('../middlewares/validate-id.middleware');



//Definir todas las rutas para entidad usuarios --> http://localhost:3000/api/users
router.get('/', getUsers);
router.post('/', createUsers);
router.get('/:id', validateId, getUsersById);
router.delete('/:id', validateId, deleteUsers);
router.patch('/:id', validateId, patchUsers);


module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos