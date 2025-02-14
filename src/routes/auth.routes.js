const express = require ('express');
const { createUsers } = require('../controllers/users.controllers');
const router = express.Router();

router.post('/register',createUsers);
router.post('/login', (req, res) => {
    res.json({
        msg: 'Ingresa el usuario al sistema'
    })
});
router.get('/re-new-towen', (req,res) => {
    res.json({
        msg: 'Renovar token'
    })
});


module.exports = router;