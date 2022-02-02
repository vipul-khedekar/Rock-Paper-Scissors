function computerPlays() {
    
    let computerChoice;
    let computerRandom = Math.random();

    if (computerRandom < 0.33) {
    computerChoice = `Computer plays Rock`;
    }   
    else if (computerRandom < 0.66) {
    computerChoice = `Computer plays Paper`;
    }   
    else {
    computerChoice = `Computer plays Scissors`;
    }
    return computerChoice;
}
console.log(computerPlays());
