const jwt = require ('jsonwebtoken');

function generateToken(payload){
    return jwt.sign(
        payload,                // Payload (Carga Util)
        process.env.JWT_SEED,                     // Seed: Palabra secreta
        {expiresIn: '1h' }      // Configuración (Expiracion del)
    );
}

function verifyToken (token){
    return jwt.verify(
        token,
        process.env.JWT_SEED
    )
}


module.exports = {
    generateToken,
    verifyToken
};