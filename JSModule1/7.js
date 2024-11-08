var dice_count = parseInt(prompt("How many die/dice?") || "0");
var randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var dice_sum = 0;
for (var i = 0; i < dice_count; i++) {
    dice_sum += randomInt(1, 7);
}
document.querySelector('body').innerHTML += "\n    <h2>Sum of dice: ".concat(dice_sum, "</h2>\n");
