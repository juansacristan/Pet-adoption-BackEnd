const UserModel = require ('../models/User.model');

async function insertUser (newUser){
    return await UserModel.create (newUser);
}

module.exports = {
    insertUser
};