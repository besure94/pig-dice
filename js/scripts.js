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

function Dice() {
	this.diceRoll = Math.floor(Math.random() * 6) + 1;
}

let dice = new Dice();

console.log(dice);

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