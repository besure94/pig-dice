1. Start the game when the user clicks "Play".
2. Allow one player to roll the dice.
3. It will return a number from 1 to 6.
4. If the player rolls a 1, they score nothing and it becomes the other players turn.
	* Each player will need a name.
	* Each player will need a score.
	* There needs to be a Game object to track each players turn.
5. If the player rolls a number other than 1, they can roll again.
6. If the player rolls a number other than 1, each number rolled will be added to a running total for their turn.
7. If the player rolls a 1, their gained score for their turn will be lost.
8. The player can also choose to "hold" and let the other player roll.
9. If the player "holds", their turn total is added to their total score.
10. If a player scores 100 first, that player wins the game.

Describe: rollDice()

Test: Allow one player to roll the dice.
Code: let rollDice = Math.floor(Math.random() * 6) +1;
Expected Output: Any number between 1 and 6.

Describe: Player()

Test: Each player will need a name and a score.
Code:
let player = new Player();
Expected Output: {playerName: "", score: 0};

Describe: addName()

Test: Add a name to the player object.
Code:
let player = new Player();
player.addName("Bob");
player.playerName;
Expected Output: "Bob";

Describe: Game()

Test: The game will need a current player turn.
Code:
let game = new Game();
game;
Expected Output: {currentPlayerTurn: ""};