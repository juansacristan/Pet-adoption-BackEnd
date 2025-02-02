function greeting(req, res){
    res.json({
        ok: true,
        msg: 'Bienvenido a adopcion Adoption Pets'
    })
};

module.exports = greeting;