const express = require('express');
const router = express.Router();

const Celebrity = require('./../models/Celebrity')

//4.
router.post( '/new', (req, res, next )=> {
    console.log('BODY', req.body);

    const { name, occupation, catchPhrase } = req.body;
    const celebrity = new Celebrity({ name, occupation,catchPhrase })
    
    celebrity.save()
    
    .then( ( ) => console.log('Insert succesfull'))        
    .then( () => res.redirect( '/celebrities'))
    .catch( (err) => {
            console.log(err)
            res.redirect('celebrities/new')
        })
})

router.get( '/new', (req, res, next ) => {
        res.render('celebrities/new')
})

//5.
router.post('/:celebrityId/delete', (req, res, next) => {
    const {celebrityId} = req.params;

    Celebrity.findByIdAndDelete(celebrityId)
    .then( () => res.redirect('/celebrities'))
    .catch( (err) => console.log(err));
})

//Bonus
router.get('/:celebrityId/edit', (req, res, next) =>{
    const {celebrityId}  = req.params;
    console.log(req.params);

    Celebrity.findById(celebrityId)
        .then( (celebrityObject) => res.render('celebrities/edit', {celebrityObject} ))
        .catch( (err) => console.log(err)) 
})

router.post( '/:celebrityId', (req, res, next) => {
    console.log('BODY', req.body);

    const {celebrityId } = req.query;
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.updateOne( {celebrityId},  { name, occupation, catchPhrase })
        .then( () => res.redirect('/celebrities'))
        .catch((err) => console.log(err))
})


//3.
router.get( '/:celebrityId', ( req, res, next )=> {

        const {celebrityId} = req.query;

    Celebrity.findById(celebrityId)
        .then( ( oneCelebrity ) => {
            
            res.render( 'celebrities/show',  {oneCelebrity} )   
        })
        .catch( (err) => console.log(err));
})

router.get( '/' ,function( req, res, next ) {
    console.log('test');
    
    Celebrity.find( )
        .then( (allCelebrity) => {
            res.render( 'celebrities',  {allCelebrity} )   
        })
        .catch( (err) => console.log(err));
})


module.exports = router;