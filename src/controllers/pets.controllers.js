function getPets(req, res){
    res.json({
        ok: true,
        msg: 'Obtener todas las mascotas'
    });
};

module.exports = getPets