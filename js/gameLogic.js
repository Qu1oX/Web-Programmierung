const isDebug = true;

const width = 240;
const height = 480;
const step = 24;
const canvasWidth = 340;

const gridWidth = 20;
const gridHeight = 10;
const gridArray = [];
const gridStart = canvasWidth - width / 2;

const updateTime = 500;

const canvas = document.getElementById("canvasGame");
const context = canvas.getContext('2d');
var currentFigure = new Figure(Color.DARKBLUE);
var currentFigureZeile = 4;
var currentFigureSpalte = 4;


const scope = window.setInterval(function () {
    moveObjectDown();
}, updateTime);

/**
 * Initialize the game
 * Only used once.
 *
 * @see drawGrid()
 * @see fillGrid()
 */
function initGame() {
    drawGrid(context, width, height, step, gridStart);
    fillGrid(gridArray);
}

/**
 * Forces the obj. to move down.
 * Normally called by pressing Array down or by a game tick.
 */
function moveObjectDown() {
    if (currentFigure == null)
        return;
    if (checkCollisionBelow(currentFigureZeile, currentFigureSpalte, currentFigure.matrix)) {
        currentFigure.fix = true;
        fixFigureOnScreen(currentFigure);
        currentFigure = null;
        currentFigureZeile = 0;
        currentFigureSpalte = 0;
        insertRandomFigure();
        generateRandomFigure();
    } else {
        removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
        drawFigure(++currentFigureZeile, currentFigureSpalte, currentFigure)
    }
}

/**
 * Moves the current figure left if it's allowed to.
 */
function moveObjectLeft() {
    if (currentFigure == null)
        return;

    if ((currentFigureSpalte - 1) < 0) {
        console.log("Can not move obj. left. because there is a wall.");
        return;
    }

    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    drawFigure(currentFigureZeile, --currentFigureSpalte, currentFigure)
}

/**
 * Moves the current figure right if it's allowed to.
 */
function moveObjectRight() {
    if (currentFigure == null)
        return;

    if ((currentFigureSpalte + currentFigure.matrix.length + 1) > gridArray[currentFigureZeile].length) {
        console.log("Can not move obj. left. because there is a wall.");
        return;
    }

    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    drawFigure(currentFigureZeile, ++currentFigureSpalte, currentFigure)
}

/**
 * Fixes a Figure to the Grid e.g writing it's 1's to the Grid.
 * @param figure
 */
function fixFigureOnScreen(figure) {

}

/**
 * Generating the next Figure and displays it in the given box.
 */
function generateRandomFigure() {

}

/**
 * Replaces the current Figure with the Random Figure
 */
function insertRandomFigure() {

}

/**
 * Checking if a collision with the Game Bounds or a fixed Figure exist (only checking below the figure)
 * @returns {@code true} If the next move would create a collision
 *          {@code false} If not
 */
function checkCollisionBelow(zeile,spalte,matrix) {
    //get Last 1 for each row
    var rowOffsets = [matrix.length];
    for (let i = 0; i < matrix.length; i++) {
        rowOffsets[i] = -1;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i]) {
                rowOffsets[i] = j;
            }
        }
    }
    //Check Below
    for (let i = 0; i < rowOffsets.length; i++) {
        if (zeile + matrix.length === gridArray.length || gridArray[zeile + rowOffsets[i] + 1][spalte + i]) {
            return true;
        }
    }

    return false;
}

function rotateFigure() {
    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    currentFigure.rotate();
    drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
}

/**
 * Draws a figure into the grid
 *
 * @param startX Top Left start point X wise
 * @param startY Top Left start point Y wise
 * @param figure Figure to draw
 *
 * @see Figure
 * @see fillRect
 */
function drawFigure(startY, startX, figure) {
    for (var x = 0; x < figure.matrix.length; x++) {
        for (var y = 0; y < figure.matrix[0].length; y++) {
            if (figure.matrix[y][x]) {
                fillRect(context, startX + x, startY + y, figure.color);
            }
        }
    }
}

function removeFigure(startY, startX, figure) {
    for (var x = 0; x < figure.matrix.length; x++) {
        for (var y = 0; y < figure.matrix[0].length; y++) {
            if (figure.matrix[y][x]) {
                removeRect(context, startX + x, startY + y, figure.color);
            }
        }
    }
}

/**
 * Fills a Rect with the given Color and Coords
 *
 * @param context Context of the canvas
 * @param arrayPosX Array pos to fill X wise
 * @param arrayPosY Array pos to fill Y wise
 * @param color Color to set
 */
function fillRect(context, arrayPosX, arrayPosY, color) {
    context.fillStyle = color._colorCode;

    context.fillRect(arrayPosX * step + gridStart + context.lineWidth,
        arrayPosY * step + context.lineWidth,
        step - context.lineWidth * 2,
        step - context.lineWidth * 2);
}

function removeRect(context, arrayPosX, arrayPosY, color) {

    context.clearRect(arrayPosX * step + gridStart + context.lineWidth,
        arrayPosY * step + context.lineWidth,
        step - context.lineWidth * 2,
        step - context.lineWidth * 2);
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
 * Draws a grid on the given canvas
 *
 * @param context Context of the canvas
 * @param width Width to draw
 * @param height Height to draw
 * @param step Step to draw basically just the size of a box
 *
 * @see beginPath
 * @see moveTo
 * @see lineTo
 * @see strokeStyle
 * @see lineWidth
 * @see stroke
 */
function drawGrid(context, width, height, step, gridStart) {
    context.beginPath();
    for (var x = gridStart; x <= width * 2; x += step) {
        context.moveTo(x, 0);
        context.lineTo(x, height);

        if (isDebug) {
            console.log(x);
        }
    }

    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();
    for (var y = 0; y <= height; y += step) {
        context.moveTo(gridStart, y);
        context.lineTo(gridStart + width, y);

        if (isDebug) {
            console.log(y);
        }
    }

    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;
    context.stroke();
}

initGame();
drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);