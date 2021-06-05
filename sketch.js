const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(100,300);
    rubber = new Rubber(200,250,50)
    stone = new Stone(300,250,90,80);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    stone.display()
    iron.display();
    rubber.display();
    plane.display();
    hammer.display();

    
 
}