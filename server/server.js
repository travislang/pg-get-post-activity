//REQUIRES
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const pg = require( 'pg' );
const app = express( );
const books = require( './modules/routes/books.route.js' );

//USES
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/books', books );

// GLOBALS
const PORT = process.env.PORT || 5000;
const Pool = pg.Pool;
const pool = new Pool({
    database: 'bookstore',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
})// end pool constructor

// when connecting to the DB
pool.on( 'connect', () => {
    console.log( 'connected to DB' );
})// end connect to DB

pool.on( 'error', ( err ) => {
    console.log( 'error with DB:', err )
})// end DB error catch


// start up server

app.listen( PORT, ( req, res ) => {
    console.log( 'server running on port:', PORT );
})