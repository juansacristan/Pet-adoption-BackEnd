function createAnimal(req, res){
    const inputData = req.body;

    res.json({
        ok: true,
        msg: 'Crea animal',
        data: inputData
    })
};

module.exports = {
    createAnimal
};