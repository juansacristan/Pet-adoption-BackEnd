const mongoose = require ("mongoose");

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true
    },
    starttime: {
        type: String,
        required: true
    },
    timeofcompletion: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    state: {
        type: Boolean
    }
});

const EventModel = mongoose.model(
    "event",
    EventSchema
);

module.exports = EventModel;