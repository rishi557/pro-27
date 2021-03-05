
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1= new Bob(340,700,30);
	bobObject2= new Bob(370,700,30);
	bobObject3= new Bob(400,700,30);
	bobObject4= new Bob(430,700,30);
	bobObject5= new Bob(460,700,30);

	roof=new Roof(400,200,400,20);

	chain1=new Chain(bobObject1.body,roof.body,-30*2,0);
	chain2=new Chain(bobObject2.body,roof.body,-30*1,0);
	chain3=new Chain(bobObject3.body,roof.body,0,0);
	chain4=new Chain(bobObject4.body,roof.body,30*1,0);
	chain5=new Chain(bobObject5.body,roof.body,30*2,0);

	Engine.run(engine);
  
}


function draw() {

  	rectMode(CENTER);

  	background(180);
  
  	roof.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-15,y:-35});

	}
   }	
//this function is to make the bobs and the rope to be stationery in the beginning
   function drawLine(constraint)
   {
	   bobBodyPosition=constraint.bodyA.position
	   roofBodyPosition=constraint.bodyB.position
   
	   roofBodyOffset=constraint.pointB;
	   
	   roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	   roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	   line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
   }
   