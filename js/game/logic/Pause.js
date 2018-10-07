/**
 * Function handling ESC Presses, pausing the game and resuming it respectively.
 */
function onEscape() {
    if (paused) {
        //TODO: Remove Pause Screen
        audio.play();
    } else {
        //TODO: Show Pause Screen
        audio.pause();
    }
    paused = !paused;
}