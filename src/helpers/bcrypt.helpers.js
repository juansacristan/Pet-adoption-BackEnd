const bcrypt = require ('bcrypt')

function encryptedPassword(pass){
    // Paso 1: Generar una cadena aleatoria para mezclarla con el password original
    const salt = bcrypt.genSaltSync();
    console.log('salt: ', salt);

    // Paso 2: Combinamos el password original con la cadena aleatoria
    const hashPassword = bcrypt.hashSync(
        pass, // Password Originial del usuario
        salt  // Cadena aleatoria
    );
    return hashPassword;
}


module.exports = encryptedPassword;