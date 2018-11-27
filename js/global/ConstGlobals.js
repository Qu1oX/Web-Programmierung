const canvas = document.getElementById("canvasGame");
const context = canvas.getContext('2d');

const isDebug = true;

// Grid
const width = 240;
const height = 480;
const step = 24;
const canvasWidth = 340;

// Grid size
const gridWidth = 20;
const gridHeight = 10;
const gridArray = [];
const gridStart = canvasWidth - width / 2;

// Right side box
const boxLength = step * 5;
const boxHeight = step * 4;
const boxOffsetX = 16;
const boxOffsetY = 50;
const boxTextOffsetX = 60;
const boxTextOffsetY = 8;
const boxX = gridStart + (10 * (step + 1)) + boxOffsetX;
const boxY = boxOffsetY;
const boxTextX = boxX + boxTextOffsetX;
const boxTextY = boxY - boxTextOffsetY;

//Score
const scoreTextOffsetY = 8;
const scoreTextX = boxX + boxTextOffsetX;
const scoreTextY = boxY + boxLength + scoreTextOffsetY;

//Level
let levelTextOffsetY = 38;
const levelTextX = boxX + boxTextOffsetX;
const levelTextY = boxY + boxLength + levelTextOffsetY;

//ClearRect
const clearRectOffsetX = 50;
const clearRectOffsetY = 20;
const clearRectHeightOffset = 25;

//Timer
const minTimer = 50;

//Colors
const colors = 7;