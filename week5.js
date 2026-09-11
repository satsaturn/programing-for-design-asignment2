let ballx = 50;
let bally;// can't have a value yet becuse there is no canvas
let balld = 40;
let speedx = 5;
let speedy = 5;
let score = 0;
let ballc = "yellow";

function setup() {
  createCanvas(600, 400);
  bally = height / 2;
}

function draw() {
  background(220);
//make cort
  fill("white");
  rect(width / 2 - 5, 0, 10, 400);
  fill("green");
  rect(width - 100, 0, 100, 400);

  //make ball
  fill(ballc);
  circle(ballx, bally, balld);
  // makes ball move x
  ballx += speedx;
  // makes ball move y
  bally += speedy;
// make ball bounce of top and bottom
  if (bally > height - balld / 2 || bally < 0 + balld / 2) {
    speedy *= -1;
  }
  // reset stuff when you fail
  if (ballx > width + balld / 2) {
    ballx = 50;
    score = 0;
    speedx = 5;
  }

 // make things change when you win
  if (ballx < 0 + balld / 2) {
    speedx *= -1;
    score++;
    speedx++;
    speedy++;
  }
// writes text 
  fill("black");
  textSize(20);
  text("handball, press space when ball", 10, 25);
  text("is in green box to hit it back", 10, 50);
  text("score " + score, 10, 75);
}
// makes it so uo can hit things 
function keyPressed() {
  if (key == " " && ballx + balld / 2 > width - 100) {
    speedx *= -1;
  }
}
