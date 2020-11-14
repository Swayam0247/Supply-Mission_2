var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redbox1body,redbox2body,redbox3body,redbox1sprite,redbox2sprite,redbox3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var o_options ={
		isStatic : true
	  }
 
	engine = Engine.create();
	world= engine.world;

	packageSprite=createSprite(width/2, 80, 40,40,o_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	redbox1sprite=createSprite(400, 600, 100,20,o_options);
	redbox1Sprite.shapeColor=color("red");

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 40 ,40, {isStatic:true});
	World.add(world, packageBody);

	redbox1body = Bodies.rectangle(400 , 600 , 100 ,20, {isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false)  
  }
}

