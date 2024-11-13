var dog_array = [];
for (var i = 0; i < 6; i++) {
    dog_array = dog_array.concat([prompt("Enter dog name") || '']);
}
dog_array.sort();
dog_array.reverse();
document.querySelector('body').innerHTML += '<ul id="unordered"></ul>';
for (var _i = 0, dog_array_1 = dog_array; _i < dog_array_1.length; _i++) {
    var dog = dog_array_1[_i];
    document.querySelector('#unordered').innerHTML += "<li>".concat(dog, "</li>");
}
