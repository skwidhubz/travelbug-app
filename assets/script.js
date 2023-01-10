// Variables for buttons
const btnSubmit = document.getElementById("submit-btn");
const btnFind = document.getElementById("find-btn");
const textBox = document.getElementById("text-box");

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
var historyEl = document.getElementById("history1");
var historyList = document.getElementById("historyList");
var textBox = document.getElementById("text-box");

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
