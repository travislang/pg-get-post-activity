$( document ).ready( readyNow );

function readyNow( ){
    console.log( 'JQ' );
    getBooks( );
}// end readyNow


function getBooks( ){
    $.ajax({
        method: 'GET',
        url: '/books'
    }).then( function( res ){
        console.log( 'response from server:', res );
        displayBooks( res );
    }).catch( function( err ){
        console.log( 'error from getBooks:', err );
    })
}// end getBooks

//display books on DOM
function displayBooks( books ){
    for( let book of books ){
        $( '#booksOutputDiv' ).append( `
        <div class="bookDiv">
        <p><strong>Title:</strong>${book.title}</p>
        <p><strong>Author:</strong>${book.author}</p>
        <p><strong>Published:</strong>${book.published}</p>
        </div>
        <hr>
        ` )
    }
}