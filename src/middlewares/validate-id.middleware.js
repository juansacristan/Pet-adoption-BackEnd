// function validateId(req, res, next) {
//     console.log('Hola');
//     next(); // Permitir que se ejecute ,a siguiente funcion
// }

const mongoose = require("mongoose");

// module.exports = validateId
 function validateId(req, res, next) {
    const id = req.params.id;
    console.log('Hola soy un middleware validateId');

    if ( ! mongoose.Types.ObjectId.isValid(id))
        return res.json({
            ok: false,
            msg: 'El Id No es valido'
        });
        next();
 }

 module.exports = validateId;