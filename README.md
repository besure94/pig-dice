1. Start the game when the user clicks "Play".
2. Allow one player to roll the dice.
3. It will return a number from 1 to 6.
4. If the player rolls a 1, they score nothing and it becomes the other players turn.
	* Each player will need a name.
	* Each player will need a score.
	* There needs to be a Game object to track each players turn.
5. If the player rolls a number other than 1, they can roll again and each number rolled will be added to a running total for their turn.
	* There needs to be a dice object.
	* Each player needs to be able to roll the dice.
	* Each player needs the ability to roll more than once.
	* Each player needs a score that can be added to for their turn.
6. If the player rolls a 1, their gained score for their turn will be lost.
7. The player can also choose to "hold" and let the other player roll.
8. If the player "holds", their turn total is added to their total score.
9. If a player scores 100 first, that player wins the game.

Describe: Player()

Test: Each player will need a name and a score.
Code:
let player = new Player();
player;
Expected Output: {playerName: "", score: 0};

<!-- Test: Each player will need to be able to roll the dice.
Code:
let player = new Player();
player.playerRoll;
Expected Output: -->

Describe: addName()

Test: Add a name to the player object.
Code:
let player = new Player();
player.addName("Bob");
player.playerName;
Expected Output: "Bob";

Describe: addScore()

Test: Add the number the player rolls to their score.
Code:
let player = new Player();
player.addScore(5);
player.playerScore;
Expected Output: 5;

Describe: Game()

Test: The game will need a current player turn.
Code:
let game = new Game();
game;
Expected Output: {currentPlayerTurn: ""};

Describe: Dice()

Test: The game will need a Dice object.
Code: let dice = new Dice();
dice;
Expected Output: {diceRoll: Math.floor(Math.random() * 6) + 1};