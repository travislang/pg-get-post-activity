//REQUIRES
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express( );
const books = require( './modules/routes/books.route.js' );

//USES
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/books', books );

// GLOBALS
const PORT = process.env.PORT || 5000;



// start up server

app.listen( PORT, ( req, res ) => {
    console.log( 'server running on port:', PORT );
})