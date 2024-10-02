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
  } catch (error) {
    display.value = "ERROR";
  }
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

// Testing for capturing the keypresses
// document.addEventListener("keydown", (event) => {
//   console.log(event);
// });
