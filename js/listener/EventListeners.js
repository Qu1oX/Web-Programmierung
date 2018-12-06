"use strict";

function initListener()
{
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    window.addEventListener("keydown", function (event)
        {
            if (event.defaultPrevented)
            {
                return; // Do nothing if the event was already processed
            }

            if (isGameoverOn)
            {
                event.preventDefault();
                return;
            }

            if (paused && event.key !== "Escape")
            {
                event.preventDefault();
                return;

            }

            switch (event.key)
            {
                case "Down": // IE specific value
                case "ArrowDown":
                    moveObjectDown(true);
                    break;
                case "Up": // IE specific value
                case "ArrowUp":
                    // Do something for "up arrow" key press.
                    rotateFigure();
                    break;
                case "Left": // IE specific value
                case "ArrowLeft":
                    moveObjectLeft();
                    break;
                case "Right": // IE specific value
                case "ArrowRight":
                    moveObjectRight();
                    break;
                case "Enter":
                    // Do something for "enter" or "return" key press.
                    break;
                case "Escape":
                    onEscape();
                    // Do something for "esc" key press.
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }

            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }

        ,
        true
    )
    ;
}