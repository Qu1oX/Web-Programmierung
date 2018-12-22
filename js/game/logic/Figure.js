"use strict";

/**
 * Replaces the current Figure with the Random Figure
 */
function insertRandomFigure()
{
    currentFigure = nextFigure;
    currentFigureColumn = Math.floor((Math.random() * gridArray[0].length));

    if (currentFigureColumn + currentFigure.matrix.length > gridArray[0].length)
    {
        currentFigureColumn -= currentFigure.matrix.length;
    }

    currentFigureRow = 0;

    if (checkCollisionBelow(currentFigureRow, currentFigureColumn, currentFigure.matrix))
    {
        gg();
    }

    drawFigure(currentFigureRow, currentFigureColumn, currentFigure);
    generateRandomFigure();
}


/**
 * Checks the collision and rotates the figure
 */
function rotateFigure()
{
    if (currentFigure._color === Color.YELLOW) {
        rotationAudio.play();
    }
    if (checkCollisionRotation(currentFigureRow, currentFigureColumn, currentFigure.matrix))
        return;

    removeFigure(currentFigureRow, currentFigureColumn, currentFigure);
    currentFigure.rotate();
    drawFigure(currentFigureRow, currentFigureColumn, currentFigure);
    rotationAudio.play();
}

/**
 * Generating the next Figure and displays it in the given box.
 */
function generateRandomFigure()
{
    let rand = Math.floor((Math.random() * colors) + 1);
    //if(isDebug)rand = 1;
    let color = getColor(rand);
    var oldFigure = nextFigure;
    nextFigure = new Figure(color);
    drawNextFigure(oldFigure, nextFigure);
}