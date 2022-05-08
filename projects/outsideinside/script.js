/* globals require */
console.log("Hello, Airtable");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQbDW1aQy6rVQXQ'}).base('appGrE776aXr0mcEt');

// Get the "destrcution" table from the base, specify the view to be "View 2" (which is FILTERED for indie songs and SORTED by rating) and specify the callback functions that will receive each page of data
base("destruction")
  .select({
    // add your view in here
    view: "Grid view",
  })
  .eachPage(gotPageOfData, gotAllData, err => {
  if (err) {
    console.error(err)
  }
});

// an empty array to hold our people data
let destruction = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of songs
function gotPageOfData(records, fetchNextPage) {
  console.log("gotPageOfData()");
  console.log("There are " + records.length + " items in records");
  console.log(records);
  // This takes the list of records and add them to the destruction array
  destruction.push(...records);
  //console.log(destruction[0]);
  // request more pages
  
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
function gotAllData(err) {
  console.log("gotAllData()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the data
  showData();
}

// show the data on the page
function showData() {
  console.log("showData()");
  
  let albumCoverEl = document.getElementById("image")
  
   // find the shelf element
  const destructionsContainer = document.querySelector("#container");
  console.log(destruction.length);
  for(let i=0;i<100;i++){
    console.log("SHOWING THE PICTURE");
     console.log(destruction[i]);
    const destructionContainer = document.createElement("div");
     destructionContainer.classList.add("destructionstyleContainer");
    destructionsContainer.appendChild(destructionContainer);

     const nameElement = document.createElement("h2");
      nameElement.innerText = destruction[i].fields.name;
     destructionContainer.appendChild(nameElement);
    const imageElement = document.createElement("img");
    //let albumArtElement = albumCoverEl.cloneNode(true)
    imageElement.classList.add("imagestyle")
     //console.log(document)
     imageElement.src = destruction[i].fields.image[0].url;
     imageElement.innerText = destruction[i].fields.image;
     destructionContainer.appendChild(imageElement);
  }
   // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
   destruction.forEach((columninfo) => {
     // Print out what a single songs's data fields looks like
     console.log("SHOWING THE PICTURE");
     console.log(columninfo.fields);

    /** CREATE CONTAINER */
     const destructionContainer = document.createElement("div");
     destructionContainer.classList.add("destructionstyleContainer");
     //destructionsContainer.appendChild(destructionContainer);
     
    /*******************
     ADD THE TITLE
     *******************/

     const nameElement = document.createElement("h2");
      nameElement.innerText = columninfo.fields.name;
     destructionContainer.appendChild(nameElement);
     
     /*******************
     ADD ARTIST TITLE
     *******************/

     const artistElement = document.createElement("p");
     artistElement.innerText = columninfo.fields.artist;
     destructionContainer.appendChild(artistElement);

//      /*******************
//      ADD SONG RATING
//     *******************/

//      let ratingElement = document.createElement("p");
//      ratingElement.innerText = "Rating: " + destruction.fields.rating;
//      destructionContainer.appendChild(ratingElement);
     
     
     /*******************
     ADD GENRES
     *******************/

     let genresList = columninfo.fields.genre;

    genresList.forEach(function (genre) {
       const genreElement = document.createElement("span");
       genreElement.classList.add("genreTag");
       genreElement.innerText = genre;
       destructionContainer.appendChild(genreElement);
       // TODO: Add this genre name as a class to the destructionContainer
      destructionContainer.classList.add(genre);
    });
     
     
     /*******************
     ADD COVER ART
    *******************/
    let albumArtElement = albumCoverEl.cloneNode(true)
    albumArtElement.classList.add("cover")
     //console.log(document)
     albumArtElement.src = columninfo.fields.image[0].url;
     albumArtElement.innerText = columninfo.fields.image;
     destructionContainer.appendChild(albumArtElement);
     
    

     /***********
      TODO: CREATE FILTER-BY-GENRE FUNCTIONALITY
      **********/

     let classicalButton = document.getElementById("showClassicalButton");
     classicalButton.addEventListener("click", function () {
       if (destructionContainer.classList.contains("classical")) {
         destructionContainer.style.display = "block";
       } else {
         destructionContainer.style.display = "none";
       }
     });

     let indieButton = document.getElementById("showIndieButton");
     indieButton.addEventListener("click", function () {
       if (destructionContainer.classList.contains("indie")) {
         destructionContainer.style.display = "block";
       } else {
         destructionContainer.style.display = "none";
       }
     });

     let dreampopButton = document.getElementById("showDreampopButton");
     dreampopButton.addEventListener("click", function () {
       if (destructionContainer.classList.contains("dreampop")) {
         destructionContainer.style.display = "block";
       } else {
         destructionContainer.style.display = "none";
       }
     });

     let popButton = document.getElementById("showPopButton");
     popButton.addEventListener("click", function () {
       if (destructionContainer.classList.contains("pop")) {
         destructionContainer.style.display = "block";
       } else {
         destructionContainer.style.display = "none";
       }
     });

     let resetButtton = document.getElementById("resetButton");
     resetButtton.addEventListener("click", function () {
       destructionContainer.style.display = "block";
     });
     
     destructionsContainer.appendChild(destructionContainer);
   });
 }

  let sortHighLow = document.getElementById('sortHighLow');
  sortHighLow.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const destructionsContainer = document.querySelector("#container");
      destructionsContainer.innerHTML = "";
      // Sort the songs array according to rating from high to low
      sortRatingHighLow();
    showData();
  });

  function sortRatingHighLow(){
    destructions.sort(function(a, b) {
      // For any two songs in the songs array, compare them by their rating number
     return b.fields.rating - a.fields.rating;
    });
  }

  let sortLowHigh = document.getElementById('sortLowHigh');
  sortLowHigh.addEventListener("click", function(){
      // Clear the container div (remove all the previous elements)
      const destructionsContainer = document.querySelector("#container");
       destructionsContainer.innerHTML = "";
       // Sort the songs array according to rating from low to high
      sortRatingLowHigh();
      showData();
  });

 function sortRatingLowHigh(){
    destructions.sort(function(a, b) {
      // For any two songs in the songs array, compare them by their rating number
      // (NOTE THE ORDER HAS SWITCHED)
      return a.fields.rating - b.fields.rating;
    });
 }
