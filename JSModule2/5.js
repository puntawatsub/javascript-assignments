var compareNum = function (a, b) {
    return a - b;
};
var num_array = [];
var _loop_1 = function () {
    var num_input = parseFloat(prompt("Enter a number") || '0');
    if (num_array.filter(function (num) { return num == num_input; }).length > 0) {
        alert('Number has already been given.');
        return "break";
    }
    num_array = num_array.concat([num_input]);
};
while (true) {
    var state_1 = _loop_1();
    if (state_1 === "break")
        break;
}
num_array.sort(compareNum);
for (var _i = 0, num_array_1 = num_array; _i < num_array_1.length; _i++) {
    var num = num_array_1[_i];
    console.log(num);
}
