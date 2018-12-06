"use strict";

class Color
{
    constructor(name, colorCode)
    {
        this._name = name;
        this._colorCode = colorCode;
    }

    get name()
    {
        return this._name;
    }

    set name(value)
    {
        this._name = value;
    }

    get colorCode()
    {
        return this._colorCode;
    }

    set colorCode(value)
    {
        this._colorCode = value;
    }

}


Color.LIGHTBLUE = new Color("LIGHTBLUE", "#27a4af");
Color.DARKBLUE = new Color("DARKBLUE", "#1e5799");
Color.ORANGE = new Color("ORANGE", "#a55a00");
Color.YELLOW = new Color("YELLOW", "#c48a00");
Color.GREEN = new Color("GREEN", "#139f27");
Color.PINK = new Color("PINK", "#a6078c");
Color.RED = new Color("RED", "#990012");


/**
 *
 * @param id
 * @returns {Color}
 */
function getColor(id)
{
    switch (id)
    {
        case 1:
            return Color.LIGHTBLUE;
        case 2:
            return Color.DARKBLUE;
        case 3:
            return Color.ORANGE;
        case 4:
            return Color.YELLOW;
        case 5:
            return Color.GREEN;
        case 6:
            return Color.PINK;
        case 7:
            return Color.RED;
    }
}

