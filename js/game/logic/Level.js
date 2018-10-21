/**
 * Logic to display New Level and increase speed of the timer.
 */
function levelUp() {
    initTimer();
    currentLevel++;
    drawLevel(context, currentLevel);
}

/**
 * Called when the player lost the game
 */
function gg() {
    clearInterval(intervalHandler);
    instance.insertScore(new HighScoreEntry("Hans",currentScore));
}
