var user_confirm = confirm("Should I calculate the square root?");
if (user_confirm) {
    var num = parseFloat(prompt("Number") || "0");
    if (num >= 0) {
        var square = Math.sqrt(num);
        document.querySelector('body').innerHTML += "\n            <h2>The square root of ".concat(num, " is ").concat(square, ".</h2>\n        ");
    }
    else {
        document.querySelector('body').innerHTML += "\n            <h2>The square root of a negative number is not defined.</h2>\n        ";
    }
}
else {
    document.querySelector('body').innerHTML += "\n        <h2>The square root is not calculated.</h2>\n    ";
}
