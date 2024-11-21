const firstItem = document.createElement("li");
const secondItem = document.createElement("li");
const thirdItem = document.createElement("li");

firstItem.innerHTML += "First item";
secondItem.innerHTML += "Second item";
thirdItem.innerHTML += "Third item";

document.querySelector("#target").appendChild(firstItem);
document.querySelector("#target").appendChild(secondItem);
document.querySelector("#target").appendChild(thirdItem);
