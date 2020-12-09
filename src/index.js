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

<<<<<<< HEAD
app.listen( app.get('port'), () =>{
    console.log(`Server running PORT:${app.get('port')}`);
=======
app.listen( PORT, () =>{
    console.log(`Server running http://localhost:${app.get('port')}`);
>>>>>>> 706265269d8b5c783754ff0e741d49e29b632951
});
