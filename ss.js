const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var engine,world;
var divisionHeight=300;
var ground;

var particles = []
var  division = []
var plinkos = []



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-20,width,20);

  
  for(var i = 0; i<=width; i=i+60){
    division.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j =75; j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j=50; j<=width-10; j-j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j =75; j<=width;j=j+50){
    plinkos.push(new Plinko(j,250))
  }

  for (var j=50; j<=width-10; j-j+50){
    plinkos.push(new Plinko(j,375))
  }
}

function draw() {
  background("black"); 
  
  Engine.update(engine)

  ground.display();

  for(var i = 0; i < plinkos.length; i++){
   plinkos[i].display();
  }

  for (var j=0; j < particles.length;j++){
    particles[i].display();
  }

  for (var k =0; k< division.length;k++){
    division[k].display();
  }

  drawSprites();
}