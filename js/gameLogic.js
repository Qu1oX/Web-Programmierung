//TODO: Pause, Settings, Save
//TODO: Figures rein fliegen.

const isDebug = true;

const width = 240;
const height = 480;
const step = 24;
const canvasWidth = 340;

const gridWidth = 20;
const gridHeight = 10;
const gridArray = [];
const gridStart = canvasWidth - width / 2;

const updateTime = 400;

const colors = 7;

const canvas = document.getElementById("canvasGame");
const context = canvas.getContext('2d');
var currentFigure;
var currentFigureZeile = 4;
var currentFigureSpalte = 4;
var nextFigure;


const scope = window.setInterval(function ()
{
    moveObjectDown();
}, updateTime);

/**
 * Initialize the game
 * Only used once.
 *
 * @see drawGrid()
 * @see fillGrid()
 */
function initGame()
{
    drawGrid(context, width, height, step, gridStart);
    fillGrid(gridArray);
    generateRandomFigure();
    insertRandomFigure();
}

/**
 * Forces the obj. to move down.
 * Normally called by pressing Array down or by a game tick.
 */
function moveObjectDown()
{
    if (checkCollisionBelow(currentFigureZeile, currentFigureSpalte, currentFigure.matrix))
    {
        currentFigure.fix = true;
        fixFigureOnScreen(currentFigure);
        clearRowIfFull(gridArray);
        insertRandomFigure();
        generateRandomFigure();
    }
    else
    {
        removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
        drawFigure(++currentFigureZeile, currentFigureSpalte, currentFigure)
    }
}

/**
 * Moves the current figure left if it's allowed to.
 */
function moveObjectLeft()
{
    if (checkCollisionLeft(currentFigureZeile, currentFigureSpalte, currentFigure.matrix))
    {
        console.log("Can not move obj. left. because there is a collision.");
        return;
    }

    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    drawFigure(currentFigureZeile, --currentFigureSpalte, currentFigure)
}

/**
 * Moves the current figure right if it's allowed to.
 */
function moveObjectRight()
{
    if (currentFigure == null)
        return;

    if (checkCollisionRight(currentFigureZeile, currentFigureSpalte, currentFigure.matrix))
    {
        console.log("Can not move obj. right. because there is a collision.");
        return;
    }

    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    drawFigure(currentFigureZeile, ++currentFigureSpalte, currentFigure)
}

/**
 * Fixes a Figure to the Grid e.g writing it's 1's to the Grid.
 * @param figure
 */
function fixFigureOnScreen(figure)
{
    for (let z = currentFigureZeile; z - currentFigureZeile < currentFigure.matrix.length; z++)
    {
        for (let s = currentFigureSpalte; s - currentFigureSpalte < currentFigure.matrix[z - currentFigureZeile].length; s++)
        {
            if (currentFigure.matrix[z - currentFigureZeile][s - currentFigureSpalte])
            {
                gridArray[z][s] = figure.color;
            }
        }
    }
}

/**
 * TODO: Javadoc
 * TODO: Move all other rows down
 */
function clearRowIfFull()
{
    let hasOnlyZero;

    for(let z = 0; z < gridArray.length; z++)
    {
        hasOnlyZero = false;

        for(let s = 0; s < gridArray[z].length; s++)
        {
            if(!gridArray[z][s])
            {
                hasOnlyZero = true;
            }
        }

        if(hasOnlyZero === false)
        {
            console.log("Row " + z + " got no 0.");

            for(let s = 0; s < gridArray[z].length; s++)
            {
                removeRect(context, s, z, gridArray[z][s].color);
                gridArray[z][s] = false;
            }
        }
    }
}

/**
 * Generating the next Figure and displays it in the given box.
 */
function generateRandomFigure()
{
    let rand = Math.floor((Math.random() * colors) + 1);
    let color = getColor(rand);
    nextFigure = new Figure(color);
}

/**
 * TODO: Javadoc
 */
function gg()
{
    clearInterval(scope);
}

/**
 * Replaces the current Figure with the Random Figure
 */
function insertRandomFigure()
{
    currentFigure = nextFigure;
    currentFigureSpalte = Math.floor((Math.random() * gridArray[0].length));

    if (currentFigureSpalte + currentFigure.matrix.length > gridArray[0].length)
    {
        currentFigureSpalte -= currentFigure.matrix.length;
    }

    currentFigureZeile = 0

    if (checkCollisionBelow(currentFigureZeile, currentFigureSpalte, currentFigure.matrix))
    {
        gg();
    }

    drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    generateRandomFigure();

}

/**
 * Checking if a collision with the Game Bounds or a fixed Figure exist (only checking below the figure)
 * @returns {@code true} If the next move would create a collision
 *          {@code false} If not
 */
function checkCollisionBelow(zeile, spalte, matrix)
{
    for (let z = zeile; z - zeile < matrix.length; z++)
    {
        for (let s = spalte; s - spalte < matrix[z - zeile].length; s++)
        {
            if (matrix[z - zeile][s - spalte])
            {
                if (z + 1 >= gridArray.length)
                    return true;

                if (gridArray[z + 1][s] !== false)
                    return true;
            }
        }
    }

    return false;
}

/**
 *
 * @param zeile
 * @param spalte
 * @param matrix
 */
function checkCollisionLeft(zeile, spalte, matrix)
{
    for (let z = zeile; z - zeile < matrix.length; z++)
    {
        for (let s = spalte; s - spalte < matrix[z - zeile].length; s++)
        {
            if (matrix[z - zeile][s - spalte])
            {
                if (s - 1 < 0)
                    return true;

                if (gridArray[z][s - 1] !== false)
                    return true;
            }
        }
    }

    return false;
}

function checkCollisionRight(zeile, spalte, matrix)
{
    for (let z = zeile; z - zeile < matrix.length; z++)
    {
        for (let s = spalte; s - spalte < matrix[z - zeile].length; s++)
        {
            if (matrix[z - zeile][s - spalte])
            {
                if (s + 1 > gridArray.length)
                    return true;

                if (gridArray[z][s + 1] !== false)
                    return true;
            }
        }
    }

    return false;
}

/**
 * TODO:
 */
function rotateFigure()
{
    if(checkCollisionRotation(currentFigureZeile, currentFigureSpalte, currentFigure.matrix))
        return;

    removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
    currentFigure.rotate();
    drawFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
}

/**
 *
 */
function checkCollisionRotation(zeile, spalte, matrix)
{
    let testMatrix = Figure.pseudoRotation(matrix);

    if(checkCollisionRight(zeile, spalte, testMatrix))
        return true;

    if(checkCollisionLeft(zeile, spalte, testMatrix))
        return true;

    if(checkCollisionBelow(zeile, spalte, testMatrix))
        return true;

    return false;
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
function drawFigure(startY, startX, figure)
{
    for (var x = 0; x < figure.matrix.length; x++)
    {
        for (var y = 0; y < figure.matrix[0].length; y++)
        {
            if (figure.matrix[y][x])
            {
                fillRect(context, startX + x, startY + y, figure.color);
            }
        }
    }
}

/**
 * TODO: Javadoc
 *
 * @param startY
 * @param startX
 * @param figure
 */
function removeFigure(startY, startX, figure)
{
    for (var x = 0; x < figure.matrix.length; x++)
    {
        for (var y = 0; y < figure.matrix[0].length; y++)
        {
            if (figure.matrix[y][x])
            {
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
function fillRect(context, arrayPosX, arrayPosY, color)
{
    context.fillStyle = color._colorCode;

    context.fillRect(arrayPosX * step + gridStart + context.lineWidth,
        arrayPosY * step + context.lineWidth,
        step - context.lineWidth * 2,
        step - context.lineWidth * 2);
}

function removeRect(context, arrayPosX, arrayPosY, color)
{
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
function fillGrid(gridArray)
{
    for (var i = 0; i < gridWidth; i++)
    {
        gridArray[i] = new Array(10);

        for (var j = 0; j < gridHeight; j++)
        {
            gridArray[i][j] = false;
        }
    }

    if (isDebug)
    {
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
function drawGrid(context, width, height, step, gridStart)
{
    context.beginPath();
    for (var x = gridStart; x <= width * 2; x += step)
    {
        context.moveTo(x, 0);
        context.lineTo(x, height);

        if (isDebug)
        {
            console.log(x);
        }
    }

    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();
    for (var y = 0; y <= height; y += step)
    {
        context.moveTo(gridStart, y);
        context.lineTo(gridStart + width, y);

        if (isDebug)
        {
            console.log(y);
        }
    }

    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;
    context.stroke();
}

/**
 *
 * @param id
 * @returns {Color}
 */
function getColor(id)
{
    switch (id)
    {
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