
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var bar1,bar2,bar3;
var dusbin;
var ground;
var paperObject;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paperObject=new Paper(140,300,50);

	dustbin=new DustbinObj(600,590);
	
	bar1=new Dustbin(500,570,10,230);
        bar2=new Dustbin(600,690,200,10);
        bar3=new Dustbin(700,570,10,230);

	ground = new Ground(400,height,800,20);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paperObject.display(); 
  dustbin.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:390,y:-430});

	 }
   }


