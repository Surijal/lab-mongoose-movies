const express = require('express');
const router = express.Router();

const Movie = require('./../models/movie');


//8
router.get('/:movieId', (req, res, next) =>{
      const {movieId} = req.params;
      console.log('MovieID', {movieId} );
      
      Movie.findById(movieId)
        .then( (oneMovie) => res.render('movies/detail', {oneMovie}))
        .catch((err) => console.log(err)
        )
})


router.get('/', (req, res, next ) => {

  Movie.find()
  .then((allMovies) => res.render('movies', {allMovies}))
  .catch((err) => console.log(err)
  )
})

module.exports = router;

