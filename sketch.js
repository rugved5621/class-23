
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var box1;
var box2;
var ground1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 box1 = new Box(200,50,50,20);

 box2=new Box(220,200,40,50);
 ground1=new ground(200,390,400,10);
}



function draw() {
  background('black');  
  Engine.update(engine);
 
  box1.display();
  box2.display();
  ground1.display();

}