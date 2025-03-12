const jwt = require ('jsonwebtoken');

function generateToken(payload){
    return jwt.sign(
        payload,                // Payload (Carga Util)
        'j&fmujk$iiu%ky',                     // Seed: Palabra secreta
        {expiresIn: '1h' }      // Configuración (Expiracion del)
    );
}

function verifyToken (token){
    return jwt.verify(
        token,
        'j&fmujk$iiu%ky'
    )
}


module.exports = {
    generateToken,
    verifyToken
};