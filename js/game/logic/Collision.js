/**
 * Checks for collision below the matrix
 *
 * @param zeile Row to check on
 * @param spalte Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionBelow(zeile, spalte, matrix) {
    for (let z = zeile; z - zeile < matrix.length; z++) {
        for (let s = spalte; s - spalte < matrix[z - zeile].length; s++) {
            if (matrix[z - zeile][s - spalte]) {
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
 * Checks for collision left of the matrix
 *
 * @param zeile Row to check on
 * @param spalte Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionLeft(zeile, spalte, matrix) {
    for (let z = zeile; z - zeile < matrix.length; z++) {
        for (let s = spalte; s - spalte < matrix[z - zeile].length; s++) {
            if (matrix[z - zeile][s - spalte]) {
                if (s - 1 < 0)
                    return true;

                if (gridArray[z][s - 1] !== false)
                    return true;
            }
        }
    }

    return false;
}

/**
 * Checks for collision right of the matrix
 *
 * @param zeile Row to check on
 * @param spalte Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionRight(zeile, spalte, matrix) {
    for (let z = zeile; z - zeile < matrix.length; z++) {
        for (let s = spalte; s - spalte < matrix[z - zeile].length; s++) {
            if (matrix[z - zeile][s - spalte]) {
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
 * Checks for collision at the rotation the matrix
 *
 * @param zeile Row to check on
 * @param spalte Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionRotation(zeile, spalte, matrix) {
    let testMatrix = Figure.pseudoRotation(matrix);

    if (checkCollisionRight(zeile, spalte - 1, testMatrix))
    {
        return true;
    }

    if (checkCollisionLeft(zeile, spalte + 1, testMatrix))
    {
        return true;
    }

    return checkCollisionBelow(zeile - 1, spalte, testMatrix);
}