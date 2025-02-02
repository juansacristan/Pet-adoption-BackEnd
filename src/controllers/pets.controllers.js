function getPets(req, res){
    res.json({
        ok: true,
        msg: 'Obtener todas las mascotas'
    });
};

function createPets(req, res){
    res.json({
        ok: true,
        msg: 'Crear mascota'
    })
}

module.exports = {
    getPets,
    createPets
};