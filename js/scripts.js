function Player() {
	this.playerOneName = "";
	this.playerTwoName = "";
	this.playerOneScore = 0;
	this.playerTwoScore = 0;
}

Player.prototype.addName = function(userNameOne, userNameTwo) {
	this.playerOneName = userNameOne;
	this.playerTwoName = userNameTwo;
}

Player.prototype.addScore = function() {
	this.playerOneScore = Math.floor(Math.random() * 6) +1;
	this.playerTwoScore = Math.floor(Math.random() * 6) +1;
}

let player = new Player();

player.addName("Bob", "Alex");
player.addScore();
console.log(player);

function Game() {
	this.currentPlayerTurn = "";
}

let game = new Game();

console.log(game);

// function Dice() {
// 	this.diceRoll = Math.floor(Math.random() * 6) + 1;
// }

// let dice = new Dice();

// console.log(dice);

// let player = new Player();

// Player.prototype.rollOne = function() {
// 	if (this.roll === 1) {
// 		this.turnScore = 0;
// 		return "You rolled a 1. Your turn is over!";
// 	} else {
// 		this.turnScore += this.roll;
// 	}
// }

// console.log();