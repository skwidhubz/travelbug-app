// Variables for buttons
const btnSubmit = document.getElementById("submit-btn");
const btnFind = document.getElementById("find-btn");
const textBox = document.querySelector(".input");
const historyEl = document.getElementById("history1");
const historyList = document.getElementById("historyList");
const myErrorBox = document.querySelector(".control");

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
  // const city = "paris";
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

// historyEl.addEventListener("click", searchHistory);

// function searchHistorySave(){
//     save each user search "location name" --> saves to localStorage
// }
const successCallback = (position) => {
  console.log(position);
};

function getC() {
  navigator.geolocation.getCurrentPosition(successCallback);
}

function streetAdd(address) {
  const myAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBrNLhoIcFa9qPY_bPWF-qVPVF9qRS3dc8`;
  fetch(myAPI)
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        console.log(response.results[0].formatted_address);
      }
    });
}

btnSubmit.addEventListener("click", areaText);
btnFind.addEventListener("click", buttonFindLocationHandler);
