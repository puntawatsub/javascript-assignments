var rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
};
var rolls = [];
while (true) {
    var roll = rollDice();
    rolls = rolls.concat([roll]);
    if (roll == 6) {
        break;
    }
}
document.querySelector('body').innerHTML += '<ul id="rolls"></ul>';
for (var _i = 0, rolls_1 = rolls; _i < rolls_1.length; _i++) {
    var roll = rolls_1[_i];
    document.querySelector('#rolls').innerHTML += "<li>".concat(roll, "</li>");
}
