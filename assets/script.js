// Variables for buttons
const btnSubmit = document.getElementById("submit-btn");
const btnFind = document.getElementById("find-btn");
const textBox = document.querySelector(".input");
const historyEl = document.getElementById("history1");
const historyList = document.getElementById("historyList");
const searchPage = document.getElementById("searchpage");
const airQualityPage = document.getElementById("airquality");
const searchHistoryPage = document.getElementById("historypage");
const aboutUsPage = document.getElementById("aboutuspage");
const myErrorBox = document.querySelector(".control");
const addressStatus = document.getElementById("location-name-aq");

// Kayhan Objective Function
function objective() {
  // connect text-box to submit button and get my location
  // need a button for locating me automactically
  // gonna be using function expressions
}

const areaText = function (e) {
  e.preventDefault();
  const language = textBox.value;
  if (language) {
    streetAdd(language);
  } else {
    console.log("Please Type something");
    const hMe = document.createElement("h1");
    myErrorBox.appendChild(hMe);
    hMe.classList.add("error-message");
    hMe.innerText = "Error, Please type in a location";
    hMe.style.color = "red";
  }
};

const buttonSubmitHandler = function (e) {
  // Submit Button
  e.preventDefault();
  console.log("Hello");
};

const buttonFindLocationHandler = function (e) {
  // Submit Button
  e.preventDefault();
  console.log("Hello");
};

// SEARCH HISTORY FUNCTION (HISTORY PAGE)((LOCAL STORAGE))
function searchHistory() {
  historyList.innerHTML = textBox.value;
  const li = document.createElement("li");
  historyList.appendChild(li);
}

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

const successCallback = function (position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  getMyCoords(lat, long);
};
const getMyCoords = function (lat, long) {
  return console.log(lat, long);
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

function streetAdd(address) {
  const myAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBrNLhoIcFa9qPY_bPWF-qVPVF9qRS3dc8`;
  fetch(myAPI)
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        const lat = response.results[0].geometry.location.lat;
        const lng = response.results[0].geometry.location.lng;
        console.log(response.results[0].formatted_address);
        fetchAirData(lat, lng);
      }
      const addressBar = document.createElement("h1");
      addressStatus.appendChild(addressBar);
      addressBar.innerText = ` ${response.results[0].formatted_address}`;
    });
}

//  RETURN TO MAIN PAGE BUTTON
var returnButtonEl = document.getElementById("return-to-search-page-button");

function returnToSearch() {
  console.log("button works");
  searchPage.setAttribute("style", "display: flex");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
  // setAttribute("class-name", "new class")
}

function fetchAirData(lat, lon) {
  const airContainer = document.querySelector(".air-q");
  const airApi = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=3e4ec6e7-66fd-4056-9d5b-874e8d797d7c`;
  fetch(airApi)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(response.data.current.pollution);
      const icon = document.createElement("img");
      const myimge = response.data.current.weather.ic;
      const aqius = document.createElement("h1");
      const ts = document.createElement("h1");
      const aqicn = document.createElement("h1");
      const tp = document.createElement("h1");
      const hu = document.createElement("h1");
      const ws = document.createElement("h1");
      // icon.setAttribute("src", `./${myimge.png}`);
      console.log(response.data.current.weather.ic);
      airContainer.appendChild(icon);
      airContainer.appendChild(ts);
      airContainer.appendChild(aqius);
      airContainer.appendChild(aqicn);
      airContainer.appendChild(tp);
      airContainer.appendChild(hu);
      airContainer.appendChild(ws);
      // Need the icon missing it
      // icon.src =
      ts.innerText = `Timestamp: ${response.data.current.weather.ts}`;
      aqicn.innerText = `Aqius: ${response.data.current.pollution.aqius} AQI`;
      aqius.innerText = `Aqicn: ${response.data.current.pollution.aqicn} AQI`;
      tp.innerText = `temperature: ${response.data.current.weather.tp}°C`;
      hu.innerText = `Humidity: ${response.data.current.weather.hu}%`;
      ws.innerText = `Wind speed: ${response.data.current.weather.ws}m/s`;
    });
}

// const returnButtonEl = document.getElementById("#returnButton");
btnSubmit.addEventListener("click", areaText);
btnFind.addEventListener("click", buttonFindLocationHandler);
btnSubmit.addEventListener("click", areaText);
btnFind.addEventListener("click", buttonFindLocationHandler);
returnButtonEl.addEventListener("click", returnToSearch);

//  RETURN TO MAIN PAGE BUTTON
var returnButtonEl = document.getElementById("return-to-search-page-button");
returnButtonEl.addEventListener("click", returnToSearch);

function returnToSearch() {
  console.log("button works");
  searchPage.setAttribute("style", "display: flex");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
  // setAttribute("class-name", "new class")
}

btnSubmit.addEventListener("click", areaText);
btnFind.addEventListener("click", getMyCoords);

// function fetchAirData() {
//   var airQualityDataEl = document.getElementById("list");
//   var airQualityLi = document.createElement("li");

//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   fetch(
//     "http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=" +
//       apiKeyAq,
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((result) => (data = result))
//     .catch((error) => console.log("error", error));
//   airQualityDataEl.appendChild(airQualityLi);
//   airQualityLi.textContent = data.data.Country;
// }

var returnButtonEl = document.getElementById("return-to-search-page-button");
returnButtonEl.addEventListener("click", returnToSearch);

function returnToSearch() {
  console.log("button works");
}
// RETURN TO SEARCH BUTTON LISTENER AND FUNCTION

// const returnButtonEl = document.getElementById("return-to-search-page-button");
returnButtonEl.addEventListener("click", returnToSearch);

function returnToSearch() {
  searchPage.setAttribute("style", "display: flex");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
}

// NAV BAR EVEN LISTENERS AND FUNCTIONS

const navSearchEl = document.getElementById("location-search-nav");
navSearchEl.addEventListener("click", returnToSearch);

const navAirEl = document.getElementById("air-quality-nav");
navAirEl.addEventListener("click", airQualityPageFunc);
function airQualityPageFunc() {
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: flex");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
}

const navHistoryEl = document.getElementById("search-history-nav");
navHistoryEl.addEventListener("click", searchHistoryPageFunc);
function searchHistoryPageFunc() {
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: flex");
  aboutUsPage.setAttribute("style", "display: none");
}

const navAboutEl = document.getElementById("about-us-nav");
navAboutEl.addEventListener("click", aboutUsPageFunc);
function aboutUsPageFunc() {
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: flex");
}
