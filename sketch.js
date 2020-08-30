
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,bin1;
var ball;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
	 density: 1.2,
		isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    
    var ball_option ={
	   restitution:0.5,
	   isStatic: false,
	   friction: 0.5,
	   density: 1.2
    }
	ball = Bodies.circle(20,360,20,ball_option);
 
   

	World.add(world,ball)
	World.add(world,ground);
    console.log(ground);
}


function draw() {
	background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
	ellipse(ball.position.x,ball.position.y,20,20);
 
}



