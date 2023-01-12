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

const successCallback = (position) => {
  console.log(position);
};

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
  const airApi = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=3e4ec6e7-66fd-4056-9d5b-874e8d797d7c`;
  fetch(airApi)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data.current.pollution);
    });
}

// const returnButtonEl = document.getElementById("#returnButton");
btnSubmit.addEventListener("click", areaText);
btnFind.addEventListener("click", buttonFindLocationHandler);
btnSubmit.addEventListener("click", areaText);
btnFind.addEventListener("click", buttonFindLocationHandler);
returnButtonEl.addEventListener("click", returnToSearch);
