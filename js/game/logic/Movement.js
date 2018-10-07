/**
 * Forces the obj. to move down.
 * Normally called by pressing Array down or by a game tick.
 */
function moveObjectDown(fastdrop) {
    if (paused)
        return;

    if (checkCollisionBelow(currentFigureZeile, currentFigureSpalte, currentFigure.matrix)) {
        currentFigure.fix = true;
        fixFigureOnScreen(currentFigure);
        clearRowIfFull(gridArray);
        insertRandomFigure();
        generateRandomFigure();
    }
    else {
        removeFigure(currentFigureZeile, currentFigureSpalte, currentFigure);
        drawFigure(++currentFigureZeile, currentFigureSpalte, currentFigure);
        if (fastdrop)
            currentScore++;
    }
    let score = "Score: " + currentScore;
    let width = context.measureText(score).width;
    context.clearRect(scoreTextX - width / 2, scoreTextY - 25, width, 25);
    drawText(context, scoreTextX, scoreTextY, score);
}

/**
 * Moves the current figure left if it's allowed to.
 */
function moveObjectLeft() {
    if (checkCollisionLeft(currentFigureZeile, currentFigureSpalte, currentFigure.matrix)) {
        console.log("Can not move obj. left. because there is a logic.");
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

    if (checkCollisionRight(currentFigureZeile, currentFigureSpalte, currentFigure.matrix)) {
        console.log("Can not move obj. right. because there is a logic.");
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
    for (let z = currentFigureZeile; z - currentFigureZeile < currentFigure.matrix.length; z++) {
        for (let s = currentFigureSpalte; s - currentFigureSpalte < currentFigure.matrix[z - currentFigureZeile].length; s++) {
            if (currentFigure.matrix[z - currentFigureZeile][s - currentFigureSpalte]) {
                gridArray[z][s] = figure.color;
            }
        }
    }
}

/**
 * Moves all fixed Rect's down
 *
 * @param zeile Row to start from
 */
function moveFixOneDown(zeile) {
    for (let z = zeile; z > 0; z--) {
        for (let s = 0; s < gridArray[0].length; s++) {

            removeRect(context, s, z - 1);
            removeRect(context, s, z);

            if (gridArray[z - 1][s] !== false) {
                fillRect(context, s, z, gridArray[z - 1][s]);
            }

            gridArray[z][s] = gridArray[z - 1][s];
            gridArray[z - 1][s] = false;
        }
    }
}