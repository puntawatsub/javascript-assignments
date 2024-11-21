"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

students.forEach((student) => {
  const newOption = document.createElement("option");
  newOption.innerHTML += student.name;
  newOption.value = student.id.toString();
  document.querySelector("#target").appendChild(newOption);
});
