

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

var mPressed, mReleased;
var popping;

function draw() {
  colorMode(HSB, 100);

  noStroke();

  var size = width/20 * (.5 + (millis()-mPressed)/800);
  var strobe = millis()/6 % 100;
    
  // put drawing code here
  if (mouseIsPressed && !popping) {
    fill(pink(strobe/100*10));
    drawHeart(mouseX, mouseY, size);
  }
  if (popping) {
    popping = false;
    fill(rando(220));
    ellipse(mouseX, mouseY,size*1.5, size*1.5);
  }


  //fill(pink(10));
  //drawHeart(mouseX, mouseY);

  //draw foreground text
  fill (100, 0, 100, 8);
  noStroke();
  textFont("sans");
  textStyle(BOLD);
  textSize(width/5);
  textAlign(CENTER);
  text("A+M", width/2, height/2+(width/20));
}

function mousePressed() {
  mPressed = millis();
}
function mouseReleased() {
  mReleased = millis();
  popping = true;
}

function pink(alpha) {
  return color(94, 100, 100, alpha);
}

function rando(alpha) {
  return color(random(0,100), 80, 100, alpha);
}

//draw a heart centered on x, y, with extents w, h
function drawHeart(x,y,size) {
  push();
  //translate(x-75, y-40);
  translate(x,y);
  scale(1/75*size);
  translate(-75, -67);
  beginShape();

  vertex(75,40);
  bezierVertex(75,37,70,25,50,25);
  bezierVertex(20,25,20,62.5,20,62.5);
  bezierVertex(20,80,40,102,75,120);
  bezierVertex(110,102,130,80,130,62.5);
  bezierVertex(130,62.5,130,25,100,25);
  bezierVertex(85,25,75,37,75,40);
  endShape();
  pop();
}