// script.js
const resultBox = document.getElementById("resultBox");
let expression = "";

// get all buttons
const buttons = document.querySelectorAll(".btn");

// use a for loop to go through each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const value = buttons[i].innerText; // text inside the button

    if (value === "C") {
      // clear everything
      expression = "";
      resultBox.innerText = "";
    } else if (value === "Del.") {
      // delete last character
      expression = expression.slice(0, -1);
      resultBox.innerText = expression;
    } else if (value === "=") {
      // calculate result
      try {
        const result = eval(expression); // eval does the math
        resultBox.innerText = result;
        expression = result.toString();
      } catch {
        resultBox.innerText = "Error";
        expression = "";
      }
    } else {
      // add button value to expression
      expression += value;
      resultBox.innerText = expression;
    }
  });
}
