const { dbGetAdoption, dbinsterAdoption, dbDeleteAdoption, dbGetAdoptionById } = require ("../services/adoption.service")

async function getAdoption(req, res) {
    try {
        const data = await dbGetAdoption();
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg:'Ha ocurrido un error al obtener todos los adoptaciones'
        })
        
    }
    
};

async function createAdoption(req, res) {
    const inputData = req.body;
    try {
        const data = await dbinsterAdoption(inputData);
        res.json({
            ok: true,
            data: data
        })
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al crear un adopcion'
        })
        
    }
    
};

async function deleteAdoption(req, res){
    const id = req.params.id
    try {
        const data = await dbDeleteAdoption(id);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar adopcion'
        })
        
    }
};

async function getAdoptionById(req, res) {
    const id = req.params.id
    try {
        const data = await dbGetAdoptionById(id);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener todos los adoptaciones'
        })
    }
    
};

async function patchAdoption(req, res) {
    const id = req.params.id;
    const inputData = req.body;
    try {
        const data = await dbGetAdoptionById(id, inputData);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar un adopcion por id'
        })
        
    }
    
};

module.exports = {
    getAdoption,
    createAdoption,
    getAdoptionById,
    deleteAdoption,
    patchAdoption
};