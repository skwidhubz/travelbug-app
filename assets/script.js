var historyEl = document.getElementById("history1")
var historyList = document.getElementById("historyList")
var textBox = document.getElementById("text-box")

// SEARCH HISTORY FUNCTION (HISTORY PAGE)((LOCAL STORAGE))
function searchHistory() {
    historyList.innerHTML = textBox.value
    const li = document.createElement("li")
    historyList.appendChild(li)
}
historyEl.addEventListener("click", searchHistory)
// function searchHistorySave(){
//     save each user search "location name" --> saves to localStorage
// }

GeolocationCoordinates


function fetchAirData() {

    var airQualityDataEl= document.getElementById("list")
    var airQualityLi = document.createElement("li");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=3e4ec6e7-66fd-4056-9d5b-874e8d797d7c", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        airQualityDataEl.appendChild(airQualityLi);
}

var returnButtonEl = document.getElementById("#returnButton")
returnButtonEl.addEventListener("click", returnToSearch)

function returnToSearch() {
    console.log("button works")
}



// edit edit 