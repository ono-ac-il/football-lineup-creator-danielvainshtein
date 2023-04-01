const players = [
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' }
]
/*filter all the goalkeeper from players array */
//goalkeeper:
const goalkeeper = players.filter(function (player) {
    return player.position == "goalkeeper";
})

const mappedGoalkeepers = goalkeeper.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('pos1').innerHTML = mappedGoalkeepers.join('');

//defender:
const defender = players.filter(function (player) {
    return player.position == "defender";
})

const mappeddefender = defender.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('def1').innerHTML = mappeddefender.join('');
document.getElementById('def2').innerHTML = mappeddefender.join('');
document.getElementById('def3').innerHTML = mappeddefender.join('');
document.getElementById('def4').innerHTML = mappeddefender.join('');
document.getElementById('def5').innerHTML = mappeddefender.join('');

//midfielder:
const midfielder = players.filter(function (player) {
    return player.position == "midfielder";
})

const mappeddmidfielder = midfielder.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('mid1').innerHTML = mappeddmidfielder.join('');
document.getElementById('mid2').innerHTML = mappeddmidfielder.join('');
document.getElementById('mid3').innerHTML = mappeddmidfielder.join('');
document.getElementById('mid4').innerHTML = mappeddmidfielder.join('');
document.getElementById('mid5').innerHTML = mappeddmidfielder.join('');

//forward:
const forward = players.filter(function (player) {
    return player.position == "forward";
})

const mappeddforward = forward.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('st1').innerHTML = mappeddforward.join('');
document.getElementById('st2').innerHTML = mappeddforward.join('');
document.getElementById('st3').innerHTML = mappeddforward.join('');


const btn = document.getElementById('sum');
function lineUpConsole() {
    console.log(" " + document.getElementById("pos1").value) +
    console.log(" " + document.getElementById("def1").value + " " + document.getElementById("def2").value + " " + document.getElementById("def3").value + " " + document.getElementById("def4").value + " " + document.getElementById("def5").value)
    console.log(" " + document.getElementById("mid1").value + " " + document.getElementById("mid2").value + " " + document.getElementById("mid3").value + " " + document.getElementById("mid4").value + " " + document.getElementById("mid5").value)
    console.log(" " + document.getElementById("st1").value + " " + document.getElementById("st2").value + " " + document.getElementById("st3").value)
}
btn.addEventListener('click', lineUpConsole);