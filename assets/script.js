// Variables for buttons
const btnSubmit = document.getElementById("submit-btn");
const btnFind = document.getElementById("find-btn");
const textBox = document.querySelector(".input");
const historyEl = document.getElementById("history1");
const historyList = document.getElementById("history-ul-list");
const searchPage = document.getElementById("searchpage");
const airQualityPage = document.getElementById("airquality");
const searchHistoryPage = document.getElementById("historypage");
const aboutUsPage = document.getElementById("aboutuspage");
const myErrorBox = document.querySelector(".control");


// Kayhan Objective Function
function objective() {
  // connect text-box to submit button and get my location
  // need a button for locating me automactically
  // gonna be using function expressions
}

// const areaText = function (e) {
//   e.preventDefault();
//   const language = textBox.value;
//   if (language) {
//     // streetAdd(language);
//   } else {
//     console.log("Please Type something");
//     const hMe = document.createElement("h1");
//     myErrorBox.appendChild(hMe);
//     hMe.classList.add("error-message");
//     hMe.innerText = "Error, Please type in a location";
//     hMe.style.color = "red";
//   }
// };

const buttonSubmitHandler = function (e) {
  // Submit Button
  e.preventDefault();
  console.log("Hello");
};

const buttonFindLocationHandler = function (e) {
  // Submit Button
  e.preventDefault();
  console.log("Hello");
  searchHistory();
};

// SEARCH HISTORY PAGE 
// SEARCH HISTORY FUNCTION (HISTORY PAGE)((LOCAL STORAGE))

var storageArray = [];

function searchHistory(event) {
  // e.preventDefault();
  // var storageArray = localStorage.getItem('value')
  storageArray.push(textBox.value);

  localStorage.setItem('value', JSON.stringify(storageArray))

  // var storageNameEl = localStorage.getItem('value')
  
  const liEl = document.createElement("li");
  liEl.textContent = textBox.value;
  historyList.appendChild(liEl);

  event.preventDefault()
  // historyList.textContent = localStorage.getItem('value')
}

function clearLocalStorage(){
  localStorage.clear();
  while (historyList.hasChildNodes()) {
    historyList.removeChild(historyList.firstChild);
  }
}

const clearHistoryBtn = document.getElementById("clear-history-list");
clearHistoryBtn.addEventListener("click", clearLocalStorage)



const getLocation = function (user) {
  const OpenApi = `https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=54f233828acf58994eefa05b9027dd89`;

  fetch(OpenApi)
    .then((response) => response.json())
    .then((response) => {
      const lat = response.coord.lat;
      const lon = response.coord.lon;
      if (response) {
        locateMe(lat, lon);
      }
    });
};

// Google API
const locateMe = function (lat, lng) {
  const GoogleApi = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBrNLhoIcFa9qPY_bPWF-qVPVF9qRS3dc8`;

  fetch(GoogleApi)
    .then((response) => response.json())
    .then((response) => console.log(response));
};


const successCallback = (position) => {
  console.log(position);
};

// historyEl.addEventListener("click", searchHistory);

// function searchHistorySave(){
//     save each user search "location name" --> saves to localStorage
// }


function getC() {
  navigator.geolocation.getCurrentPosition(successCallback);
}


function getC() {
  navigator.geolocation.getCurrentPosition(successCallback);
}

getC();
// function streetAdd(address) {
//   const myAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBrNLhoIcFa9qPY_bPWF-qVPVF9qRS3dc8`;
//   fetch(myAPI)
//     .then((response) => response.json())
//     .then((response) => {
//       if (response) {
//         console.log(response);
//       }
//     });
// }

// function streetAdd(address) {
//   const myAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBrNLhoIcFa9qPY_bPWF-qVPVF9qRS3dc8`;
//   fetch(myAPI)
//     .then((response) => response.json())
//     .then((response) => {
//       if (response) {
//         const lat = response.results[0].geometry.location.lat;
//         const lng = response.results[0].geometry.location.lng;
//         console.log(response.results[0].formatted_address);
//         fetchAirData(lat, lng);
//       }
//     });
// }

function fetchAirData(lat, lon) {
  const airApi = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=3e4ec6e7-66fd-4056-9d5b-874e8d797d7c`;
  fetch(airApi)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.current.pollution);
    });
}

btnSubmit.addEventListener("click", searchHistory);
btnFind.addEventListener("click", buttonFindLocationHandler);




// NAV BAR EVENT LISTENERS AND FUNCTIONS

const navSearchEl = document.getElementById("location-search-nav");
navSearchEl.addEventListener("click", returnToSearch);

const navAirEl = document.getElementById("air-quality-nav");
navAirEl.addEventListener("click", airQualityPageFunc);
function airQualityPageFunc(){
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: flex");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
}

const navHistoryEl = document.getElementById("search-history-nav");
navHistoryEl.addEventListener("click", searchHistoryPageFunc);
function searchHistoryPageFunc(){
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: flex");
  aboutUsPage.setAttribute("style", "display: none");
}

const navAboutEl = document.getElementById("about-us-nav");
navAboutEl.addEventListener("click", aboutUsPageFunc);
function aboutUsPageFunc(){
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: flex");
}

//  RETURN TO MAIN PAGE BUTTON 
var returnButtonEl = document.getElementById("return-to-search-page-button");
var returnButton1El = document.getElementById("return-to-search-page-button-1");
var returnButton2El = document.getElementById("return-to-search-page-button-2");
returnButtonEl.addEventListener("click", returnToSearch);
returnButton1El.addEventListener("click", returnToSearch);
returnButton2El.addEventListener("click", returnToSearch);

function returnToSearch(event) {
    event.preventDefault();
    console.log("button works");
    searchPage.setAttribute("style", "display: flex");
    airQualityPage.setAttribute("style", "display: none");
    searchHistoryPage.setAttribute("style", "display: none");
    aboutUsPage.setAttribute("style", "display: none");
}

