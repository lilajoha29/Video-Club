const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaMovie = new schema({
  idMovie: String,
  Title: String,
  Year: Date,
  Duration: Number,
  Language: String,
  Launch: Date,
  Country: String,
});
const movieModel = mongoose.model('movie', schemaMovie);
module.exports = router;

/*
router.get('/test', (req, res) => {
  res.end('Carga desde test');
}); */

//Request used to add Movies
router.post('/api/addNewMovie', (req, res) => {
  const newMovie = new movieModel({
    idMovie: req.body.idMovie,
    Title: req.body.title,
    Year: req.body.Year,
    Duration: req.body.Duration,
    Language: req.body.Language,
    Launch: req.body.Launch,
    Country: req.body.Country
  })
  newMovie.save(function(err){
    if(!err){
      res.send('Película agregada Correctamente')
    } else{
      res.send(err)
    }
  })
})
//Request used to get all Movies
router.get('/api/getMovie', (req, res) => {
  movieModel.find({}, function(docs, err){
    if(!err){
      res.send('Película agregada Correctamente')
    } else{
      res.send(err)
    }
  })
})
//getMovie
