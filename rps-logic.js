function computerPlays() {
    
    let computerChoice;
    let computerRandom = Math.random();

    if (computerRandom < 0.33) {
    computerChoice = `Rock`;
    }   
    else if (computerRandom < 0.66) {
    computerChoice = `Paper`;
    }   
    else {
    computerChoice = `Scissors`;
    }
    return computerChoice;
}

userPlays = window.prompt(`Choose Rock, Paper or Scissors`);
console.log(userPlays);
