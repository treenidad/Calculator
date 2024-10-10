// CALCULATOR PROGRAM
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
}

// Calls the clearDisplay() function when the "Escape" key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Call your function here
    clearDisplay();
  }
});

// Calls the calculate() function when "Enter" key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Call your function here
    calculate();
  }
});

