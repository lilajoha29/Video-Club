const express = require('express');
const app = express();

const archivoBD = require('./connection')

const movieRoute = require('./Routes/movies')


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/movie', movieRoute)

app.get('/', (req, res) => {
  res.end('Bienvenido al servidor Backend Node.js');
})

app.listen(5000, () => {
  console.log('El servidor esta corriendo correctamente');
  ;
})
