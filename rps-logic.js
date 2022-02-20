function computerPlays() {                                          //Computer chooses Rock, Paper or Scissors
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

function gameRound(player, computer) {                              //Round of the game.
    
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

for (count = 1; count <= 5; count++) {

    const computer = computerPlays();

    const playerPlays = prompt("Choose either Rock, Paper or Scissors.");
    const player = playerPlays.toUpperCase();
        
    gameRound(player, computer);

    console.log(player);
    console.log(computer);
    console.log(gameRound(player,computer));
}