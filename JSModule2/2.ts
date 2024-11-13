const number_of_participants: number = parseInt(prompt("Number of participation") || '0')

let participants: string[] = []

for (let i = 0; i < number_of_participants; i++) {
    participants = participants.concat([prompt(`Enter participant ${i + 1} name.`) || ''])
}

document.querySelector('body')!.innerHTML += `<ol id='ordered'></ol>`
participants.sort();
for (const participant of participants) {
    document.querySelector('#ordered')!.innerHTML += `<li>${participant}</li>`
}