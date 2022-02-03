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

    console.log(computerRandom);
    return computerChoice;
}

const computer = computerPlays();

const playerPlays = `rock`;
const player = playerPlays.toUpperCase();

console.log(computer);
console.log(player);