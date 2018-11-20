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
    $( '#booksOutput' ).empty( );
    for( let book of books ){
        $( '#booksOutput' ).append( `
        <tr class="bookDiv">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.published}</td>
        </tr>
        ` )
    }
}
// add new book to DB
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
        clearInputs( );
    }).catch( function( err ){
        console.log( err );
    })
}// end addBook

//clear inputs after successfully adding book to DB
function clearInputs( ){
    $('#titleIn').val('');
    $('#authorIn').val('');
    $('#publishedIn').val('');
}// end clearInputs