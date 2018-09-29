function initListener() {
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        switch (event.key) {
            case "Down": // IE specific value
            case "ArrowDown":
                // Do something for "down arrow" key press.
                break;
            case "Up": // IE specific value
            case "ArrowUp":
                // Do something for "up arrow" key press.
                break;
            case "Left": // IE specific value
            case "ArrowLeft":
                // Do something for "left arrow" key press.
                break;
            case "Right": // IE specific value
            case "ArrowRight":
                // Do something for "right arrow" key press.
                break;
            case "Enter":
                // Do something for "enter" or "return" key press.
                break;
            case "Escape":
                // Do something for "esc" key press.
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }, true);
}