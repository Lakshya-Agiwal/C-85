 var canvas = document.getElementById("myCanvas");
 var ctx=canvas.getContext("2d");
var car_width= 75;
var car_height=100;
var car_x=5;
var car_y=225;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
    
	greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;

}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,1000,600);
    
}
function uploadgreencar()
{
    ctx.drawImage(greencar_imgTag,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown" , key_touch);

   

function key_touch(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="37")
    {
        Left();


    }
    if(keyPressed=="38")
    {
        Up();

    }if(keyPressed=="39")
    {
        Right();

    }
    if(keyPressed=="40")
    {
        Down();

    }

}
function Left()
{
    if(car_x>0)
    {
        car_x=car_x-10;
        uploadBackground();
        uploadgreencar();
    }    
}
function Up()
{
    if (car_y>0)
    {
    car_y=car_y-10;
    uploadBackground();
    uploadgreencar();
    }
}
function Down()
{ if (car_y<=500)
    {
    car_y=car_y+10;
    uploadBackground();
    uploadgreencar();
    }
}
function Right()
{ 
    if (car_x<=900)
    {
    car_x=car_x+10;
    uploadBackground();
    uploadgreencar();
    }
}