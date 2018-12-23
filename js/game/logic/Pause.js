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
        controlsOff();
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
function toggleControls()
{
    if (isOptionsOn)
        controlsOff();
    else
        controlsOn();

    isOptionsOn = !isOptionsOn;
}

/**
 * Turns the options off
 */
function controlsOff()
{
    document.getElementById("overlayControls").style.display = "none";
}

/**
 * Turns the options on
 */
function controlsOn()
{
    document.getElementById("overlayControls").style.display = "block";
}