const express = require( 'express' );
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'bookstore',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
})// end pool constructor

// when connecting to the DB
pool.on('connect', () => {
    console.log('connected to DB');
})// end connect to DB

pool.on('error', (err) => {
    console.log('error with DB:', err)
})// end DB error catch

router.get( '/', ( req, res ) => {
    console.log( 'GET HIT' )
    // create query and run on pool
    const queryString = 'SELECT * FROM books;';
    pool.query( queryString ).then( (results ) => {
        res.send( results.rows );
    }).catch( ( err ) => {
        console.log( 'error retrieving data:', err );
    })// end query
})

router.post( '/', ( req, res ) => {
    console.log( 'POST hit:', req.body );
    res.send( 'woof' );
})

module.exports = router;