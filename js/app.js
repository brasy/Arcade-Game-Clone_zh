//canvas.width = 505; canvas.height = 606;
var width = 101;
var height = 82;
var offset = 15;
var pauseGame = false;
var grade = 0;
var oldGrade = 0;
// Enemies our player must avoid
var Enemy = function(lines) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = lines * height - offset;
    this.speed = 100 + lines * 50;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x + this.speed * dt;

	//bug cannot go out of canvas
	if (this.x > (5 * width)) {
		this.x = 0;
	};
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 2 * width;
    this.y = 4 * height - offset;
    this.sprite = 'images/char-cat-girl.png';
};

//Player win the game, show the resutl
function showWin(){
	pauseGame = true;
	grade = grade + 100;
	oldGrade = grade;
	document.getElementById("winDiv").style.display = "block";
	document.getElementById("result").innerHTML = "congratulation, you win!";
	document.getElementById("grade").innerHTML = grade;
};

//player lose the game, show the result
function showGameOver(){
	pauseGame = true;
	oldGrade = grade;
	document.getElementById("winDiv").style.display = "block";
	document.getElementById("result").innerHTML = "game over!";
    document.getElementById("grade").innerHTML = oldGrade;
	grade = 0;
};

//continue the game
function closeDiv()
{
    document.getElementById("winDiv").style.display = "none";
	pauseGame = false;
};

// Update the player's position, required method for game
// make sure the player cannot go out of the canvas
Player.prototype.update = function(dt) {
    if (this.y < 0) {
        this.y = -offset;
	}
    else if (this.y > 5 * height) {
        this.y = 5 * height - offset;
	}
	
	if (this.x < 0 ){
        this.x = 0;
	}
    else if (this.x > 4 * width){
		this.x = 4 * width;
	}
	
    //win the games
    if (this.y <= -offset) {
        this.x = 2 * width;
        this.y = 4 * height - offset;
		showWin();
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// handle user's order and change player's position on the screen, required method for game
Player.prototype.handleInput = function(movDir) {
    switch(movDir) {
	    case "left":
		    this.x = this.x - width;
		    break;
		case "up":
            this.y = this.y - height;
			break;
        case "right":
            this.x = this.x + width;
            break;
        case "down":
            this.y = this.y + height;
	}
};

//implement collision detection, when collision, then game over 
Player.prototype.checkCollisions = function(){
	for (var i = 0; i < allEnemies.length; i++) {
        if (this.y == allEnemies[i].y && Math.abs(this.x - allEnemies[i].x) < 80) {
             this.x = 2 * width;
             this.y = 4 * height - offset;
			 showGameOver();
		}
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
allEnemies.push(new Enemy(1));
allEnemies.push(new Enemy(2));
allEnemies.push(new Enemy(3));

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    if (!pauseGame) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});
