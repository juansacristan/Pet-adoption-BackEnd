const encryptedPassword = require('../helpers/bcrypt.helpers');
const UserModel = require ('../models/User.model');

async function dbInsertUser (newUser){
    // return await UserModel.create (newUser);
    // new UserModel(newUser);

    // Paso 1: Prepara el objeto BJSON para registrar en DB
    const dbUser = new UserModel(newUser);
    console.log('dbUser', dbUser);

    //Paso 2: Encripta y actualiza password en su respectiva propiedad
   dbUser.password = encryptedPassword(dbUser.pass);
   // Paso 3: Registra el objeto BJSON con los cambios hechos
   await dbUser.save(); // Guarda en la base de datos

   //Paso 4: Convierte un BJOSN en un objeto JavaScript
    const objsUser = dbUser.toObject();  // Devuelve todas las propiedades BJSON

    // Paso 5: Elimina las propiedades del objeto JavaScript
    delete objsUser.password;
    delete objsUser.createAt;
    delete objsUser.updateAt;

    //Paso 6: Retorno al cliente el objeto JavaScript con los campos eliminados
    return objsUser;
}

async function dbGetUsers() {
    return await UserModel.find();
}

async function dbDeleteUser (id){
    // return await UserModel.findByIdAndDelete(id);
    return await UserModel.findOneAndDelete(
        { _id: id },
        {password: 0}
    );
}

async function dbGetUserById (id){
    return await UserModel.findById(
        {},  // Objeto de consulta va vacio por que los quiero todos
        {password: 0, createAt: 0, updateAt: 0} // Cpnfigura la ocultación de los campos en la consulta realizada
        // id,
        // {password: 0, createAt: 0, updateAt: 0, _id: 0}
    );
    return await UserModel.findOne({ _id: id }). select ('-password -createAt -updateAt -_id');
}

async function dbUpdateUserById (id, newUser){
    return await UserModel.findByIdAndUpdate(
        id,       // Id del documento que se va a actualizar
        newUser,  // Objeto con los datos a actualizar del documento
        {new: true, select: '-password'} // Retornar los nuevos cambios realizados
    );
    // Forma 2: Usando FindOneAndUpdate
    return await UserModel.findOneAndUpdate(
        { _id: id },
        newUser,
        {new: true}
    ). select ('-password');
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