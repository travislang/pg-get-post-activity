const express = require( 'express' );
const router = express.Router;

router.get( '/', ( req, res ) => {
    console.log( 'GET HIT' )
    res.send( 'meow' );
})

router.post( '/', ( req, res ) => {
    console.log( 'POST hit:', req.body );
    res.send( 'woof' );
})

module.exports = router;