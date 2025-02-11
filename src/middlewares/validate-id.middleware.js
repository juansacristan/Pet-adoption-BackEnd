// function validateId(req, res, next) {
//     console.log('Hola');
//     next(); // Permitir que se ejecute ,a siguiente funcion
// }

const mongoose = require("mongoose");

// module.exports = validateId
 function validateId(req, res, next) {
    if ( ! mongoose.Types.ObjectId.isValid(id))
        return res.json({
            ok: false,
            msg: 'El Id No es valido'
        });
 }

 module.exports = validateId