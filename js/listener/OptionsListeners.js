"use strict";

/**
 * Inits the options
 */
function initOptions()
{

    let highscoreName = localStorage.getItem("highscoreName");
    if (highscoreName != null)
    {
        let highscoreNameElement = document.getElementById("highscoreName");
        highscoreNameElement.value = highscoreName;
    }

}

/**
 * Edits the Highscore name
 *
 * @param text
 */
function highscoreNameEdit(text)
{
    localStorage.setItem("highscoreName", text);
}