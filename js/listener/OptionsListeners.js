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

function highscoreNameEdit(text) {
    localStorage.setItem("highscoreName", text);
}

function autoHighscoreEdit(checked) {
    localStorage.setItem("autoHighscore", checked);
}

function ezModeEdit(checked) {
    localStorage.setItem("ezMode", checked);
}