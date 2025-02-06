const UserModel = require ('../models/User.model');

async function dbInsertUser (newUser){
    return await UserModel.create (newUser);
}

async function dbGetUsers() {
    return await UserModel.find();
}

module.exports = {
    dbInsertUser,
    dbGetUsers
};