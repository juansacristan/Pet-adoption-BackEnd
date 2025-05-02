const mongoose = require ( "mongoose" );
const { bdInsertEvent, bdDeleteEvent, bdUpdateEventById, bdGetEventById, bdgetEvent } = require("../services/event.service");


async function createEvent(req, res){
    const inputData = req.body;

    try {
        const data = await bdInsertEvent(inputData);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'El evento asignado no esta permitido'
        })
    }
};

async function deleteEvent(req, res) {
    const id = req.params.id;

    try {
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
            msg: 'Ha ocurrido un error al tratar de eliminar el evento'
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
            msg: 'Ha ocurrido un error al tratar de actualizar el evento'
        })
    }
};

async function getEvent(req, res){
    try {
        const data = await bdgetEvent()
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener todos los eventos'
        })
    }

};

async function getEventById(req, res){
    const id = req.params.id

    try {
        const data = await bdGetEventById(id);

        res.json({
            ok: true,
            data: data
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Ha ocurrido un error al obtener el evento por Id'
        })
    }


};

module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getEvent,
    getEventById
    
};