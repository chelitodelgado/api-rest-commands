const { Router } =  require('express');
const router = Router();
var path = require('path');

const Command = require('../model/Command');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../home/index.html'));
    // res.send("Bienvenido a mi api");
});

// Mostrar 10 registros por pagina
router.get('/v1/commands/', async ( req, res) => {
    const limit = parseInt( req.query.limit || 450 );
    const page  = parseInt( req.query.page || 1 );
    const commands = await Command.paginate( {}, { limit, page } );
    res.json( commands );
});

// Insertar registros
router.post('/v1/commands/', async (req, res) => {
    console.log(req.body);
    const newCommand = new Command( req.body );
    const commandSave =  await newCommand.save();
    res.send( commandSave );
});

// Eliminar registros
router.delete('/v1/commands/:id', async (req,res) => {
    try {
        await Command.findByIdAndDelete(req.params.id);
        console.log("Comando eliminado");
        res.status(200).send();
      } catch (error) {
        res.status(500).send(error);
      }
});

// Eliminar todos los registros
router.delete('/v1/commands', async (req,res) => {
    try {
        deleteAll = await Command.deleteMany({});
        res.send(deleteAll);
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;
