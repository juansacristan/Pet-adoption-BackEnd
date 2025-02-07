const{ dbGetPets, dbinsertPet, dbDeletePet, dbGetPetById, dbUpdatePetsById } = require ("../services/pets.service")

async function getPets(req, res){
    try {
        const data = await dbGetPets()
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener todos las mascotas'
        })
    }

};

async function createPets(req, res){
    const inputData = req.body;

    try {
        const data = await dbinsertPet(inputData);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al crear mascota'
        })
    }


};

async function deletePets(req, res){
    const id = req.params.id

    try {
        const data = await dbDeletePet(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al eliminar mascota'
        })
    }


};

async function getPetsById(req, res){
    const id = req.params.id

    try {
        const data = await dbGetPetById(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener mascota por Id'
        })
    }


};

async function patchPets(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdatePetsById (id, inputData);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar una mascota por id'
        })
    }
    
};


module.exports = {
    getPets,
    createPets,
    getPetsById,
    deletePets,
    patchPets
};