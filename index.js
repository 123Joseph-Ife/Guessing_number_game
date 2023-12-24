"use strict";

const toggle = document.getElementById("label");
const body = document.querySelector(".body");
const output = document.getElementById("output");
const input = document.getElementById("input");
const button = document.getElementById("button");

function changeBackground() {
  body.classList.toggle("checked");
  label.classList.toggle("checked");
  output.classList.toggle("checked");
  input.classList.toggle("checked");
  button.classList.toggle("checked");
}

toggle.addEventListener("click", changeBackground);
button.addEventistener("click", guessNumber);

function guessNumber() {
  let random = Math.floor(Math.random() * 6) + 1;

  if (Number(input.value) === random) {
    output.innerHTML = "<i>Correct, You win</i>";
  } else {
    output.innerHTML = `<i>You guessed ${input.value}, but the correct number is ${random}</i>`;
  }
}
