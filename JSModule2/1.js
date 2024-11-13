var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers = numbers.concat([parseFloat(prompt("Enter a number") || "0")]);
}
for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
