"use strict";
const names = ["John", "Paul", "Jones"];

for (const person of names) {
  document.querySelector("#target").innerHTML += `<li>${person}</li>`;
}
