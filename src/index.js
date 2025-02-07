const express = require('express');  // importamos express pars deifinir las rutas de la aplicacion
const app = express();

const greeting = require('./controllers/main.controllers');
const dbConection = require('./config/mongo.config');


//Paso: conexion a la base de datos
dbConection();

//Paso: Darle la capacidad a Express de poder Interpretar JSON
app.use(express.json());

//Paso: Define una ruta para / es decir http://localhost:3000/
app.get('/', greeting);

//Paso: Definir las rutas en archivos separados
app.use('/api/pets', require('./routes/pets.routes'));
app.use ('/api/users', require('./routes/users.routes'));
app.use('/api/animals', require ('./routes/typeAnimals.routes'))
// Ultimo paso: Lanzo el servidor web usando Express
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});