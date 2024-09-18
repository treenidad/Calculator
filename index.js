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

// Testing for capturing the keypresses
documet.addEventListener("keydown", (event) => {
    console.log(event);
  });

  // document.addEventListener("keydown", (event) => {
  //   if (event.key == "Equal" || "Enter") {
  //   }
  //   keyboardInput.value += event.key;
  // });

  // $(document).ready(function () {
  //   var string = "";

  //   /* Calculator input string */
  //   $(".value").click(function () {
  //     string += $(this).text();
  //     $("#calc").text(string);
  //   });

  //   /* Clear all */
  //   $(".C").click(function () {
  //     string = "";
  //     $("#calc, #result").text("0");
  //   });
  //   /* Clear last entry */
  //   $(".CE").click(function () {
  //     string = string.slice(0, string.length - 1);
  //     $("#calc").text(string);
  //   });

  //   /* Show result */
  //   $(".equals").click(function () {
  //     $("#result").text(eval(string));
  //   });
  // });

