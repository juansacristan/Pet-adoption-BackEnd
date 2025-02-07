const express = require ('express');
const router = express.Router();

const { getUsers, createUsers, getUsersById, deleteUsers, patchUsers } = require('../controllers/users.controllers');



//Definir todas las rutas para entidad usuarios --> http://localhost:3000/api/users
router.get('/', getUsers);
router.post('/', createUsers);
router.get('/:id', getUsersById);
router.delete('/:id', deleteUsers);
router.patch('/:id', patchUsers);


module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos