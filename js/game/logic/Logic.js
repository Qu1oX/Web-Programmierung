const canvas = document.getElementById("canvasGame");
const context = canvas.getContext('2d');

let intervalHandler;

let audio = document.getElementById("gameaudio");
let paused = false;

/**
 * Function handling ESC Presses, pausing the game and resuming it respectively.
 */
function onEscape() {
    if (paused) {
        //TODO: Remove Pause Screen
        audio.play();
    } else {
        //TODO: Show Pause Screen
        audio.pause();
    }
    paused = !paused;
}

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
 * TODO: Move all other rows down
 */
function clearRowIfFull() {
    let hasOnlyZero;

    for (let z = 0; z < gridArray.length; z++) {
        hasOnlyZero = true;

        for (let s = 0; s < gridArray[z].length; s++) {
            if (!gridArray[z][s]) {
                hasOnlyZero = false;
            }
        }

        if (hasOnlyZero) {
            console.log("Row " + z + " got no 0.");
            rowsCleared++;
            if (rowsCleared % 10 === 0) {
                levelUp();
            }
            currentScore += 40 * (currentLevel + 1);
            for (let s = 0; s < gridArray[z].length; s++) {
                removeRect(context, s, z);
                gridArray[z][s] = false;
            }

            moveFixOneDown(z)
        }
    }
}

/**
 * Generating the next Figure and displays it in the given box.
 */
function generateRandomFigure() {
    let rand = Math.floor((Math.random() * colors) + 1);
    //if(isDebug)rand = 1;
    let color = getColor(rand);
    var oldFigure = nextFigure;
    nextFigure = new Figure(color);
    drawNextFigure(oldFigure, nextFigure);
}

/**
 * TODO: Javadoc
 */
function gg() {
    clearInterval(intervalHandler);
}

/**
 * Replaces the current Figure with the Random Figure
 */
function insertRandomFigure() {
    currentFigure = nextFigure;
    currentFigureSpalte = Math.floor((Math.random() * gridArray[0].length));

    if (currentFigureSpalte + currentFigure.matrix.length > gridArray[0].length) {
        currentFigureSpalte -= currentFigure.matrix.length;
    }

    currentFigureZeile = 0;

    if (checkCollisionBelow(currentFigureZeile, currentFigureSpalte, currentFigure.matrix)) {
        gg();
    }

    drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    generateRandomFigure();
}

/**
 * TODO:
 */
function rotateFigure() {
    if (checkCollisionRotation(currentFigureZeile, currentFigureSpalte, currentFigure.matrix))
        return;

    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    currentFigure.rotate();
    drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
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

/**
 *
 * @param id
 * @returns {Color}
 */
function getColor(id) {
    switch (id) {
        case 1:
            return Color.LIGHTBLUE;
        case 2:
            return Color.DARKBLUE;
        case 3:
            return Color.ORANGE;
        case 4:
            return Color.YELLOW;
        case 5:
            return Color.GREEN;
        case 6:
            return Color.PINK;
        case 7:
            return Color.RED;
    }
}

initGame();
drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);