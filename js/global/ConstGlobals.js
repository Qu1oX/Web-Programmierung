const canvas = document.getElementById("canvasGame");
const context = canvas.getContext('2d');

let isDebug = true;

// Grid
let width = 240;
let height = 480;
let step = 24;
let canvasWidth = 340;

// Grid size
let gridWidth = 20;
let gridHeight = 10;
const gridArray = [];
const gridStart = canvasWidth - width / 2;

// Right side box
const boxLength = step * 5;
const boxHight = step * 4;
let boxOffsetX = 20;
let boxOffsetY = 50;
let boxTextOffsetX = 63;
let boxTextOffsetY = 10;
const boxX = gridStart + (10 * (step + 1)) + boxOffsetX;
const boxY = boxOffsetY;
const boxTextX = boxX + boxTextOffsetX;
const boxTextY = boxY - boxTextOffsetY;

//Score
let scoreTextOffsetY = 32;
const scoreTextX = boxX + boxTextOffsetX;
const scoreTextY = boxY + boxLength + scoreTextOffsetY;

//Level
let levelTextOffsetY = 60;
const levelTextX = boxX + boxTextOffsetX;
const levelTextY = boxY + boxLength + levelTextOffsetY;

//ClearRect
let clearRectOffsetX = 30;
let clearRectOffsetY = 25;
let clearRectHightOffset = 25;

//Timer
let minTimer = 50;

//Colors
let colors = 7;