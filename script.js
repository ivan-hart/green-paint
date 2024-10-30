document.getElementById("submit").onclick = (e) => {
    e.preventDefault();
    alert("Green paint");
}

const riddles = [
    "What\’s green, but not the green, Paint, but not a paint scene? Smells just like green paint if green paint smelled, But doesn\’t smell like green paint—you\’re compelled. It\’s colored like green but not painted that way, And isn\’t even yellow (on a good day). What am I?",
    "Green paint sits in a tall blue hat, It whispers secrets to a sleek black cat. When the wind blows east and the rooster crows, The paint sings a song that nobody knows. It dreams of a fence, it dreams of a shoe, It mixes with rain, and it turns into glue. But ask it its name, and what does it say ? \"I\’m not paint at all—I’m yesterday’s hay!\" What am I ? ",
    "What’s green, looks like green, Isn’t blue and isn’t clean, Smells just like green paint but isn’t at all, Yet doesn’t smell like green paint—stand tall! What is it?",
    "Whats green, has green colors, not colored yellow, smells like green paint, not green paint, but also does not smell like green paint?",
    "Whats green, smells like green paint, but not green paint?",
    "Whats green, smells like green paint, but not yellow paint?"
]

function randomRiddle() {
    const riddle = document.getElementById("riddle");
    if (riddle == null)
        return;

    const rng = Math.floor(Math.random() * riddles.length);
    riddle.textContent = riddles[rng];
}