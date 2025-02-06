const mongoose = require ('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        min: 1,
        default: 1
    },
    address:{
        type: String
    },
    cellular:{
        type: Number
    },
    username:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
})

const UserModel = mongoose.model(
    'users',
    UserSchema
)

module.exports = UserModel;