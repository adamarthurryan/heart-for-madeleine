

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255);
}

var mPressed, mReleased;
var popping;

function draw() {
  colorMode(HSB, 100);
  angleMode(RADIANS);

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
    var color = rando(220);
    fill(color);
    ellipse(mouseX, mouseY,size*1.4, size*1.4);
    drawRandomDrops(mouseX, mouseY, size*1.4);
  }


  //fill(pink(10));
  //drawHeart(mouseX, mouseY);

  //if (randomGaussian() > 1) {
  //if (millis() % 2 == 0 ) {}
    //draw foreground text
    fill (100, 0, 100, 255);
    noStroke();
    textFont("sans");
    textStyle(BOLD);
    textSize(width/5);
    textAlign(CENTER);
    text("A+M", width/2, height/2+(width/20));
  //}
}

var ctrl = false

//save on CTRL+S
function keyPressed() {
  if (keyCode == CONTROL) {
    ctrl = true;
  }
  if (key == 'S' && ctrl) {
    save();
    return false;
  }

}

function keyReleased() {
  if (keyCode == CONTROL) {
    ctrl = false;
    println('control');
  }
}

function mousePressed() {
  mPressed = millis();
}
function mouseReleased() {
  mReleased = millis();
  popping = true;
}

function drawRandomDrops(x, y, size) {
  var count = randomGaussian(5, 2);
  for (var i=0;i<5;i++) {
    //center of drop in polar coordinates
    var dist = floor(randomGaussian(size/1.4, size/2));
    var angle = random(0,2*PI);

    //convert to cartesian
    var dx = dist * cos(angle);
    var dy = dist * sin(angle);

    var dsize = randomGaussian(size/5, size/10);

    ellipse(dx+x, dy+y, dsize, dsize); 
  }
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