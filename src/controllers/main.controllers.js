function greeting(req, res){
    res.json({
        ok: true,
        msg: 'Bienvenido a Adoption Pets'
    })
};

module.exports = greeting;