const mongoose = require('mongoose');

const URI = 'mongodb+srv://roman:residentrm1@cluster0.aivqn0o.mongodb.net/test'

mongoose.connect( URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection
connection.once('open', () => {
  console.log("Conectado correctamente con la base de datos")
});