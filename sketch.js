var fixRect,movingRect;
var car ,wall


function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(400, 200, 50, 50);
movingRect = createSprite(500,200,50,50)
fixRect.shapeColor = "green"
movingRect.shapeColor = "green"

car = createSprite(100,100,50,50)
car.velocityX = 4
wall = createSprite(1000,100,50,50)
}

function draw() {
  background(0); 
  if(isTouching(movingRect,fixRect)){
    movingRect.shapeColor = "Pink"
    fixRect.shapeColor = "Pink"
    textSize(20)
    text("is touching",100,100)
  }
  else {
    
    movingRect.shapeColor =" white"
    fixRect.shapeColor = "white"
  }
bounceOff(car,wall);
  

   
movingRect.x = mouseX;
movingRect.y = mouseY;


  drawSprites();
  
}
