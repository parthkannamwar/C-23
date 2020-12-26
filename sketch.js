const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld, ground;
var box1,box2;
var ball;

function setup() 
{
  createCanvas(600,600);

  myengine=Engine.create();
  myworld=myengine.world;

  
  ground=new Ground(300,590,600,20);
  box1=new  Box(200,300,50,50)
  box2=new Box(180,200,50,100)
  console.log(box2.height)
  
}

function draw()
{
  background(0);  
  Engine.update(myengine);
  

  ground.display();
  box1.display();
  box2.display();

}