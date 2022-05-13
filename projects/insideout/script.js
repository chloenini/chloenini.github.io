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
    let subcategory = destruction[i].fields.subcategory[0];
    if (subcategory == "conflict in middle eastern countries") {
      destructionContainer.classList.add("middle");
    } else if (subcategory == "final product is a consequence of destruction") {
      destructionContainer.classList.add("consequence");
    } else if (subcategory == "caused by fire") {
      destructionContainer.classList.add("fire");
    } else if (subcategory == "destruction caused by aquatic natural forces") {
      destructionContainer.classList.add("aquatic");
    } else if (subcategory == "self-destructive art") {
      destructionContainer.classList.add("self");
    } else if (subcategory == "destruction caused by earthquakes") {
      destructionContainer.classList.add("earthquake");
    } else if (subcategory == "something made out of destructed material") {
      destructionContainer.classList.add("material");
    }else if (subcategory == "active destruction as part of the piece") {
      destructionContainer.classList.add("active");
    }else if (subcategory == "ukrainian war") {
      destructionContainer.classList.add("ukraine");
    }else if (subcategory == "destruction caused by the power of wind") {
      destructionContainer.classList.add("wind");
    }else if (subcategory == "conflict from past centuries") {
      destructionContainer.classList.add("past");
    }
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

let middleButton = document.getElementById("showMiddleButton");
middleButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("middle");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let fireButton = document.getElementById("showFireButton");
fireButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("fire");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let consequenceButton = document.getElementById("showConsequenceButton");
consequenceButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("consequence");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let aquaticButton = document.getElementById("showAquaticButton");
aquaticButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("aquatic");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let selfButton = document.getElementById("showSelfButton");
selfButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("self");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let earthquakeButton = document.getElementById("showEarthquakeButton");
earthquakeButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("earthquake");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let materialButton = document.getElementById("showMaterialButton");
materialButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("material");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let activeButton = document.getElementById("showActiveButton");
activeButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("active");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let ukraineButton = document.getElementById("showUkraineButton");
ukraineButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("ukraine");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let windButton = document.getElementById("showWindButton");
windButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("wind");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
let pastButton = document.getElementById("showPastButton");
pastButton.addEventListener("click", function () {
  
  destructionArray.forEach((div) => {
    let subcategory = div.classList.contains("past");
    console.log(subcategory);
    if (subcategory == true) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});


