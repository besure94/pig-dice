// function Dice() {
// 	this.dice = 1;
// 	this.diceValue = 0;
// }

let rollDice = Math.floor(Math.random() * 6) +1;

console.log("You rolled a", rollDice);

function Player() {
	this.playerName = "";
	this.score = 0;
}

Player.prototype.addName = function(userName) {
	this.playerName = userName;
}

let player = new Player();

player.addName("Bob");
console.log(player);

function Game() {
	this.currentPlayerTurn = "";
}

let game = new Game();

console.log(game);

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