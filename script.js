document.getElementById("submit").onclick = (e) => {
    alert("Green paint");
}

const riddles = [
    "a",
    "b",
    "c",
    "d",
    "e"
]

function randomRiddle() {
    const riddle = document.getElementById("riddle");
    if(riddle == null)
        return;

    const rng = Math.floor(Math.random() * riddles.length);
    riddle.textContent = riddles[rng];
}