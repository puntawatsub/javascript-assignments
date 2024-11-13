var number_of_participants = parseInt(prompt("Number of participation") || '0');
var participants = [];
for (var i = 0; i < number_of_participants; i++) {
    participants = participants.concat([prompt("Enter participant ".concat(i + 1, " name.")) || '']);
}
document.querySelector('body').innerHTML += "<ol id='ordered'></ol>";
participants.sort();
for (var _i = 0, participants_1 = participants; _i < participants_1.length; _i++) {
    var participant = participants_1[_i];
    document.querySelector('#ordered').innerHTML += "<li>".concat(participant, "</li>");
}
