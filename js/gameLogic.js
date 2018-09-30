const width = 240;
const height = 480;
const step = 24;
const canvasWidth = 340;

const gridWidth = 20;
const gridHeight = 10;
const gridArray = [];
const gridStart = canvasWidth - width/2;

const updateTime = 100;

var canvas = document.getElementById("canvasGame");
var context = canvas.getContext('2d');

/**
 * Initialize the game
 * Only used once.
 *
 * @see drawGrid()
 * @see fillGrid()
 */
function initGame()
{
    drawGrid(context, width, height, step);
    fillGrid(gridArray);
}

/**
 * TODO: Javadoc
 * TODO: Function itself. Handles all the drawing.
 */
function draw()
{

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

        for(var j = 0; j < gridHeight; j++)
        {
            gridArray[i][j] = false;
        }
    }

    console.log(gridArray);
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
function drawGrid(context, width, height, step)
{
    context.beginPath();
    for (var x = gridStart; x <= width * 2; x += step)
    {
        context.moveTo(x, 0);
        context.lineTo(x, height);

        console.log(gridStart);
        console.log(x);
    }

    context.strokeStyle = 'rgb(255,255,255)';
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();
    for (var y = 0; y <= height; y += step)
    {
        context.moveTo(gridStart, y);
        context.lineTo(gridStart + width, y);

        console.log(y);
    }

    context.strokeStyle = 'rgb(255,255,255)';
    context.lineWidth = 1;
    context.stroke();
}

initGame();
draw();