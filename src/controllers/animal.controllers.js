function createAnimal(req, res){
    res.json({
        ok: true,
        msg: 'Crea animal'
    })
};

module.exports = {
    createAnimal
};