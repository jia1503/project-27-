
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;

var ground1,chain1,ball1,ground2,ball2,ball3,ball4,ball5,chain2,chain3,chain4,chain5;

function preload() { }

function setup() { 
	createCanvas(800,650);
	engine = Engine.create();
	world = engine.world; 
	ground1=new Ground(400,80,700,20);
	ground2=new Ground(400,630,700,4);
	ball1=new Ball(240,600,50,50);
	ball2=new Ball(290,600,50,50);
	ball3=new Ball(340,600,50,50);
	ball4=new Ball(390,600,50,50);
	ball5=new Ball(440,600,50,50);
	
	chain1=new Chain(ball1.body,{x:240,y:80});
	chain2=new Chain(ball2.body,{x:290,y:80});
	chain3=new Chain(ball3.body,{x:340,y:80});
	chain4=new Chain(ball4.body,{x:390,y:80});
	chain5=new Chain(ball5.body,{x:440,y:80});

	Engine.run(engine); 
}

function draw() { 
	rectMode(CENTER); 
	background("yellow");
	ground1.display();
	ball1.display();
	ground2.display();
	chain1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	if (keyDown("LEFT_ARROW")){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100});
	    
	}
	drawSprites();

}