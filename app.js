const express = require('express');
const app = express();
const puerto = 3020;

app.get('/', (req, res) => {
    res.send('Servicio de BD Comercializadora en funcionamiento');
});

//Cargar librería para 'parseo' de contenido JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//Cargar libreria para habilitar cors
const cors = require('cors')
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require("./rutas/venta.rutas")(app);

app.listen(puerto, () => {
    console.log(`Servicio de BD Comercializadora escuchando en http://localhost:${puerto}`);
})