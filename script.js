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
  if (options == 3) {
    let result = input.split(" ")[0].length;
    console.log(result);
    document.getElementById("outputText").value = result;
  }
  if (options == 4) {
    let start = input.indexOf(` `) + 1;
    let end = input.lastIndexOf(` `) - 1;
    let result = `${start} ${end} ${input.split(" ")[1]}`;
    document.getElementById("outputText").value = result;
  } else if (options == 5) {
    if (input.endsWith(`.jpg`)) {
      result = "It's a .jpg";
      document.getElementById("outputText").value = result;
      console.log(result);
    }
    if (input.endsWith(`.png`)) {
      result = "It's a .png";
      document.getElementById("outputText").value = result;
      console.log(result);
    }
  }

  // if (options ==7){
  //   let result = input.substring(0,1).toUpperCase();
  //   for (let i= 1; i <input.length;i++){previousChar= input[i -1]};

  // }
}
