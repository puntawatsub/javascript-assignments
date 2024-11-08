const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const student_name = prompt("Student name");

const random_class_number = randomInt(0, 4);

console.log(random_class_number);

let room;

switch (random_class_number) {
  case 0:
    room = classes[0];
    break;
  case 1:
    room = classes[1];
    break;
  case 2:
    room = classes[2];
    break;
  case 3:
    room = classes[3];
    break;
}

document.querySelector(
  "body"
).innerHTML += `<h2>${student_name}, you are ${room}.</h2>`;
