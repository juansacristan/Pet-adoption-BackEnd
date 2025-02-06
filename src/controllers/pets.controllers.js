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
};

function getPetsById(req, res){
    res.json({
        ok: true,
        msg: 'Obtener mascota por Id'
    })
};

function deletePets (req, res){
    res.json({
        ok: true,
        msg: 'Eliminar una mascota'
    })
};

function patchPets (req, res){
    res.json({
        ok: true,
        mesg: 'Actualizar mascota'
    })
};

module.exports = {
    getPets,
    createPets,
    getPetsById,
    deletePets,
    patchPets
};