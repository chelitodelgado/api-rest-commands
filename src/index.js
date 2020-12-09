const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const commandsRoutes = require('./routes/commands');

require('./db/database');

app.use( cors() );

app.use( express.json() );

app.use( commandsRoutes );


// Configurar cabeceras y cors
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 
               'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });

});

app.set('port', process.env.PORT || 4000);

app.listen( PORT, () =>{
    console.log(`Server running http://localhost:${app.get('port')}`);
});
