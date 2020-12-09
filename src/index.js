const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

const commandsRoutes = require('./routes/commands');

require('./db/database');

app.use( cors() );

app.use( express.json() );

app.use( commandsRoutes );

app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), () =>{
    console.log(`Server running PORT:${app.get('port')}`);
});
