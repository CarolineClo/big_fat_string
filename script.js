"use strict";

window.addEventListener("load", startComputer);

let result;

function startComputer() {
  document.querySelector("#outButton").addEventListener("click", output);
}

function output() {
  let input = document.getElementById("inputText").value;
  let options = document.getElementById("options").value;
  if (options == 1) {
    let result = input[0].toUpperCase() + input.substring(1).toLowerCase();
    console.log(result);
    document.getElementById("outputText").value = result;
  }
  if (options == 2) {
    let result = input.split(" ")[0];
    console.log(result);
    document.getElementById("outputText").value = result;
  }
}
