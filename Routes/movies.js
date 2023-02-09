const express = require('express')
const router = express.Router()


const mongoose = require('mongoose')
const schema = mongoose.Schema


const schemaMovie = new schema({
    idMovie: String,
    title: String,
    Year: Date,
    Duration: {
      hours: Number,
      minutes: Number,
      seconds: Number
    },
    Language: String,
    Launch: Date,
    Country: String
})
const movieModel = mongoose.model('movie', schemaMovie)
module.exports = router

router.get('/test', (req, res) => {
  res.end('Carga desde test')
})
