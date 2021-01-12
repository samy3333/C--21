var fixedRect, movingRect;
var a1, a2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a1= createSprite(1000, 300, 40, 40);
  a1.shapeColor= "red";

  a2= createSprite(700, 300, 50, 60);
  a2.shapeColor= "yellow";
  a2.velocityX= 3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  
  bounceOff(a1, a2);
  drawSprites();
}

