/**
 * Forces the obj. to move down.
 * Normally called by pressing Array down or by a game tick.
 *
 * @param fastdrop If true score increases
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
    //width +2 cause the calculation is inaccurate sometimes
    context.clearRect(scoreTextX - width / 2, scoreTextY - 25, width +2 , 25);
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

/**
 * Check if any row is full. If there is one deletes it.
 */
function clearRowIfFull() {
    let hasOnlyZero;
    let oldRowsCleared = rowsCleared.valueOf();
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

            moveFixOneDown(z);
            increaseScoreByRows( rowsCleared - oldRowsCleared);
        }
    }
}

function increaseScoreByRows(number) {
    let linesClearedPoints = 0;
    if(number === 1){
        linesClearedPoints = 40;
    }else if(number === 2){
        linesClearedPoints = 100;
    }else if(number === 3){
        linesClearedPoints = 300;
    }else if(number === 4){
        linesClearedPoints = 1200;
    }
    currentScore += linesClearedPoints * (currentLevel + 1);
}