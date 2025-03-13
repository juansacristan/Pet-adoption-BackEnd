const express = require ('express');
const router = express.Router();

const { getUsers, createUsers, getUsersById, deleteUsers, patchUsers } = require('../controllers/users.controllers');
const validateId = require('../middlewares/validate-id.middleware');
const validateUserExists = require('../middlewares/validate-user-exists');
const { validateAuthUser } = require('../middlewares/validate-auth-user.middleware');



//Definir todas las rutas para entidad usuarios --> http://localhost:3000/api/users
router.get('/', validateAuthUser, getUsers);
router.post('/', validateAuthUser, validateUserExists, createUsers);
router.get('/:id', validateId, validateAuthUser, getUsersById);
router.delete('/:id', validateId, validateAuthUser, deleteUsers);
router.patch('/:id', validateId, validateAuthUser, patchUsers);


module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos