const EvenModel = require("../models/event.model");

async function bdInsertName(newEvento) {
    return await EvenModel.create (newEvento);
}

async function bdDeleteEvent(id){
    return await EvenModel.findOneAndDelete({ _id: id });
}
async function bdUpdateEventById(id, newEvento){
    return await EvenModel.findByIdAndUpdate(
        id,
        newEvento,
        {new: true}
    );
}

async function bdGetUsername( email ) {
    return await UserModel.findOne({ username: email });
};

module.exports = {
    bdInsertName,
    bdDeleteEvent,
    bdUpdateEventById,
    bdGetUsername
};