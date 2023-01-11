var historyEl = document.getElementById("history1")
var historyList = document.getElementById("historyList")
var textBox = document.getElementById("text-box")
var submitButton = document.getElementById("submit-btn")

// SEARCH HISTORY FUNCTION (HISTORY PAGE)((LOCAL STORAGE))
function searchHistory(event) {
    historyList.innerHTML = textBox.value
    const li = document.createElement("li")
    historyList.appendChild(li)
    localStorage.setItem('value', textBox.value)
    event.preventDefault()
    // historyList.innerHTML = localStorage.getItem('value')
}
submitButton.addEventListener("click", searchHistory)
// function searchHistorySave(){
//     save each user search "location name" --> saves to localStorage
// }

