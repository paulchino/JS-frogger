//Emeny Class
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = 0;
    this.speed = Math.floor(Math.random() * 100) + 100;

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    //Enemy is off the screen
    if (this.x > 600) {
        this.reset();
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Enemy.prototype.reset = function() {
    this.x = -50;
    this.y = 83 * Math.floor(Math.random()*3) + 60;
}



// Now write your own player class
var Player = function() {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 202;
    this.y = 332;
}





// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {
    //Player is in the water
    if (this.y < 83) {
        this.reset();
    }
}

Player.prototype.reset = function() {
    var xPos = [0,101,202,303,404];
    var randx = Math.floor(Math.random()*5);
    this.x = xPos[randx];
    this.y = 332;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput= function(keyCode) {
    if (keyCode == 'left') { 
        if (player.x >= 101) {
            player.x -= 101;
        }
    } 
    else if (keyCode == 'up') { 
        if (player.y >= 83) {
            player.y -= 83;
        } 
    }
    else if (keyCode == 'right') { 
        if (player.x <= 303) {
            player.x += 101;
        } 
    }
    else if (keyCode == 'down') { 
        if (player.y <= 332) {
            player.y += 83;
        } 
    }
}






//Gem Class
/*var Gem = function () {
    this.sprite = 'images/Gem-Blue.png';
    this.x = 202;
    this.y = 246.5;
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);


}
Gem.prototype.update = function() {
    window.setInterval(function() {
        this.x +=101
    }, 3000)
}

var blueGem = new Gem;
*/



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for (var i=0;i<3;i++) {
    e = new Enemy;
    e.x = Math.random() * 450;
    e.y = 83 * (Math.floor(Math.random() * 3)) + 60;
    allEnemies.push(e);
}


//var blueGem = new Gem;

// Place the player object in a variable called player
var player = new Player;


//Player Selection

var charArr = ["images/char-boy.png", "images/char-cat-girl.png", "images/char-horn-girl.png", "images/char-princess-girl.png"];

$('.char').on('mouseenter', function() {
    $(this).animate({'top': '-15px'});
})
$('.char').on('mouseleave', function() {
    $(this).animate({'top': '0px'});
})

var charSelect = function() {
    var charVal = +$(this).data('charnum');
    console.log(charVal);
    player.sprite = charArr[charVal];
}

$('.char').on('click', charSelect);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
