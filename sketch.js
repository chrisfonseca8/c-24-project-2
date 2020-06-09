var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground,case1,case2,case3,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	

	case1= new Box(1000,650,140,20);
	case2= new Box(1070,620,10,80);
    case3= new Box(930,620,10,80);

	ground = new Ground(width/2,height-20,width,20);
	ball = new Ball(width/2,height-100,50);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  }

function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
  case1.display();
  case2.display();
  case3.display();
  ground.display();
  ball.display();
 
	 }
	 
	 
	 function keyPressed(){
		if(keyCode === DOWN_ARROW){
		 Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.03,y:-0.3});
		
		}
	}
