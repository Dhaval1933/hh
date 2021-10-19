const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground = new Ground();
    stand = new Stand(390,300,250,10)
    block1  = new Block(300,275,30,40)
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)
    block7 = new Block(480,275,30,40)
    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11= new Block(420,235,30,40)
    block12= new Block(450,235,30,40)
    block13= new Block(360,195,30,40)
    block14= new Block(390,195,30,40)
    block15= new Block(420,195,30,40)
    block16= new Block(390,155,30,40)
    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon);
    SlingShot=new Slingshot(this.polygon,{x:100,y:200});
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    

}
function draw(){
    background(56,44,44)
    Engine.update(engine)
    ground.display()
    stand.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
}




