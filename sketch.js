const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block;
var stand;
var a;
var polygon;
var slingShot;
var circles=[];
var score= 0;
var bg = "sprites/bg1.png";

function preload() {
  getBackgroundImg();
}
function setup() {
  createCanvas(800,800);
  //stroke(255)
  
  engine = Engine.create();
  world = engine.world;
 
  this.polygon= Bodies.circle(50,200,20);

  World.add(world, polygon);

  imageMode(CENTER);
  this.polygon= loadImage("polygon.png");

  block = new Block(390,155,30,40);
  block1= new Block(330,235,30,40);
   block2= new Block(360,235,30,40);
   block3= new Block(390,235,30,40);
   block4= new Block(420, 235, 30,40);
   block5= new Block(450,235,30,40);
   block6= new Block(450,235,30,40);
   block7= new Block(360,195,30,40);
   block8= new Block(390,195,30,40);
   block9= new Block(420,195,30,40);
   block10= new Block(420,195,30,40);
  
   stand= new Ground(200,200,5,5);
   
   
   slingShot = new Slingshot(polygon.body, {x: 100, y:150});


  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  if(backgroundImg)
  background(backgroundImg);
  
  a=a-1;
  Engine.update(engine);
  
  block.display();
  block1.display();
  
  block2.display();
  
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block.score();
  block1.score();
  
  block2.score();
  
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();

  stand.display();
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed()
{
    if(keyCode === 32)
    {
      slingShot.attach(polygon.body);
    }
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x : mouseX, y: mouseY})
}

function mouseReleased()
{
    slingShot.fly();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}