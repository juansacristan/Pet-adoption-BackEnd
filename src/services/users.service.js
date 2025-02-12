const UserModel = require ('../models/User.model');

async function dbInsertUser (newUser){
    return await UserModel.create (newUser);
}

async function dbGetUsers() {
    return await UserModel.find();
}

async function dbDeleteUser (id){
    // return await UserModel.findByIdAndDelete(id);
    return await UserModel.findOneAndDelete({ _id: id });
}

async function dbGetUserById (id){
    return await UserModel.findById(id);
    return await UserModel.findOne({ _id: id });
}

async function dbUpdateUserById (id, newUser){
    return await UserModel.findByIdAndUpdate(
        id,
        newUser,
        {new: true}
    );
    return await UserModel.findOneAndUpdate(
        { _id: id },
        newUser,
        {new: true}
    );
}

async function dbGetUserByUsername(email) {
   return await UserModel.findOne(
      {username: email}
    );
}

module.exports = {
    dbInsertUser,
    dbGetUsers,
    dbDeleteUser,
    dbGetUserById,
    dbUpdateUserById,
    dbGetUserByUsername
};