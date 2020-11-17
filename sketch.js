
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (400,20,400,20);
	bob1 = new Bob (300,500,50);
	bob2 = new Bob(350,500,50);
	bob3 = new Bob(400,500,50);
	bob4 = new Bob(450,500,50);
	bob5 = new Bob(500,500,50);

    chain = new Chain(bob1.body,bob2.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain.display();

  drawSprites();
 
}



