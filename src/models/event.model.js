const mongoose = require ("mongoose");

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date:{
        type: Number,
        required: true
    },
    starTime: {
        type: Number,
        required: true
    },
    timeOfCompletion: {
        type: Number,
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
        required: true
    }
});

const EventModel = mongoose.model(
    "event",
    EventSchema
);

module.exports = EventModel;