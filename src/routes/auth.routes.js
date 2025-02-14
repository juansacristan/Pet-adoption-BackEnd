const express = require ('express');
const { createUsers } = require('../controllers/users.controllers');
const loginUser = require('../controllers/auth.controllers');
const validateUserExists = require('../middlewares/validate-user-exists');
const router = express.Router();

router.post('/register',createUsers);
router.post('/login', validateUserExists, loginUser);


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