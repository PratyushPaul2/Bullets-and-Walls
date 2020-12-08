var bullet,wall,speed,weight,thickness,damage;


function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(100,200,50,10);
  thickness=Math.round(random(23,93));
  wall=createSprite(1500, 200, thickness*2, thickness);
  speed=Math.round(random(220, 320));
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
  damage=(.5*weight*speed*speed)/(thickness*thickness*thickness);
  
 
  
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
bullet.velocityX =0;
if(damage>10){
  bullet.shapeColor="red";
  wall.shapeColor="red";
}

if(damage<10){
  bullet.shapeColor="green";
  wall.shapeColor="green";
}

  }
  drawSprites();
  
}