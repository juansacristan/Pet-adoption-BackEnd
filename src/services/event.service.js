const EventModel = require( "../models/event.model" );

async function bdInsertEvent(newEvent) {
    return await EventModel.create (newEvent);
}

async function bdDeleteEvent(id){
    return await EventModel.findOneAndDelete({ _id: id });
    
}
async function bdUpdateEventById(id, newEvent){
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


async function bdgetEvent() {
    return await EventModel.find()
}

module.exports = {
    bdInsertEvent,
    bdDeleteEvent,
    bdUpdateEventById,
    bdgetEvent,
    bdGetEventById
};