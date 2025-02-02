const express = require('express');  // importamos express pars deifinir las rutas de la aplicacion
const app = express();

//Paso: Define una ruta para / es decir http//localhost:3000/
app.get('/', function (req, res){
    res.json({
        ok: true,
        msg: 'Bienvenido a adopcion Adoption Pets'
    })
});

//Paso: Definir las rutas en archivos separados
app.use('/api/pets', require('./routes/pets.routes'));

// Ultimo paso: Lanzo el servidor web usando Express
app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});