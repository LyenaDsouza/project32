const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var sunrise1,sunrise2,sunrise3,sunrise4,sunrise5,sunrise6;
var sunset1,sunset2,sunset3,sunset4,sunset5,sunset6;

function preload()
 {
     sunrise1=loadImage("sunrise1.png");
     sunrise2=loadImage("sunrise2.png");
     sunrise3=loadImage("sunrise3.png");
     sunrise4=loadImage("sunrise4.png");
     sunrise5=loadImage("sunrise5.png");
     sunrise6=loadImage("sunrise6.png");
     sunset1=loadImage("sunset7.png");
     sunset2=loadImage("sunset8.png");
     sunset3=loadImage("sunset9.png");
     sunset4=loadImage("sunset10.png");
     sunset5=loadImage("sunset11.png");
     sunset6=loadImage("sunset12.png");
     getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

  if(backgroundImg)

  background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg()
{

   // var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  // var responsejson=await response.json();
  // var dateTime=responsejson.datetime
   var hour=06;
   if(hour>=04 && hour<=06 )
   {  bg = "sunrise1.png"; }
   else 
   if(hour>=06 && hour<=08 )
   {  bg = "sunrise2.png"; 
}else 
if(hour>=08 && hour<=11 )
{  bg = "sunrise3.png"; 
}else if(hour>=11 && hour<=13)
{  bg = "sunrise4.png"; 
}else if
(hour>=13 && hour<=15)
{  bg = "sunrise5.png";
 }else if(hour>=15 && hour<=17 )
 {  bg = "sunrise6.png";
 }else if(hour>=17 && hour<=18 )
 {  bg = "sunset7.png";
 }else if(hour>=18 && hour<=20 )
 {  bg = "sunset8.png"; 
}else if(hour>=20 && hour<=23 )
{  bg = "sunset9.png";
 }else if(hour>=23 && hour==0)
{  bg = "sunset10.png";
 }else if(hour==0 && hour<=03)
 {  bg = "sunset11.png";
 }else{  bg = "sunset12.png"; }

 backgroundImg=loadImage(bg);

}
