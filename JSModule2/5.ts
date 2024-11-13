const compareNum = (a: number, b: number): number => {
    return a - b
}

let num_array: number[] = []

while (true) {
    const num_input: number = parseFloat(prompt("Enter a number") || '0')
    if (num_array.filter((num) => num == num_input).length > 0) {
        alert('Number has already been given.')
        break
    }
    num_array = num_array.concat([num_input])
}

num_array.sort(compareNum)

for (let num of num_array) {
    console.log(num)
}