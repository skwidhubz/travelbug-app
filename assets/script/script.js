// Variables for buttons
const airContainer = document.querySelector(".air-q");
const btnSubmit = document.getElementById("submit-btn");
const btnFind = document.getElementById("find-btn");
// const textBox = document.querySelector(".input"); // query select textbox input
const textBox = document.getElementById("text-box-input");
const historyEl = document.getElementById("history1");
const historyList = document.getElementById("history-ul-list");
const searchPage = document.getElementById("searchpage");
const airQualityPage = document.getElementById("airquality");
const searchHistoryPage = document.getElementById("historypage");
const aboutUsPage = document.getElementById("aboutuspage");
const myErrorBox = document.querySelector(".control");
const addressStatus = document.getElementById("location-name-aq");
const navSearchEl = document.getElementById("location-search-nav");
const navAirEl = document.getElementById("air-quality-nav");
const navHistoryEl = document.getElementById("search-history-nav");
const navAboutEl = document.getElementById("about-us-nav");
const returnButtonEl = document.getElementById("return-to-search-page-button");
const returnButton1El = document.getElementById("return-to-search-page-button-1");
const returnButton2El = document.getElementById("return-to-search-page-button-2");
const locateText = document.getElementById("locate-text");


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

var storageArray = []; //empty array to store search query

function searchHistory(event) {
  
  // e.preventDefault();
  // var storageArray = localStorage.getItem('value')
  storageArray.push(textBox.value);

  localStorage.setItem("value", JSON.stringify(storageArray));

  // var storageNameEl = localStorage.getItem('value')

  const liEl = document.createElement("li");
  liEl.textContent = textBox.value;
  historyList.appendChild(liEl);

  event.preventDefault(event);
  // historyList.textContent = localStorage.getItem('value')
}

function clearLocalStorage() {
  localStorage.clear();
  while (historyList.hasChildNodes()) {
    historyList.removeChild(historyList.firstChild);
  }
}

var clearHistoryBtn = document.getElementById("clear-history-list");
clearHistoryBtn.addEventListener("click", clearLocalStorage);

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
    .then((response) => {
      locateText.innerHTML = response.plus_code.compound_code;
    });
};

// textBox.placeholder = "Type name here..";

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    console.log("hi");
  }
}
function showPosition(position) {
  // airContainer.innerHTML =
  //   "Latitude: " +
  //   position.coords.latitude +
  //   "<br>Longitude: " +
  //   position.coords.longitude;
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);
  locateMe(lat, lng);
}

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
      airContainer.appendChild(addressBar);
      addressBar.innerText = ` ${response.results[0].formatted_address}`;
    });
}

function fetchAirData(lat, lon) {
  const airApi = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=3e4ec6e7-66fd-4056-9d5b-874e8d797d7c`;
  fetch(airApi)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(response.data.current.pollution);
      const icon = document.createElement("img");
      // const myimge = response.data.current.weather.ic;
      const aqius = document.createElement("h1");
      const ts = document.createElement("h1");
      const aqicn = document.createElement("h1");
      const tp = document.createElement("h1");
      const hu = document.createElement("h1");
      const ws = document.createElement("h1");
      // icon.setAttribute("src", `./${myimge.png}`);
      icon.setAttribute(
        "src",
        `https://www.airvisual.com/images/${response.data.current.weather.ic}.png`
      );
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
btnSubmit.addEventListener("click", searchHistory);
btnSubmit.addEventListener("click", airQualityPageFunc);
btnFind.addEventListener("click", buttonFindLocationHandler);

//  RETURN TO MAIN PAGE BUTTON
// const returnButtonEl = document.getElementById("return-to-search-page-button");
returnButtonEl.addEventListener("click", returnToSearch);

function returnToSearch() {
  console.log("button works");
  searchPage.setAttribute("style", "display: flex");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
  $(".air-q").children().empty();
  // clearAirData();
  // setAttribute("class-name", "new class")
    // var airList = document.querySelector(".air-q");
  // airList.textContent = "null";
}


//clear AQ-API data on refresh main page ***
// function clearAirData()
// {
//   $(".air-q").children().empty();
  // if(airContainer)
  // document.getElementById("ul-airqual").innerHTML="";
// }

// btnSubmit.addEventListener("click", areaText);
// btnFind.addEventListener("click", showPosition);

// RETURN TO SEARCH BUTTON LISTENER AND FUNCTION

// const returnButtonEl = document.getElementById("return-to-search-page-button");
returnButtonEl.addEventListener("click", returnToSearch);

// function returnToSearch() {
//   searchPage.setAttribute("style", "display: flex");
//   airQualityPage.setAttribute("style", "display: none");
//   searchHistoryPage.setAttribute("style", "display: none");
//   aboutUsPage.setAttribute("style", "display: none");
// }

// NAV BAR EVEN LISTENERS AND FUNCTIONS


navSearchEl.addEventListener("click", returnToSearch);


navAirEl.addEventListener("click", airQualityPageFunc);
function airQualityPageFunc() {
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: flex");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
}


navHistoryEl.addEventListener("click", searchHistoryPageFunc);
function searchHistoryPageFunc() {
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: flex");
  aboutUsPage.setAttribute("style", "display: none");
}


navAboutEl.addEventListener("click", aboutUsPageFunc);
function aboutUsPageFunc() {
  searchPage.setAttribute("style", "display: none");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: flex");
}

//  RETURN TO MAIN PAGE BUTTON

returnButtonEl.addEventListener("click", returnToSearch);
returnButton1El.addEventListener("click", returnToSearch);
returnButton2El.addEventListener("click", returnToSearch);

function returnToSearch(event) {
  event.preventDefault();
  searchPage.setAttribute("style", "display: flex");
  airQualityPage.setAttribute("style", "display: none");
  searchHistoryPage.setAttribute("style", "display: none");
  aboutUsPage.setAttribute("style", "display: none");
}

