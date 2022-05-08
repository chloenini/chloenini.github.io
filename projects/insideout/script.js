console.log("Hello, Airtable");

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyQbDW1aQy6rVQXQ" }).base(
  "appGrE776aXr0mcEt"
);

// Get the "destrcution" table from the base, specify the view to be "View 2" (which is FILTERED for indie songs and SORTED by rating) and specify the callback functions that will receive each page of data
base("destruction")
  .select({
    // add your view in here
    view: "Grid view",
  })
  .eachPage(gotPageOfData, gotAllData, (err) => {
    if (err) {
      console.error(err);
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
const destructionsContainer = document.querySelector("#container");
function showData() {
  console.log("showData()");

  let albumCoverEl = document.getElementById("image");

  // find the shelf element

  console.log(destruction.length);
  for (let i = 0; i < 100; i++) {
    console.log("SHOWING THE PICTURE");
    console.log(destruction[i]);
    const destructionContainer = document.createElement("div");
    destructionContainer.classList.add("destructionstyleContainer");
    destructionsContainer.appendChild(destructionContainer);
    //to add the name
    // const nameElement = document.createElement("h2");
    //  nameElement.innerText = destruction[i].fields.name;
    // destructionContainer.appendChild(nameElement);
    // to add the img
    const imageElement = document.createElement("img");

    imageElement.classList.add("imagestyle");
    imageElement.src = destruction[i].fields.image[0].url;
    imageElement.innerText = destruction[i].fields.image;
    destructionContainer.appendChild(imageElement);
    //adding the category class
    let category = destruction[i].fields.category[0];
    if (category == "art & destruction") {
      destructionContainer.classList.add("art");
    } else if (category == "natural destruction") {
      destructionContainer.classList.add("natural");
    } else if (category == "socio-political causes") {
      destructionContainer.classList.add("politics");
    }
    // destructionContainer.classList.add(destruction[i].fields.category[0]);
    console.log(destructionContainer);
  }
  // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
  destruction.forEach((columninfo) => {
    // Print out what a single songs's data fields looks like
    console.log("SHOWING THE PICTURE");
    console.log(columninfo.fields);
  });

  //      let categoryList = columninfo.fields.category;

  //     categoryList.forEach(function (category) {
  //        const categoryElement = document.createElement("span");
  //        categoryElement.classList.add("categoryTag");
  //        categoryElement.innerText = category;
  //        destructionContainer.appendChild(categoryElement);
  //        // TODO: Add this genre name as a class to the destructionContainer
  //       destructionContainer.classList.add(category);
  //     });

  /***********
      TODO: CREATE FILTER-BY-GENRE FUNCTIONALITY
      **********/
}
const destructionArray = destructionsContainer.childNodes;

let socioButton = document.getElementById("showSocioButton");
socioButton.addEventListener("click", function () {
  // console.log(destructionArray);
  destructionArray.forEach((div) => {
    let category = div.classList.contains("politics");
    console.log(category);
    if (category == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});

let naturalButton = document.getElementById("showNaturalButton");
naturalButton.addEventListener("click", function () {
  // console.log(destructionArray);
  destructionArray.forEach((div) => {
    let category = div.classList.contains("natural");
    console.log(category);
    if (category == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});

let artButton = document.getElementById("showArtButton");
artButton.addEventListener("click", function () {
  // console.log(destructionArray);
  destructionArray.forEach((div) => {
    let category = div.classList.contains("art");
    console.log(category);
    if (category == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});

// const destructionContainer = document.createElement("div");
let resetButtton = document.getElementById("resetButton");
resetButtton.addEventListener("click", function () {
  destructionArray.forEach((div) => {
    div.style.display = "block";
  });
  // destructionContainer.style.display = "block";
});

// destructionsContainer.appendChild(destructionContainer);

// let subcategory= destruction[i].fields.subcategory[0];
//     if (category=="conflict in middle eastern countries"){
//      destructionContainer.classList.add("middleeast");
//     }
//     else if (category=="self-destructive art"){
//      destructionContainer.classList.add("selfdestructive");
//     }
//     else if (category=="something made out of destructed material"){
//      destructionContainer.classList.add("destructedmaterial");

//     else if (category=="caused by fire"){
//      destructionContainer.classList.add("fire");

//     else if (category=="destruction caused by earthquakes"){
//      destructionContainer.classList.add("earthquakes");

//     else if (category=="ukrainian war"){
//      destructionContainer.classList.add("ukraine");

//       else if (category=="active destruction as part of the piece"){
//      destructionContainer.classList.add("active");

//      else if (category=="destruction caused by the power of wind"){
//      destructionContainer.classList.add("wind");

//     else if (category=="conflict from past centuries"){
//      destructionContainer.classList.add("past");

//     else if (category=="final product is a consequence of destruction"){
//      destructionContainer.classList.add("final");

//       else if (category=="something made out of destructed material"){
//      destructionContainer.classList.add("material");

//         else if (category=="destruction caused by earthquakes and aquatic forces"){
//      destructionContainer.classList.add("earthquakeaquatic");

//           else if (category=="destruction caused by the power of wind"){
//      destructionContainer.classList.add("wind");

// //   function sortRatingHighLow(){
// //     destructions.sort(function(a, b) {
// //       // For any two songs in the songs array, compare them by their rating number
// //      return b.fields.rating - a.fields.rating;
// //     });
// //   }

// //   let sortLowHigh = document.getElementById('sortLowHigh');
// //   sortLowHigh.addEventListener("click", function(){
// //       // Clear the container div (remove all the previous elements)
// //       const destructionsContainer = document.querySelector("#container");
// //        destructionsContainer.innerHTML = "";
// //        // Sort the songs array according to rating from low to high
// //       sortRatingLowHigh();
// //       showData();
//   });

// function sortRatingLowHigh(){
//    destructions.sort(function(a, b) {
//      // For any two songs in the songs array, compare them by their rating number
//      // (NOTE THE ORDER HAS SWITCHED)
//      return a.fields.rating - b.fields.rating;
//    });