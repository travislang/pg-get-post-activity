$( document ).ready( readyNow );

function readyNow( ){
    console.log( 'JQ' );
    $( '#addBookButton' ).on( 'click', addBook );
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
    $( '#booksOutputDiv' ).empty( );
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

function addBook( ){
    console.log( 'in addBook' );
    const objToSend = {
        title: $( '#titleIn' ).val( ),
        author: $( '#authorIn' ).val( ),
        published: $( '#publishedIn' ).val( )
    }
    console.log( 'sending:', objToSend );
    $.ajax({
        method: 'POST',
        url: '/books',
        data: objToSend
    }).then( function( res ){
        console.log( 'back from POST with:', res );
        getBooks( );
    }).catch( function( err ){
        console.log( err );
    })
}// end addBook