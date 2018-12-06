/**
 * Toggles the options menu
 */
function toggleGameOver() {
    if (isGameoverOn) {
        gameOverOff();
        audio.play();
    } else {
        gameOverOn();
        audio.pause();
    }
    isGameoverOn = !isGameoverOn;
}

/**
 * Turns the Game Over Screen off
 */
function gameOverOff() {
    document.getElementById("gameOverScreen").style.display = "none";
}

/**
 * Turns the Game Over Screen on
 */
function gameOverOn() {
    document.getElementById("gameOverScreen").style.display = "block";
}