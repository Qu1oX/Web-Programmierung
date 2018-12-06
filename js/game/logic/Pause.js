"use strict";

/**
 * Function handling ESC Presses, pausing the game and resuming it respectively.
 */
function onEscape()
{
    if (paused)
    {
        audio.play();
        menuOff();
        optionsOff();
    }
    else
    {
        audio.pause();
        menuOn();
    }
    paused = !paused;
}

/**
 * Displays the pause menu
 */
function menuOn()
{
    document.getElementById("overlayPause").style.display = "block";
}

/**
 * Stop drawing the menu
 */
function menuOff()
{
    document.getElementById("overlayPause").style.display = "none";
}

/**
 * Toggles the options menu
 */
function toggleOptions()
{
    if (isOptionsOn)
        optionsOff();
    else
        optionsOn();

    isOptionsOn = !isOptionsOn;
}

/**
 * Turns the options off
 */
function optionsOff()
{
    document.getElementById("overlayOptions").style.display = "none";
}

/**
 * Turns the options on
 */
function optionsOn()
{
    document.getElementById("overlayOptions").style.display = "block";
}