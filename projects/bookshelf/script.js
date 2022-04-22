
console.log("Hello bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

//use airtable library 
var base = new Airtable({apiKey: 'keyQbDW1aQy6rVQXQ'}).base(
    'apprVYChxtTUtpfKY');

//get ALL "books" from table from airtable database > COMMENT THIS LINE OUT
//base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

//ADD VIEW to get a select "view" "books" from table from airtable database
base("books").select({
  
}).eachPage(gotPageOfBooks, gotAllBooks);

//empty array to hold our book data
const books = [];

//function that recieves our data
function gotPageOfBooks(records, fetchNextPage){
    console.log("gotPageOfBooks()");
    //add the records from this page to our books array
    books.push(...records);
    //request more pages
    fetchNextPage();
}

//call function 
function gotAllBooks(err) {
    console.log("gotAllBooks()");

    //report an error 
    if (err) {
        console.log("error loading books");
        console.error(err);
        return;
    }

    //call functions to log and show books 
    // consoleLogBooks();
    showBooks();
}

////////////////////////////////////////////////////////

// create the book-spines on the shelf
function showBooks() {
  console.log("showBooks()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  books.forEach((book) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    div.innerText = book.fields.title;
    div.classList.add("book-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showBook(book, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}

// show the detail info for a book, and highlight the active book-spine
function showBook(book, div) {
  console.log("showBook()", book);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");

  // populate the template with the data in the provided book
  bookDetail.getElementsByClassName("title")[0].innerText = book.fields.title; //
  bookDetail.getElementsByClassName("description")[0].innerText =
    book.fields.description;
  bookDetail.getElementsByClassName("more")[0].href = book.fields.more;
  bookDetail.getElementsByClassName("cover-image")[0].src =
    book.fields.cover_image[0].url;

  // remove the .active class from any book spines that have it...
  const shelf = document.getElementById("shelf");
  const bookSpines = shelf.getElementsByClassName("active");
  for (const bookSpine of bookSpines) {
    bookSpine.classList.remove("active");
  }
  // ...and set it on the one just clicked
  div.classList.add("active");

  // reveal the detail element, we only really need this the first time
  // but its not hurting to do it more than once
  bookDetail.classList.remove("hidden");
}

let myCursor = document.querySelector("#customCursor");

window.addEventListener("mousemove", function(event){
  
  console.log(event);
  console.log("X: ");
  console.log(event.pageX);
  console.log("Y: ")
  console.log(event.pageY);
  myCursor.style.top = (event.pageY - 2) + "px";
  myCursor.style.left = (event.pageX - 2) + "px";
});
