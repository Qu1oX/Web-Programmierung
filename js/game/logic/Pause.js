/**
 * Function handling ESC Presses, pausing the game and resuming it respectively.
 */
function onEscape() {
    if (paused) {
        audio.play();
        menuOff();
    } else {
        audio.pause();
        menuOn();
    }
    paused = !paused;
}

/**
 * Displays the Pause menu
 */
function menuOn() {
    document.getElementById("overlay").style.display = "block";
}

function menuOff() {
    document.getElementById("overlay").style.display = "none";
}