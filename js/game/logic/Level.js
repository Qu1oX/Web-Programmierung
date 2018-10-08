/**
 * Logic to display New Level and increase speed of the timer.
 */
function levelUp() {
    initTimer();
    currentLevel++;
    //TODO Draw Level
}

/**
 * TODO: Javadoc
 */
function gg() {
    clearInterval(intervalHandler);
    instance.insertScore(new HighScoreEntry("Hans",currentScore));
}
