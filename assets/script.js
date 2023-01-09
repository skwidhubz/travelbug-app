// Variables for buttons
const btnSubmit = document.getElementById("btn-control");
const btnLocate = document.getElementById("btn-locate");
let text = document.getElementById("text-box");

// Kayhan Objective Function
function objective() {
  // connect text-box to submit button and get my location
  // need a button for locating me automactically
  // gonna be using function expressions
}

const buttonSubmitHandler = function (e) {
  // Not completed not working
  e.preventDefault();
  text.innerHTML = "";
  let language = textBox.value;
  console.log(language);
  return console.log("hi");
};

buttonSubmitHandler();

btnSubmit.addEventListener("click", buttonSubmitHandler);
