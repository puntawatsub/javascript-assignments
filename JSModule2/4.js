var compareNum = function (a, b) {
    return a - b;
};
var num_list = [];
while (true) {
    var user_prompt = void 0;
    while (true) {
        user_prompt = prompt("Enter number") || '';
        if (!isNaN(parseFloat(user_prompt))) {
            break;
        }
    }
    var user_prompt_num = parseFloat(user_prompt);
    if (user_prompt_num == 0) {
        break;
    }
    num_list = num_list.concat([user_prompt_num]);
}
num_list.sort(compareNum);
num_list.reverse();
for (var _i = 0, num_list_1 = num_list; _i < num_list_1.length; _i++) {
    var num = num_list_1[_i];
    console.log(num);
}
