var bullet, speed, weight;
var fixedRect, thickness;


function setup() {
  createCanvas(1600,400);
  

  speed = 5;
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  fixedRect = createSprite(1200, 200, thickness, height/2);
  fixedRect.shapeColor = color(80,80,80);

  bullet = createSprite(0,200,50,5);
  bullet.shapeColor = color(255,255,255);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);
  
  if(bullet.x - fixedRect.x <= bullet.width/2 + fixedRect.width/2 &&

    fixedRect.x - bullet.x <= fixedRect.width/2 + bullet.width/2 &&
    
    bullet.y - fixedRect.y <= bullet.height/2 + fixedRect.height/2 &&

    fixedRect.y - bullet.y <= fixedRect.height/2 + bullet.height/2 ){
    
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/thickness*thickness*thickness;
    
    if(damage > 10){
      fixedRect.shapeColor = color(255,0,0);
    }
    
    if(damage < 10){
      fixedRect.shapeColor = color(0,255,0);
    }
  }


  drawSprites();
}