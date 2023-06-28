function PigDice() {
	this.player1 = {};
	this.player2 = {};
}

function Player(turn) {
	this.roll = 0;
	this.currentScore = 0;
	this.totalScore = 0;
	this.turn = turn;
}