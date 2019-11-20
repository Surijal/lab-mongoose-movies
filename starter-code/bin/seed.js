const mongoose = require('mongoose');
const Celebritys = require('./../models/celebrity');
const Movies = require('./../models/movie');




const celebrityArray = [
    {
        name: 'Newton',
        occupation: 'BLa',
        catchPhrase: 'Bub'
    },
    {
        name: 'Galileo',
        occupation: 'bli',
        catchPhrase: 'blab'
    },
    {
        name: 'Einstein',
        occupation: 'buh',
        catchPhrase: 'boh'
    }]

    const movieArray = [
        {
            title: 'movie1',
            genre: 'BLa',
            plot: 'Blub'
        },
        {
            title: 'movie2',
            genre: 'bli',
            plot: 'blab'
        },
        {
            title: 'movie3',
            genre: 'buh',
            plot: 'boh'
        }]

    


    mongoose
        .connect('mongodb://localhost:27017/celebrity', { useNewUrlParser: true })
            .then( () => {
                
                return Movies.create( movieArray);
                
            })
            .then( () => {
                console.log(movieArray);
                console.log('Inserted documents',  movieArray.length);
                mongoose.connection.close();
                
            })
            .catch( (err) => console.log(err))