// ball
//
// make the veriables
let ball_d;
let ball_x = [];
let ball_y = [];
let ball_vx = [];
let ball_vy = [];
let ball_b = [];

function setup() {
  createCanvas(700, 700);
  // set some veriables
  ball_d = 100;

  // sets some other veriables but for arrays
  for (let i = 0; i < 5; i++) {
    ball_x[i] = round(random(ball_d / 2, width - ball_d / 2)); // if the ball is to close to the edge it freakes out so we clamp it
    ball_vx[i] = round(random(2, 10));
    ball_vy[i] = 0;
    ball_y[i] = height / 2;
    ball_b[i] = round(random(10, 35));
  }
}

function draw() {
  background(220);
  // a loop that dose things to the 5 balls
  for (let i = 0; i < 5; i++) {
    circle(ball_x[i], ball_y[i], ball_d);
    // makes the ball bounce off the veriables
    if (ball_x[i] >= width - ball_d / 2) {
      ball_vx[i] *= -1;
    }
    if (ball_x[i] <= ball_d / 2) {
      ball_vx[i] *= -1;
    }

    // makes the ball bounce off the bottom by the random bounce amount asigned to them in setup
    if (ball_y[i] >= height - ball_d / 2) {
      ball_vy[i] = -ball_b[i];
    }

    // gives gravity
    ball_vy[i]++;
    ball_y[i] = ball_y[i] + ball_vy[i];

    // makes the ball move on x acording to the velocity set in setup
    ball_x[i] += ball_vx[i];
  }
}
  