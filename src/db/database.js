const mongoose = require('mongoose');

/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost/commands";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

// mongoose.connect('mongodb+srv://kharma-solutions:TheControl3d15_@cluster0.2l6be.mongodb.net/commandslinux?retryWrites=true&w=majority', {
// mongoose.connect('mongodb://localhost/commands', {
 mongoose.connect('mongodb+srv://kharma-solutions:Ql9LR57ScmT847yI@cluster0.2l6be.mongodb.net/api-rest-commands?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then( db   => console.log( db.connection.host ) )
  .catch( err => console.log( err ) ); 