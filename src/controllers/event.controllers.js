const mongoose = require ( "mongoose" );
const { bdInsertName, bdDeleteEvent, bdUpdateEventById } = require("../services/event.services");


async function createEvent(req, res){
    const inputData = req.body;

    try {
        const data = await bdInsertName(inputData);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: "El nombre asignado no esta permitido"
        })
    }
};

async function deleteEvent(req, res) {
    const id = req.params.id;

    try {
        if ( ! mongoose.Types.ObjecId.isvalid( id ) ) {
            return res.json({
                ok: false,
                msg: "El mensaje no es valido"
            })
        }
        const data = await bdDeleteEvent(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: "Ha ocurrido un error al tratar de eliminar el evento"
        })
    }
};

async function updateEvent(req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await bdUpdateEventById(id, inputData);
        res.json({
            ok: true,
            data: data
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: "Ha ocurrido un error al tratar de actualizar el evento"
        })
    }
};

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent
};