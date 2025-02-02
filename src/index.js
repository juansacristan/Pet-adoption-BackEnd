const express = require('express');  // importamos express pars deifinir las rutas de la aplicacion
const app = express();

const greeting = require('./controllers/main.controllers');
const dbConection = require('./config/mongo.config');


//Paso: conexion a la base de datos
dbConection();

//Paso: Define una ruta para / es decir http://localhost:3000/
app.get('/', greeting);

//Paso: Definir las rutas en archivos separados
app.use('/api/pets', require('./routes/pets.routes'));

// Ultimo paso: Lanzo el servidor web usando Express
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});