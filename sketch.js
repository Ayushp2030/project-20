
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var plane;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var plane_options = {
		isStatic : true
	};

	plane = new block(400, 350, 50, 50, plane_options);
	World.add(world, plane)




	Engine.run(engine);

	rectMode(CENTER);
	ellipse(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background("#95F985");

  Engine.update(engine);

  plane.display();
  
  drawSprites();
 
}



