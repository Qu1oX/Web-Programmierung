/**
 * Inits the options
 */
function initOptions() {

    var highscoreName = localStorage.getItem("highscoreName");
    if (highscoreName != null) {
        var highscoreNameElement = document.getElementById("highscoreName");
        highscoreNameElement.value = highscoreName;
    }
    var autoHighscore = localStorage.getItem("autoHighscore");
    if (autoHighscore != null && autoHighscore === "true") {
        var autoHighscoreElement = document.getElementById("autoHighscore");
        autoHighscoreElement.click();
    }
    var ezMode = localStorage.getItem("ezMode");
    if (ezMode != null && autoHighscore === "true") {
        var ezModeElement = document.getElementById("ezMode");
        ezModeElement.click();
    }
}

/**
 * Edits the Highscore name
 *
 * @param text
 */
function highscoreNameEdit(text) {
    localStorage.setItem("highscoreName", text);
}

/**
 * Edits the auto Highscore
 *
 * @param checked
 */
function autoHighscoreEdit(checked) {
    localStorage.setItem("autoHighscore", checked);
}

/**
 * Edits the Easy mode
 *
 * @param checked
 */
function ezModeEdit(checked) {
    localStorage.setItem("ezMode", checked);
}