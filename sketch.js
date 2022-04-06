const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var world,engine;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
ball=Bodies.circle(20,30,10);
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(+200);
  
ground.display();
ground= new ground(whidth/2,670,width,20);
leftSide = new ground(100,600,20,120);
rightSide = new ground(100,600,20,120);


  drawSprites();
 
}



function keyPressed (){
if (keyCode == UP_ARROW){

	Matter.Body.applyForce(Body,option,10);
}



}