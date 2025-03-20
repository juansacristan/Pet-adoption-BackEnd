const EventModel = require( "../models/event.model" );

async function bdInsertName(newEvento) {
    return await EventModel.create (newEvento);
}

async function bdDeleteEvent(id){
    return await EventModel.findOneAndDelete({ _id: id });
    
}
async function bdUpdateEventById(id, newEvento){
    return await EventModel.findByIdAndUpdate(
        id,
        newEvento,
        {new: true}
    );
}
async function bdGetEventById (id){
    return await EventModel.findById(id);
    return await EventModel.findOne({ _id: id });
}


async function bdgetEvents() {
    return await EventModel.find()
}

module.exports = {
    bdInsertName,
    bdDeleteEvent,
    bdUpdateEventById,
    bdgetEvents,
    bdGetEventById
};