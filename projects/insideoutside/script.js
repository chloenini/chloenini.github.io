console.log("Hello Destruction");

// var Airtable = "https://api.airtable.com/v0/appGrE776aXr0mcEt/Destruction?api_key=keyQbDW1aQy6rVQXQ"
// console.log(Airtable);
 var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQbDW1aQy6rVQXQ'}).base('appGrE776aXr0mcEt');

base('destruction').select({
    // Selecting the first 3 records in Grid view:
//you can change this number to increase/decrease the number of records shown in the console
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
});
base('destruction').select({}).eachPage(gotDestroyed, gotAllDestroyed);
  
// an empty array to hold our book data
const destroyed = [];

// callback function that receives our data
function gotDestroyed(records, fetchNextPage) {
  console.log("gotDestroyed()");
  //
  destroyed.push(...records);
  // request more pages
  fetchNextPage();
}

// callback function that is used when all pages are loaded
function gotAllDestroyed(err) {
  console.log("gotAllDestroyed()");

  // report an error> this is what shows up if there's a problem
  if (err) {
    console.log("error loading destroyed");
    console.error(err);
    return;
  }
//
  // call functions to log and show the books
  consoleLogDestroyed();
  showDestroyed();
}

// just loop through the books and console.log them
function consoleLogDestroyed() {
  console.log("consoleLogDestroyed()");
  destroyed.forEach((destroyed) => {
    console.log("Object:", destroyed);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showBooks() {
  console.log("showDestroyed()");
  destroyed.forEach((destroyed) => {
    const h2 = document.createElement("h2");
//     try changing 'title' below to 'description' and your description will show instead of your title    
    h2.innerText = destroyed.fields.name;
    document.body.appendChild(h2);
  });
}

