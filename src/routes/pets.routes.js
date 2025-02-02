const express = require ('express');
const router = express.Router();

//Definir todas las rutas para entidad Pets --> hhtp://localhost:3000/api/pets
router.get('/', function(req, res){
    res.json({
        ok: true,
        msg: 'Obtener todas las mascotas'
    });
});

module.exports = router; // expongo la funcionalidad de este archivo para ser usada por otros archivos