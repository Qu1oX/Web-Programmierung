/**
 * Initialize the game
 * Only used once.
 *
 * @see drawGrid()
 * @see fillGrid()
 */
function initGame() {
    initTimer();
    initAudio();
    drawGrid(context, width, height, step, gridStart, 0);
    fillGrid(gridArray);
    drawBox(context, boxX, boxY);
    drawText(context, boxTextX, boxTextY, "Next figure");
    drawScore(context, currentScore);
    drawLevel(context, currentLevel);
    generateRandomFigure();
    insertRandomFigure();
}

/**
 * Initialize the timer
 */
function initTimer() {
    if (startTimer - rowsCleared < minTimer) {
        startTimer = minTimer;
    } else {
        startTimer -= rowsCleared;
    }
    clearInterval(intervalHandler);
    intervalHandler = window.setInterval(function () {
        moveObjectDown(false);
    }, startTimer);
}

/**
 * Configures the Audio uses LocalStorage to determine if music should start Muted or not.
 * Using a ClickListener to toggle states.
 */
function initAudio() {
    let mute = document.getElementById("mute");
    mute.addEventListener("click", function () {
        if (audio.volume === 0) {
            mute.src = "muteIcon.svg";
            audio.volume = 0.2;
            localStorage.setItem("volume", "0.2");
        } else if (audio.volume !== 0) {
            mute.src = "mutedIcon.svg";
            audio.volume = 0;
            localStorage.setItem("volume", "0");
        }
    });
    let volume = localStorage.getItem("volume");
    if (volume == null) {
        mute.src = "muteIcon.svg";
        audio.volume = 0.2;
        localStorage.setItem("volume", "0.2");
    } else if (volume === "0") {
        mute.src = "mutedIcon.svg";
        audio.volume = 0;
        localStorage.setItem("volume", "0");
    } else if (volume !== "0") {
        mute.src = "muteIcon.svg";
        audio.volume = 0.2;
        localStorage.setItem("volume", "0.2");
    }
}

/**
 * Fills the given 2 Dimensional Array with {@code false}
 *
 * @param gridArray Array to fill
 */
function fillGrid(gridArray) {
    for (var i = 0; i < gridWidth; i++) {
        gridArray[i] = new Array(10);

        for (var j = 0; j < gridHeight; j++) {
            gridArray[i][j] = false;
        }
    }

    if (isDebug) {
        console.log(gridArray);
    }
}

initGame();
drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);