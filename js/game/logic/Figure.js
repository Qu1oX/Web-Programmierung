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