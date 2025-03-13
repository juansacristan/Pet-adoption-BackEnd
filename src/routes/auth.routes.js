const express = require ('express');
const { createUsers } = require('../controllers/users.controllers');
const loginUser = require('../controllers/auth.controllers');
const validateUserExists = require('../middlewares/validate-user-exists');
const { validateAuthUser } = require('../middlewares/validate-auth-user.middleware');
const router = express.Router();

router.post('/register', validateUserExists, createUsers);
router.post('/login', loginUser);
// TODO Crear el controlador y el servicio para renovar el Token (OJO lo necesita el FrontEnd para permisionar el acceso a las rutas)
// router.get( '/re-new-token', validateAuthUser,  )


// router.post('/login', (req, res) => {
//     res.json({
//         msg: 'Ingresa el usuario al sistema'
//     })
// });
// router.get('/re-new-towen', (req,res) => {
//     res.json({
//         msg: 'Renovar token'
//     })
// });


module.exports = router;