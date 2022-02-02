function computerPlays() {
    
    let computerChoice;
    let computerRandom = Math.random();

    if (computerRandom < 0.33) {
    computerChoice = `ROCK`;
    }   
    else if (computerRandom < 0.66) {
    computerChoice = `PAPER`;
    }   
    else {
    computerChoice = `SCISSORS`;
    }
    return computerChoice;
}

let userPlays = window.prompt(`Choose Rock, Paper or Scissors`);
    userPlays = userPlays.toUpperCase();

console.log(userPlays);
