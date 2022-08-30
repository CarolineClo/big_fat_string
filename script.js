"use strict";

window.addEventListener("load", startComputer);

let result;

function startComputer() {
  document.querySelector("#outButton").addEventListener("click", output);
}

function output() {
  let input = document.getElementById("inputText").value;
  let outputs = document.getElementById("outputs").value;
  if (outputs == 1) {
    let result = input[0].toUpperCase() + input.substring(1).toLowerCase();
    console.log(result);
  }
}
