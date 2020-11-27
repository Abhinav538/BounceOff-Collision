var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;
 fixedRect.velocityY = +5;

 movingRect = createSprite(400, 200, 80, 30);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&   
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&   
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{fixedRect.shapeColor="green";
  movingRect.shapeColor="green";}
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&   
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
    if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&   
      movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)
      {movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1); }
  drawSprites();
}