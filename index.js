const express = require('express');
const app = express();
const port = 3000;

const archivoBD = require('./conection')

app.get('/', (req, res) => {
  res.end('Bienvenido al servidor Backend Node.js')
})

app.listen(port, () => {
  console.log('El servidor esta corriendo correctamente')
})
