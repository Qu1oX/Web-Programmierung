"use strict";

//Score
let currentScore = 0;
let currentLevel = 0;
let rowsCleared = 0;

//Timer
let startTimer = 400;

//Figure
let currentFigure;
let currentFigureRow = 4;
let currentFigureColumn = 4;
let nextFigure = null;

//Handle
let intervalHandler;

//Sound
let audio = document.getElementById("gameaudio");
let paused = false;

//Options
let isOptionsOn = false;

//Gameover
let isGameoverOn = false;