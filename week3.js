let bgColor = 240;
function setup() {
  angleMode(DEGREES); //makes it use good units
  createCanvas(700, 700);
  translate(width / 2, height / 2); // makes it so the center is in the center
  background(bgColor);
  noStroke();

  fill("grey");
  circle(0, 0, 350);

  fill(bgColor); // is same colour as background
  for (let i = 0; i < 6; i++) {
    rotate(360 / 6); // rotates the refernace for where is the circle at
    circle(0, 200, 140); // makes the circle at the place
  }
  fill("white");
  circle(0, 0, 170);
  fill("blue");
  circle(0, 0, 120);
}
