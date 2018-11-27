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
    let autoHighscore = localStorage.getItem("autoHighscore");
    if (autoHighscore != null && autoHighscore === "true")
    {
        let autoHighscoreElement = document.getElementById("autoHighscore");
        autoHighscoreElement.click();
    }
    let ezMode = localStorage.getItem("ezMode");
    if (ezMode != null && autoHighscore === "true")
    {
        let ezModeElement = document.getElementById("ezMode");
        ezModeElement.click();
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

/**
 * Edits the auto Highscore
 *
 * @param checked
 */
function autoHighscoreEdit(checked)
{
    localStorage.setItem("autoHighscore", checked);
}

/**
 * Edits the Easy mode
 *
 * @param checked
 */
function ezModeEdit(checked)
{
    localStorage.setItem("ezMode", checked);
}