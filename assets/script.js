// Variables for buttons
const btnSubmit = document.getElementById("submit-btn");
const btnFind = document.getElementById("find-btn");
const textBox = document.getElementById("text-box");
const historyEl = document.getElementById("history1");
const historyList = document.getElementById("historyList");

// Kayhan Objective Function
function objective() {
  // connect text-box to submit button and get my location
  // need a button for locating me automactically
  // gonna be using function expressions
}

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

btnSubmit.addEventListener("click", buttonSubmitHandler);

btnFind.addEventListener("click", buttonFindLocationHandler);

// SEARCH HISTORY FUNCTION (HISTORY PAGE)((LOCAL STORAGE))
function searchHistory() {
  historyList.innerHTML = textBox.value;
  const li = document.createElement("li");
  historyList.appendChild(li);
}
historyEl.addEventListener("click", searchHistory);
// function searchHistorySave(){
//     save each user search "location name" --> saves to localStorage
// }





function fetchAirData() {

    var airQualityDataEl= document.getElementById("list")
    var airQualityLi = document.createElement("li");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=" + apiKeyAq, requestOptions)
        .then(response => response.json())
        .then(result => data = result)
        .catch(error => console.log('error', error));
        airQualityDataEl.appendChild(airQualityLi);
        airQualityLi.textContent = data.data.Country
}

var returnButtonEl = document.getElementById("#returnButton")
returnButtonEl.addEventListener("click", returnToSearch)

function returnToSearch() {
    console.log("button works")
}


