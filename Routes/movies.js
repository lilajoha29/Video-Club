const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Eschemas = mongoose.Schema;

const schemaMovie = new Eschemas({
  idMovie: String,
  Title: String,
  Year: Number,
  Duration: Number,
  Language: String,
  Launch: Number,
  Country: String
});
const movieModel = mongoose.model('movie', schemaMovie);
module.exports = router;

/*
router.get('/test', (req, res) => {
  res.end('Carga desde test');
}); */

//Request used to add Movies
router.post('/addNewMovie', (req, res) => {
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
router.get('/getMovie', (req, res) => {
  movieModel.find({}, function(docs, err){
    if(!err){
      res.send('Película agregada Correctamente')
    } else{
      res.send(err)
    }
  })
})
//getMovie
