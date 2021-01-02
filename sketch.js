
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var corona=[];
var vaccineobject,coronaobject;
var vaccine1;
var scientist,scienimg;
var sling;
maxcorona=50;
function preload()
{
	scienimg=loadImage("123456789.png");
}

function setup() {
	var canvas=createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;
scientist=createSprite(300,height/2+230,30,30);
scientist.addImage(scienimg);
	//Create the Bodies Here.
	for (var j = 75; j <=width/2; j=j+30) 
    {
    
       corona.push(new Corona(j+400,665,40));
    }
    for (var j = 75; j <=width/2; j=j+40) 
    {
    
       corona.push(new Corona(j+400,605,40));
    }

    for (var j = 75; j <=width/2; j=j+50) 
    {
    
       corona.push(new Corona(j+400,565,40));
    }

    for (var j = 75; j <=width/2; j=j+60) 
    {
    
       corona.push(new Corona(j+400,505,40));
    }
    for (var j = 75; j <=width/2; j=j+70) 
    {
    
       corona.push(new Corona(j+400,465,40));
    }
	   
ground1= new Ground(width/2,height/2+350,width,18);

vaccine1=new Vaccine(250,height/2+200,60);
sling=new Slingshot(vaccine1.body,{x:250,y:height/2+200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

	
  ground1.display();
  for (var i = 0; i < corona.length; i++) {
     
    corona[i].display();
    
  }
  drawSprites();
  vaccine1.display();
  sling.display();
  
  for (var k=0;k<corona.length;k++){
     console.log(corona[k].body);
     detectcollision(vaccine1,corona[k]);
  }
}
function mouseDragged(){
   Matter.Body.setPosition(vaccine1.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
   sling.fly();
 }
 function keyPressed(){
    if(keyCode===32){
       sling.attach(vaccine1.body)
    }
 }
 function detectcollision (vaccineobject,coronaobject){
    console.log(coronaobject);
	//coronaBodyPosition=coronaobject.body.position 
	//vaccineBodyPosition=vaccineobject.body.position
   var distance=dist(vaccineobject.body.position.x,vaccineobject.body.position.y,coronaobject.body.position.x,coronaobject.body.position.y);
   if(distance<=vaccineobject.r+coronaobject.r){
      corona[coronaobject].destroy(coronaobject);
   }
  
	
}
 
 
 



