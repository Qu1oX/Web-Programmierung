"use strict";

/**
 * Logic to display New Level and increase speed of the timer.
 */
function levelUp()
{
    initTimer();
    currentLevel++;
    drawLevel(context, currentLevel);
}

/**
 * Called when the player lost the game
 */
function gg()
{
    clearInterval(intervalHandler);
    let highscoreName = localStorage.getItem("highscoreName");
    if (!highscoreName || 0 === highscoreName.length)
    {
        instance.insertScore(new HighScoreEntry("Unkown Soldier", currentScore));
    }
    else if (highscoreName != null)
    {
        instance.insertScore(new HighScoreEntry(highscoreName, currentScore));
    }
    drawHighscore(context);
    toggleGameOver();
    gameOverAudio.play();
}
