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

router.post('/getdatamovie', (req, res)=>{
  movieModel.find({idMovie:req.body.idMovie}, function(docs, err){
    if(!err){
      res.send(docs)
    }else{
      res.send(err)
    }
  })
})

router.post('/updatemovie', (req, res)=>{
  movieModel.findOneAndUpdate({idMovie:req.body.idMovie}, {
    nombre: req.body.name,
    email:req.body.email,
    phone:req.body.phone
  })
}, (err) =>{
  if(!err){
    res.send('Movie Update')
  }else{
    res.send(err)
  }
})
