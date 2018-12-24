"use strict";

/**
 * Forces the obj. to move down.
 * Normally called by pressing Array down or by a game tick.
 *
 * @param fastdrop If true score increases
 */
function moveObjectDown(fastdrop)
{
    if (paused)
        return;

    if (checkCollisionBelow(currentFigureRow, currentFigureColumn, currentFigure.matrix))
    {
        currentFigure.fix = true;
        fixFigureOnScreen(currentFigure);
        clearRowIfFull(gridArray);
        insertRandomFigure();
        generateRandomFigure();
    }
    else
    {
        removeFigure(currentFigureRow, currentFigureColumn, currentFigure);
        drawFigure(++currentFigureRow, currentFigureColumn, currentFigure);
        if (fastdrop)
        {
            console.log("User fast dropped and got 1 point for that. New score: " + currentScore);
            currentScore++;
        }
    }

    drawScore(context, currentScore);
}

/**
 * Moves the current figure left if it's allowed to.
 */
function moveObjectLeft()
{
    if (checkCollisionLeft(currentFigureRow, currentFigureColumn, currentFigure.matrix))
    {
        console.log("Can not move obj. left. because there is a wall.");
        return;
    }

    removeFigure(currentFigureRow, currentFigureColumn, currentFigure);
    drawFigure(currentFigureRow, --currentFigureColumn, currentFigure)
}

/**
 * Moves the current figure right if it's allowed to.
 */
function moveObjectRight()
{
    if (currentFigure == null)
        return;

    if (checkCollisionRight(currentFigureRow, currentFigureColumn, currentFigure.matrix))
    {
        console.log("Can not move obj. right. because there is a wall.");
        return;
    }

    removeFigure(currentFigureRow, currentFigureColumn, currentFigure);
    drawFigure(currentFigureRow, ++currentFigureColumn, currentFigure)
}

/**
 * Fixes a Figure to the Grid e.g writing it's 1's to the Grid.
 * @param figure
 */
function fixFigureOnScreen(figure)
{
    for (let z = currentFigureRow; z - currentFigureRow < currentFigure.matrix.length; z++)
    {
        for (let s = currentFigureColumn; s - currentFigureColumn < currentFigure.matrix[z - currentFigureRow].length; s++)
        {
            if (currentFigure.matrix[z - currentFigureRow][s - currentFigureColumn])
            {
                gridArray[z][s] = figure.color;
            }
        }
    }

    console.log("Fixed figure at pos: (" + currentFigureRow + ", " + currentFigureColumn + ")")
}

/**
 * Moves all fixed Rect's down
 *
 * @param row Row to start from
 */
function moveFixOneDown(row)
{
    console.log("Moving rect's down.")

    for (let r = row; r > 0; r--)
    {
        for (let c = 0; c < gridArray[0].length; c++)
        {

            removeRect(context, c, r - 1);
            removeRect(context, c, r);

            if (gridArray[r - 1][c] !== false)
            {
                fillRect(context, c, r, gridArray[r - 1][c]);
            }

            gridArray[r][c] = gridArray[r - 1][c];
            gridArray[r - 1][c] = false;
        }
    }
}

/**
 * Check if any row is full. If there is one deletes it.
 */
function clearRowIfFull()
{
    console.log("Checking for full lines.");

    let hasOnlyZero;
    let oldRowsCleared = rowsCleared.valueOf();
    for (let r = 0; r < gridArray.length; r++)
    {
        hasOnlyZero = true;

        for (let c = 0; c < gridArray[r].length; c++)
        {
            if (!gridArray[r][c])
            {
                hasOnlyZero = false;
            }
        }

        if (hasOnlyZero)
        {
            console.log("Clearing line " + r);

            rowsCleared++;
            lineClearAudio.play();
            if (rowsCleared % 10 === 0)
            {
                levelUp();
            }

            for (let c = 0; c < gridArray[r].length; c++)
            {
                removeRect(context, c, r);
                gridArray[r][c] = false;
            }

            moveFixOneDown(r);
            increaseScoreByRows(rowsCleared - oldRowsCleared);
        }
    }
}

/**
 * Helper function to get the score by cleared lines
 *
 * @param number Lines cleared
 */
function increaseScoreByRows(number)
{
    let linesClearedPoints = 0;
    if (number === 1)
    {
        linesClearedPoints = 40;
    }
    else if (number === 2)
    {
        linesClearedPoints = 100;
    }
    else if (number === 3)
    {
        linesClearedPoints = 300;
    }
    else if (number >= 4)
    {
        linesClearedPoints = 1200;
    }

    currentScore += linesClearedPoints * (currentLevel + 1);
    console.log("Cleared " + number + " lines. User achieved " + linesClearedPoints + " points. New score: " + currentScore);
}