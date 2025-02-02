const express = require ('express');  // importamos express pars deifinir las rutas de la aplicacion
const app = express();

app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});