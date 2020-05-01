const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drop,drop2;
var drops=[];

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){
    background("black");
    Engine.update(engine);
    drop = new Drop();
    drops.push(drop);
    drop2 = new Drop();
    drops.push(drop2);
    for(var index in drops){
        drops[index].display();
    }
   
}