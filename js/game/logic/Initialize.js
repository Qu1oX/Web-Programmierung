/**
 * Initialize the game
 * Only used once.
 *
 * @see drawGrid()
 * @see fillGrid()
 */
function initGame()
{
    //loadSettings();
    let autoHighscore = localStorage.getItem("autoHighscore");

    if (autoHighscore == null)
    {
        localStorage.setItem("autoHighscore", true);
    }

    initTimer();
    initAudio();
    drawGrid(context, width, height, step, gridStart, 0);
    fillGrid(gridArray);
    drawBox(context, boxX, boxY);
    drawText(context, boxTextX, boxTextY, "Next figure");
    drawScore(context, currentScore);
    drawLevel(context, currentLevel);
    drawHighscore(context);
    generateRandomFigure();
    insertRandomFigure();
    menuOff();
}

/*
const request = new XMLHttpRequest();

function loadSettings() {
    request.responseType = "json";
    request.open('GET', "./js/config.json");
    request.onerror = function () {
        var daten = request.response;
        // "Daten" (Objekte) werden umgewandelt
        clearRectOffsetX = 10;
        clearRectHeightOffset = 25;
        clearRectOffsetY = 25;
        colors = 7;
        canvasWidth = 340;
        height = 480;
        width = 240;
        gridHeight = 10;
        gridWidth = 20;
        step = 24;
        isDebug = true;
        levelTextOffsetY = 60;
        minTimer = 50;
        boxLength = 125;
        boxOffsetX = 42;
        boxOffsetY = 70;
        boxTextOffsetX = 63;
        boxTextOffsetY = 10;
        scoreTextOffsetY = 32;
    };
    request.onload = function () {
        if (request.readyState == request.DONE) {
            var daten = request.response;
            // "Daten" (Objekte) werden umgewandelt
            clearRectOffsetX = daten.clearRect.clearRectOffsetX;
            clearRectHeightOffset = daten.clearRect.clearRectHeightOffset;
            clearRectOffsetY = daten.clearRect.clearRectOffsetY;
            colors = daten.colors;
            Color.DARKBLUE.colorCode = daten.figures.J;
            Color.LIGHTBLUE.colorCode = daten.figures.I;
            Color.ORANGE.colorCode = daten.figures.L;
            Color.YELLOW.colorCode = daten.figures.O;
            Color.GREEN.colorCode = daten.figures.S;
            Color.PINK.colorCode = daten.figures.T;
            Color.RED.colorCode = daten.figures.Z;
            canvasWidth = daten.grid.canvasWidth;
            height = daten.grid.height;
            width = daten.grid.width;
            gridHeight = daten.gridB.gridHeight;
            gridWidth = daten.gridB.gridWidth;
            step = daten.gridB.step;
            isDebug = daten.isDebug;
            levelTextOffsetY = daten.levelTextOffsetY;
            minTimer = daten.minTimer;
            boxLength = daten.nextFigureBox.boxLength;
            boxOffsetX = daten.nextFigureBox.boxOffsetX;
            boxOffsetY = daten.nextFigureBox.boxOffsetY;
            boxTextOffsetX = daten.nextFigureBox.boxTextOffsetX;
            boxTextOffsetY = daten.nextFigureBox.boxTextOffsetY;
            scoreTextOffsetY = daten.scoreTextOffsetY;
        }
    };
    request.send(null);
}
*/

/**
 * Initialize the timer
 */
function initTimer()
{
    if (startTimer - rowsCleared < minTimer)
    {
        startTimer = minTimer;
    }
    else
    {
        startTimer -= rowsCleared;
    }
    clearInterval(intervalHandler);
    intervalHandler = window.setInterval(function ()
    {
        moveObjectDown(false);
    }, startTimer);
}

/**
 * Configures the Audio uses LocalStorage to determine if music should start Muted or not.
 * Using a ClickListener to toggle states.
 */
function initAudio()
{
    let mute = document.getElementById("mute");
    mute.addEventListener("click", function ()
    {
        if (audio.volume === 0)
        {
            mute.src = "muteIcon.svg";
            audio.volume = 0.2;
            localStorage.setItem("volume", "0.2");
        }
        else if (audio.volume !== 0)
        {
            mute.src = "mutedIcon.svg";
            audio.volume = 0;
            localStorage.setItem("volume", "0");
        }
    });
    let volume = localStorage.getItem("volume");
    if (volume == null)
    {
        mute.src = "muteIcon.svg";
        audio.volume = 0.2;
        localStorage.setItem("volume", "0.2");
    }
    else if (volume === "0")
    {
        mute.src = "mutedIcon.svg";
        audio.volume = 0;
        localStorage.setItem("volume", "0");
    }
    else if (volume !== "0")
    {
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
function fillGrid(gridArray)
{
    for (let i = 0; i < gridWidth; i++)
    {
        gridArray[i] = new Array(10);

        for (let j = 0; j < gridHeight; j++)
        {
            gridArray[i][j] = false;
        }
    }

    if (isDebug)
    {
        console.log(gridArray);
    }
}

initGame();
drawFigure(currentFigureRow, currentFigureColumn, currentFigure);