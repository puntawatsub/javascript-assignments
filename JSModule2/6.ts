const rollDice = (): number => {
    return Math.floor(Math.random() * 6) + 1;
}

let rolls: number[] = []

while (true) {
    const roll = rollDice()
    rolls = rolls.concat([roll])
    if (roll == 6) {
        break
    }
}

document.querySelector('body')!.innerHTML += '<ul id="rolls"></ul>'

for (const roll of rolls) {
    document.querySelector('#rolls')!.innerHTML += `<li>${roll}</li>`
}