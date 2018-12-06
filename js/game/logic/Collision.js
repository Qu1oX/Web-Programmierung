"use strict";

/**
 * Checks for collision below the matrix
 *
 * @param row Row to check on
 * @param spalte Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionBelow(row, column, matrix)
{
    for (let z = row; z - row < matrix.length; z++)
    {
        for (let s = column; s - column < matrix[z - row].length; s++)
        {
            if (matrix[z - row][s - column])
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
 * Checks for collision left of the matrix
 *
 * @param row Row to check on
 * @param column Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionLeft(row, column, matrix)
{
    for (let z = row; z - row < matrix.length; z++)
    {
        for (let s = column; s - column < matrix[z - row].length; s++)
        {
            if (matrix[z - row][s - column])
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

/**
 * Checks for collision right of the matrix
 *
 * @param row Row to check on
 * @param column Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionRight(row, column, matrix)
{
    for (let z = row; z - row < matrix.length; z++)
    {
        for (let s = column; s - column < matrix[z - row].length; s++)
        {
            if (matrix[z - row][s - column])
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
 * Checks for collision at the rotation the matrix
 *
 * @param row Row to check on
 * @param column Column to check
 * @param matrix Matrix to check
 * @returns {boolean} true if there is a collision
 *                    false if not
 */
function checkCollisionRotation(row, column, matrix)
{
    let testMatrix = Figure.pseudoRotation(matrix);

    if (checkCollisionRight(row, column - 1, testMatrix))
    {
        return true;
    }

    if (checkCollisionLeft(row, column + 1, testMatrix))
    {
        return true;
    }

    return checkCollisionBelow(row - 1, column, testMatrix);
}