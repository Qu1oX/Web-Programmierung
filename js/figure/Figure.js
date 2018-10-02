class Figure
{

    constructor(color)
    {
        this._color = color;
        this._figureMatrix = Figure.getMatrix(color);
        this._fix = false;
    }

    get color()
    {
        return this._color;
    }

    set color(value)
    {
        this._color = value;
    }

    get matrix()
    {
        return this._figureMatrix;
    }

    set matrix(value)
    {
        this._figureMatrix = value;
    }

    get fix()
    {
        return this._fix;
    }

    set fix(value)
    {
        this._fix = value;
    }

    rotate(){
        var oldMatrix = this.matrix;
        if(oldMatrix.length === 3){
            //3x3 Matrix
            this.matrix = [
                [oldMatrix[2][0], oldMatrix[1][0], oldMatrix[0][0]],
                [oldMatrix[2][1], oldMatrix[1][1], oldMatrix[0][1]],
                [oldMatrix[2][2], oldMatrix[1][2], oldMatrix[0][2]]
            ];
        }
    }

    static getMatrix(color)
    {
        switch (color)
        {
            case Color.LIGHTBLUE:
                //I Matrix
                return [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ];
            case Color.DARKBLUE:
                //J Matrix
                return  [
                    [0, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1]
                ];
            case Color.ORANGE:
                //L Matrix
                return  [
                    [0, 0, 0],
                    [0, 0, 1],
                    [1, 1, 1]
                ];
            case Color.YELLOW:
                //O Matrix
                return  [
                    [1, 1],
                    [1, 1]
                ];
            case Color.GREEN:
                //S Matrix
                return  [
                    [0, 0, 0],
                    [0, 1, 1],
                    [1, 1, 0]
                ];
            case Color.PINK:
                //T Matrix
                return  [
                    [0, 0, 0],
                    [0, 1, 0],
                    [1, 1, 1]
                ];
            case Color.RED:
                //Z Matrix
                return  [
                    [0, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1]
                ];
        }
    }
}