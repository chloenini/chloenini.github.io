console.log("Hello Destruction");

var Airtable = require("airtable");
console.log(Airtable);


// use the airtable library to get a variable that represents one of our bases
// YOU WILL NEED TO REPLACE THIS API KEY AND BASE WITH YOUR UNIQUE INFO, FOUND IN AIRTABLE
var base = new Airtable({ apiKey: 'keyQbDW1aQy6rVQXQ' }).base(
  'appGrE776aXr0mcEt'
);


//get the "books" table from the base, select ALL the records
// specify the functions that will receive the data
base("destruction").select({}).eachPage(gotPageOfDestruction, gotAllDestruction);

// an empty array to hold our book data
const destruction = [];

// callback function that receives our data
function gotPageOfDestruction(records, fetchNextPage) {
  console.log("gotPageOfDestruction()");
  // add the records from this page to our books array
  destruction.push(...records);
  // request more pages
  fetchNextPage();
}

// callback function that is used when all pages are loaded
function gotAllDestruction(err) {
  console.log("gotAllDestruction()");

  // report an error> this is what shows up if there's a problem
  if (err) {
    console.log("error loading destruction");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogDestruction();
  showDestruction();
}

// just loop through the books and console.log them
function consoleLogDestruction() {
  console.log("consoleLogDestruction()");
  destruction.forEach((destruction) => {
    console.log("Destruction:", destruction);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showDestruction() {
  console.log("showDestruction()");
  books.forEach((destruction) => {
    const h2 = document.createElement("h2");
//     try changing 'title' below to 'description' and your description will show instead of your title    
    h2.innerText = destruction.fields.name;
    document.body.appendChild(h2);
  });
}