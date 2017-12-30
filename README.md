frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
===============================

## play the game
* use the **"up","down","left","right"** key in your keyboard to control the player
* when win the game, it will show the result and grades, then can click **start game** to continue
* when lose the game, restart the game.

##completed the game description
* create Player class based on the Enemy class
* complete the prototype methods of Enemy class, including `update(dt)` and `rander()`
* complete the prototype methods of Player class, including `update()`, `rander()` and `handleInput()`
* create instance of Player, and fill the positon
* create many Enemy instances, and fill the line positon
* complete the prototype method of Player class: `checkCollisions()`
* optimise the games and render, the game result: `showWin()`,`showGameOver()`,`closeDiv()`
* complete the “README.md”
