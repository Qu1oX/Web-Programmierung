"use strict";

function testElements()
{
    if(canvas == null)
        throw "Can not get element for var canvas in global/ConstGlobals.js";

    if(context == null)
        throw "Can not get element for var context in global/ConstGlobals.js";

    if(audio == null)
        throw "Can not get element for var audio in global/Globals.js";

    if(rotationAudio == null)
        throw "Can not get element for var rotationAudio in global/Globals.js";

    if(lineClearAudio == null)
        throw "Can not get element for var lineClearAudio in global/Globals.js";

    if(gameOverAudio == null)
        throw "Can not get element for var gameOverAudio in global/Globals.js";
}