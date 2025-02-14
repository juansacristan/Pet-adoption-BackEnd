const mongoose = require ('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre del usuario es obligatorio' ]
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
        lowercase: true,
        required: [true, 'El username es obligatorio' ]
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['registrado', 'moderator', 'admin'],
        default: 'registrado'
    }
})

const UserModel = mongoose.model(
    'users',
    UserSchema
)

module.exports = UserModel;