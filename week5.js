let ball = {
  x: 50,
  y: null, // not set yet becuse no canvase yet 
  d: 40,
  speedx: 5,
  speedy: 5,
  c: "yellow",
};

let score = 0;

function setup() {
  createCanvas(600, 400);
  ball.y = height / 2; //sets y becuse we have canvas 
}

function draw() {
  background(220);
  //make cort
  fill("white");
  rect(width / 2 - 5, 0, 10, 400);
  fill("green");
  rect(width - 100, 0, 100, 400);
  
  //make ball.
  fill(ball.c);
  circle(ball.x, ball.y, ball.d);
  // makes ball. move x
  ball.x += ball.speedx;
  // makes ball. move y
  ball.y += ball.speedy;
  // make ball. bounce of top and bottom
  if (ball.y > height - ball.d / 2 || ball.y < 0 + ball.d / 2) {
    ball.speedy *= -1;
  }
  // reset stuff when you fail
  if (ball.x > width + ball.d / 2) {
    ball.x = 50;
    score = 0;
    ball.speedx = 5;
  }

  // make things change when you win
  if (ball.x < 0 + ball.d / 2) {
    ball.speedx *= -1;
    score++;
    ball.speedx++;
    ball.speedy++;
  }
  // writes text
  fill("black");
  textSize(20);
  text("score " + score, 10, 25);
}
// makes it so uo can hit things
function keyPressed() {
  if (key == " " && ball.x + ball.d / 2 > width - 100) {
    ball.speedx *= -1;
  }
}
