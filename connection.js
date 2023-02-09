const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/VideoClub')

const objetodb = mongoose.connection


objetodb.on('connected', ()=> {
  console.log('conexion correcta a mongoDB')
})
objetodb.on('error', ()=> {
  console.log('error en la conexion a mongoDB')
})

module.exports = mongoose
