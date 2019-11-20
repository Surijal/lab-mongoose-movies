const express = require('express');
const router  = express.Router();

const celebritiesRouter = require('./celebrities');
const moviesRouter = require('./movies');


router.use('/movies', moviesRouter);
router.use( '/celebrities', celebritiesRouter);
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
