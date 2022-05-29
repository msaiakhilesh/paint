var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="green";
width=1;
mouse_event="";
var lastx,lasty;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)

{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouse_event="mousedown";
    console.log(color);
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft; current_y = e.clientY - canvas.offsetTop;

    if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(current_x,current_y);

    ctx.stroke();
}
lastx=current_x,lasty=current_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}
function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }