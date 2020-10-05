const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var boxSideLeft, boxSideRight, boxBott;

function setup() {
	createCanvas(1530, 730);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(765,680,1530,15);
	paper = new Paper(100,660);

	boxBott = new Dustbin(1300,580,150,15);
	boxSideLeft = new Box(1220,610,15,125);
	boxSideRight = new Box(1375,610,15,125);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  //Engine.update(engine);

  drawSprites();
 
  ground.display();
  paper.display();
  boxBott.display();
  //boxSideLeft.display();
  //boxSideRight.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


