// 1. Create method that changes player turn.
//		* Determine which player is currently playing and switch to the other player.
// 2. Create a method to evaluate a roll.
// 		* Take in current roll from player.
//		* If it is a 1, players have to change turns.
//		* If it is a 1, the player scores nothing for their turn.
//		* If the number is not a 1, that roll is added to the current turn score total.
// 		* If the number is not a 1, that player needs the option to roll again if they choose to do so.
// 		*
// 3. Store turn score as a property.
// 4. Create a method to reset current player turn score.

function Player() {
	this.playerName = "";
	this.playerScore = 0;
}

Player.prototype.addName = function(userName) {
	this.playerName = userName;
};

Player.prototype.addScore = function(roundTotalScore) {
	this.playerScore = this.playerScore + roundTotalScore;
	this.playerRoundScore = this.playerScore + game.rollDice();
};

function Game(playerOne, playerTwo) {
	this.currentPlayerTurn = 0;
	this.players = [playerOne, playerTwo];
	this.playerRoundScore = 0;
}

Game.prototype.rollDice = function() {
	return (Math.floor(Math.random() * 6) + 1);
}

Game.prototype.changePlayerTurn = function() {
	if (this.currentPlayerTurn === 0) {
		this.currentPlayerTurn = 1;
	} else {
		this.currentPlayerTurn = 0;
	}
}

Game.prototype.evaluateRoll = function() {
	let roll = this.rollDice();
	if (roll === 1) {
		this.playerRoundScore = 0;
		this.changePlayerTurn();
	} else if (roll !== 1) {
		this.playerRoundScore += roll;
	}
}

let playerOne = new Player();
let playerTwo = new Player();
playerOne.addName("Bob");
// playerOne.addScore(game.rollDice());
playerTwo.addName("Alex");
// playerTwo.addScore(game.rollDice());
let game = new Game(playerOne, playerTwo);
console.log(game);
game.evaluateRoll();
console.log(game);
game.evaluateRoll();
console.log(game);
// console.log(game.players[game.currentPlayerTurn]);
// playerOne.addScore(game.rollDice());
// playerTwo.addScore(game.rollDice());
// console.log(game.evaluateRoll(), game.currentPlayerTurn);
// console.log(game.evaluateRoll(), game.currentPlayerTurn);
// console.log(game.players[game.currentPlayerTurn]);

// Player.prototype.rollOne = function() {
// 	if (this.roll === 1) {
// 		this.turnScore = 0;
// 		return "You rolled a 1. Your turn is over!";
// 	} else {
// 		this.turnScore += this.roll;
// 	}
// }

// console.log();