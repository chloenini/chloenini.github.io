console.log("Hello Destruction");

var Airtable = require("airtable");
console.log(Airtable);
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQbDW1aQy6rVQXQ'}).base('appGrE776aXr0mcEt');

base('destruction').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
