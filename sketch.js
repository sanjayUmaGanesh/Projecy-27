
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600,800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,240,20);

	bobDiameter=40;

	startBobPositionX=800;
	startBobPositionY=700;//height/4+500;
	bobObject1=new bob(startBobPositionX-80,startBobPositionY,40);
	bobObject2=new bob(startBobPositionX-40,startBobPositionY,40);
	bobObject3=new bob(startBobPositionX,startBobPositionY,40);
	bobObject4=new bob(startBobPositionX+40,startBobPositionY,40);
	bobObject5=new bob(startBobPositionX+80,startBobPositionY,40);
	
	

	constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		stiffness :0.04,
		
		
	}

	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		stiffness :0.04,
	}


	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
	    stiffness :0.04,

	}

	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		stiffness :0.04,

	}

	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
	    stiffness :0.04,
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  
  line(bobObject1.body.position.x,bobObject1.body.position.y,roofObject.body.position.x-80,roofObject.body.position.y);
  line(bobObject2.body.position.x,bobObject2.body.position.y,roofObject.body.position.x-40,roofObject.body.position.y);
  line(bobObject3.body.position.x,bobObject3.body.position.y,roofObject.body.position.x,roofObject.body.position.y);
  line(bobObject4.body.position.x,bobObject4.body.position.y,roofObject.body.position.x+40,roofObject.body.position.y);
  line(bobObject5.body.position.x,bobObject5.body.position.y,roofObject.body.position.x+80,roofObject.body.position.y);
	
  
 
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}
