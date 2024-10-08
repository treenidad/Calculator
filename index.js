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

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Call your function here
    clearDisplay();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    // Call your function here
    calculate();
  }
});

