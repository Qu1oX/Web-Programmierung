/**
 * Draws a grid on the given canvas
 *
 * @param context Context of the canvas
 * @param width Width to draw
 * @param height Height to draw
 * @param step Step to draw basically just the size of a box
 * @param gridStartX Grid start X wise
 * @param gridStartY Grid start Y wise
 */
function drawGrid(context, width, height, step, gridStartX, gridStartY) {
    context.beginPath();
    for (let x = gridStartX; x <= width * 2; x += step) {
        context.moveTo(x, gridStartY);
        context.lineTo(x, height);

        if (isDebug) {
            console.log(x);
        }
    }

    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();
    for (let y = 0; y <= height; y += step) {
        context.moveTo(gridStartX, y);
        context.lineTo(gridStartX + width, y);

        if (isDebug) {
            console.log(y);
        }
    }

    context.strokeStyle = "#FFFFFF";
    context.lineWidth = 1;
    context.stroke();
}

/**
 * Draws a box on the canvas
 *
 * @param context Context to print on
 * @param boxX Top left X pos
 * @param boxY Top left Y pos
 */
function drawBox(context, boxX, boxY) {
    context.beginPath();
    context.lineWidth = "1";
    context.strokeStyle = "white";
    context.rect(boxX, boxY, boxSize, boxSize);
    context.stroke();
}

/**
 * Draws a text on the canvas
 *
 * @param context Context to print on
 * @param textX Middle X Pos
 * @param textY Middle Y Pos
 * @param string String to print
 */
function drawText(context, textX, textY, string) {
    context.font = "24px Microsoft YaHei UI Light";
    context.lineWidth = "1";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText(string, textX, textY);
}

/**
 * Draws a text aligned left
 *
 * @param context context to draw on
 * @param textX Text pos X wise
 * @param textY Text pos y wise
 * @param string String to draw
 */
function drawTextLeftSide(context, textX, textY, string)
{
    context.font = "18px Microsoft YaHei UI Light";
    context.lineWidth = "1";
    context.fillStyle = "white";
    context.textAlign = "left";
    context.fillText(string.toString(), textX, textY);
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

/**
 * Draws the next figure in the right box
 *
 * @param oldFigure Old Figure to remove
 * @param figure Figure to draw
 *
 * TODO: Center!
 */
function drawNextFigure(oldFigure, figure) {
    if (oldFigure != null) {
        if (oldFigure.color === Color.YELLOW) {
            removeFigure(4, 13, oldFigure);
        } else {
            removeFigure(3, 12, oldFigure);
        }
    }
    if (figure.color === Color.YELLOW) {
        drawFigure(4, 13, figure)
    } else {
        drawFigure(3, 12, figure)
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

/**
 * Removes the given rect at the given array pos
 *
 * @param context Context to remove on
 * @param arrayPosX Array pos X wise
 * @param arrayPosY Array pos Y wise
 */
function removeRect(context, arrayPosX, arrayPosY) {
    context.clearRect(arrayPosX * step + gridStart + context.lineWidth,
        arrayPosY * step + context.lineWidth,
        step - context.lineWidth * 2,
        step - context.lineWidth * 2);
}


/**
 * Removes a full figure from the field
 *
 * @param startY Figure start Y wise
 * @param startX Figure start X wise
 * @param figure Figure to remove
 */
function removeFigure(startY, startX, figure) {
    for (var x = 0; x < figure.matrix.length; x++) {
        for (var y = 0; y < figure.matrix[0].length; y++) {
            if (figure.matrix[y][x]) {
                removeRect(context, startX + x, startY + y);
            }
        }
    }
}

/**
 * Draws the score
 *
 * @param context The context
 * @param score score to draw
 */
function drawScore(context, score)
{
    context.clearRect((scoreTextX - width / 2) + clearRectOffsetX, scoreTextY - clearRectOffsetY, width + 2 , clearRectHightOffset);
    drawText(context, scoreTextX, scoreTextY, "Score: " + score);
}

/**
 * Draws the level
 *
 * @param level level to draw
 */
function drawLevel(context, level)
{
    context.clearRect((levelTextX - width / 2) + clearRectOffsetX, levelTextY - clearRectOffsetY, width + 2 , clearRectHightOffset);
    drawText(context, levelTextX, levelTextY, "Level: " + level);
}

/**
 * Draws the Highscore list
 *
 * @param context context to draw on
 */
function drawHighscore(context)
{
    let y = 30;
    context.clearRect(1, 1, gridStart - 1, height);
    drawTextLeftSide(context, 10, y, "Highscore");
    y += 30;

    console.log(instance.getScores());

    instance.getScores().forEach(
        function(element) {
            drawTextLeftSide(context, 10, y, element.toString());
            y += 30;
        });
}