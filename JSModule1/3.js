const int1 = parseInt(prompt("Integer 1"));
const int2 = parseInt(prompt("Integer 2"));
const int3 = parseInt(prompt("Integer 3"));

const sum_result = int1 + int2 + int3;
const product_result = int1 * int2 * int3;
const average = sum_result / 3;

document.querySelector("body").innerHTML = `
    <p>Sum: ${sum_result}</p>
    <p>Product: ${product_result}</p>
    <p>Average: ${average}</p>
`;
