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

