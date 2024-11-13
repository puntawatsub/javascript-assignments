let dog_array: string[] = []

for (let i = 0; i < 6; i++) {
    dog_array = dog_array.concat([prompt("Enter dog name") || ''])
}

dog_array.sort()
dog_array.reverse()

document.querySelector('body')!.innerHTML += '<ul id="unordered"></ul>'

for (let dog of dog_array) {
    document.querySelector('#unordered')!.innerHTML += `<li>${dog}</li>`
}