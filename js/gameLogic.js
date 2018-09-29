var w = 240;
var h = 480;
var step = 24;

const gridArray = [];

for (var i = 0; i < 20; i++) {

    gridArray[i] = new Array(10);

    for(var j = 0; j < 10; j++){
        gridArray[i][j] = false;
    }
}

console.log(gridArray);

var canvasElementId = 'canvasGame';
var canvas = document.getElementById(canvasElementId);

var ctx = canvas.getContext('2d');

var drawGrid = function(ctx, w, h, step)
{
    ctx.beginPath();
    for (var x=0;x<=w;x+=step)
    {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }

    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    for (var y=0;y<=h;y+=step)
    {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }

    ctx.strokeStyle = 'rgb(255,255,255)';
    ctx.lineWidth = 1;
    ctx.stroke();
};

drawGrid(ctx, w, h, step);
