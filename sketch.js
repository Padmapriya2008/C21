var fixedrect,movingrect;
var bouncingrect1, bouncingrect2;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);
  bouncingrect1 = createSprite(500, 200, 50, 50);
  bouncingrect2 = createSprite(750, 200, 50, 50);
  bouncingrect1.velocityX = 5;
  bouncingrect2.velocityX = -5;

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(0); 
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  bounceOff(bouncingrect1, bouncingrect2);
  if(isTouching(fixedrect, movingrect)){
    fixedrect.shapeColor = "yellow";
    movingrect.shapeColor = "yellow";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }


  drawSprites();
}

