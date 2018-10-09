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
const boxSize = 125;
const boxOffsetX = 42;
const boxOffsetY = 70;
const boxTextOffsetX = 63;
const boxTextOffsetY = 10;
const boxX = gridStart + (10 * (step + 1)) + boxOffsetX;
const boxY = boxOffsetY;
const boxTextX = boxX + boxTextOffsetX;
const boxTextY = boxY - boxTextOffsetY;

//Score
const scoreTextOffsetY = 32;
const scoreTextX = boxX + boxTextOffsetX;
const scoreTextY = boxY + boxSize + scoreTextOffsetY;

//Level
const levelTextOffsetY = 60;
const levelTextX = boxX + boxTextOffsetX;
const levelTextY = boxY + boxSize + levelTextOffsetY;

//ClearRect
const clearRectOffsetX = 10;
const clearRectOffsetY = 25;
const clearRectHightOffset = 25;

//Timer
const minTimer = 50;

//Colors
const colors = 7;