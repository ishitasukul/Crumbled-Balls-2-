
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (400, 680, 800, 50);

	paperball= new Paper (50,400);
	bin1= new Bin(605, 500,20, 100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  paperball.depth=ground.depth;
  paperball.depth=paperball.depth+1;

  
 
  paperball.display();
  bin1.display();
  ground.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyDown(UP_ARROW)){
	  Matter.Body.applyForce(paperball.body,paperball.body.position, {x:15, y:-15});
	}
  
}


