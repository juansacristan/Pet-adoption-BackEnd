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
    timeofCompletion: {

        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    state: {
        type: String,
        states:['abierto', 'cerrado']
    },
    urlImage:{
        type: String
    },
});

const EventModel = mongoose.model(
    "event",
    EventSchema
);

module.exports = EventModel;