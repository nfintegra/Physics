var canvas = document.getElementById('homeCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;
var dx = -10;
var dy = -8; 
var ballRadius = 10;

    function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    }

    function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
    }

    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
    }
}
    setInterval(draw, 20);