/**
 * Logic to display New Level and increase speed of the timer.
 */
function levelUp() {
    initTimer();
    currentLevel++;
    drawLevel(context, currentLevel);
}

/**
 * TODO: Javadoc
 */
function gg() {
    clearInterval(intervalHandler);
    instance.insertScore(new HighScoreEntry("Hans",currentScore));
    instance.insertScore(new HighScoreEntry("Peter",1111));
    instance.insertScore(new HighScoreEntry("Mike",33333));
}
