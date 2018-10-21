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
    var highscoreName = localStorage.getItem("highscoreName");
    var autoHighscore = localStorage.getItem("autoHighscore");
    if (autoHighscore == null) {
        autoHighscore = false;
    }
    if (!highscoreName || 0 === highscoreName.length && autoHighscore) {
        instance.insertScore(new HighScoreEntry("Unkown Soldier", currentScore));
    } else if (highscoreName != null && autoHighscore) {
        instance.insertScore(new HighScoreEntry(highscoreName, currentScore));
    }
    drawHighscore(context);
}
