//Score
let currentScore = 0;
let currentLevel = 0;
let rowsCleared = 0;

//Timer
let startTimer = 400;

//Figure
let currentFigure;
let currentFigureZeile = 4;
let currentFigureSpalte = 4;
let nextFigure;

//Handle
let intervalHandler;

//Sound
let audio = document.getElementById("gameaudio");
let paused = false;

//Options
let isOptionsOn = false;