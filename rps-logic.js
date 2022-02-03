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

let result;

function gameRound(player, computer) {
    if ((player === `ROCK` && computer === `SCISSORS`) ||
       (player === `PAPER` && computer === `ROCK`) ||
       (player === `SCISSORS` && computer === `PAPER`)) {
        result = `Player Wins. ${player} beats ${computer}.`;
    }
    else if (player === computer) {
        result = `It's a draw. Both used ${player}.`;
    }
    else {
        result = `Computer Wins. ${computer} beats ${player}.`;
    }
    return result;
}

console.log(computer);
console.log(player);
console.log(gameRound(player,computer));