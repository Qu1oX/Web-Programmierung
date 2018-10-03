class Figure
{
    constructor(color)
    {
        this._color = color;
        this._figureMatrix = Figure.getMatrix(color);
        this._fix = false;
        this._rotation = 0;
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

    get rotation()
    {
        return this._rotation;
    }

    set rotation(value)
    {
        this._rotation = value;
    }

    rotate()
    {
        var oldMatrix = this.matrix;

        if (oldMatrix.length === 3)
        {
            //3x3 Matrix
            this.matrix = [
                [oldMatrix[2][0], oldMatrix[1][0], oldMatrix[0][0]],
                [oldMatrix[2][1], oldMatrix[1][1], oldMatrix[0][1]],
                [oldMatrix[2][2], oldMatrix[1][2], oldMatrix[0][2]]
            ];

            this._rotation = this._rotation + 90 % 360;
        }
        else if (oldMatrix.length === 4)
        {
            this.matrix = [
                [oldMatrix[3][0], oldMatrix[2][0], oldMatrix[1][0], oldMatrix[0][0]],
                [oldMatrix[3][1], oldMatrix[2][1], oldMatrix[1][1], oldMatrix[0][1]],
                [oldMatrix[3][2], oldMatrix[2][2], oldMatrix[1][2], oldMatrix[0][2]],
                [oldMatrix[3][3], oldMatrix[2][3], oldMatrix[1][3], oldMatrix[0][3]]
            ];

            this._rotation = this._rotation + 90 % 360;
        }
    }

    static pseudoRotation(matrix)
    {
        if (matrix.length === 3)
        {
            //3x3 Matrix
            return [
                [matrix[2][0], matrix[1][0], matrix[0][0]],
                [matrix[2][1], matrix[1][1], matrix[0][1]],
                [matrix[2][2], matrix[1][2], matrix[0][2]]
            ];
        }
        else if (matrix.length === 4)
        {
            return [
                [matrix[3][0], matrix[2][0], matrix[1][0], matrix[0][0]],
                [matrix[3][1], matrix[2][1], matrix[1][1], matrix[0][1]],
                [matrix[3][2], matrix[2][2], matrix[1][2], matrix[0][2]],
                [matrix[3][3], matrix[2][3], matrix[1][3], matrix[0][3]]
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
                return [
                    [0, 0, 0],
                    [1, 0, 0],
                    [1, 1, 1]
                ];
            case Color.ORANGE:
                //L Matrix
                return [
                    [0, 0, 0],
                    [0, 0, 1],
                    [1, 1, 1]
                ];
            case Color.YELLOW:
                //O Matrix
                return [
                    [1, 1],
                    [1, 1]
                ];
            case Color.GREEN:
                //S Matrix
                return [
                    [0, 0, 0],
                    [0, 1, 1],
                    [1, 1, 0]
                ];
            case Color.PINK:
                //T Matrix
                return [
                    [0, 0, 0],
                    [0, 1, 0],
                    [1, 1, 1]
                ];
            case Color.RED:
                //Z Matrix
                return [
                    [0, 0, 0],
                    [1, 1, 0],
                    [0, 1, 1]
                ];
        }
    }
}