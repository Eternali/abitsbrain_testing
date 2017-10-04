// get canvas variables
var canvas = document.getElementById('nn_input');
var context = canvas.getContext('2d');
var mouse = false;
var finished = false;


function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
};

// get mouse position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};

// draw circle at mouse position when mousedown
function drawCircle (context, centerX, centerY, radius) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'black';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#000000';
    context.stroke();
};

// reset the canvas when the user clicks the clear button
function reset(canvas, context) {
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fill();
};

function clear_canvas() {
    finished = true;
};

// event listeners for the mouse
canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
}, false);

canvas.addEventListener('mousedown', function(evt) {
    mouse = true;
}, false);

canvas.addEventListener('mouseup', function(evt) {
    mouse = false;
}, false);

// repeatedly called to render the drawing on the canvas
var render = function () {
    if (mouse) {
        drawCircle(context, mousePos.x, mousePos.y, 25);
    } 
    if (finished) {
        reset(canvas, context);
        finished = false;
    }
};

// bring it all together
var main = function () {
    render();
    
    requestAnimationFrame(main);
};

// cross-browser compatability
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame 
        || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main();

