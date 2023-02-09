const express = require('express');
const app = express();
const port = 3000;

const archivoBD = require('./connection')

const movieRoute = require('./Routes/movies')


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))


app.use('/api/movie', movieRoute)

app.get('/', (req, res) => {
  res.end('Bienvenido al servidor Backend Node.js')
})

app.listen(port, () => {
  console.log('El servidor esta corriendo correctamente')
})
