let x, y;
let xspeed, yspeed;
let ballDiameter = 50;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch-holder"); 
  x = width / 2;
  y = height / 2;
  xspeed = 5;
  yspeed = 3;
}

function draw() {
  background(51);

  fill(255, 0, 150);
  noStroke();
  ellipse(x, y, ballDiameter, ballDiameter);

  x += xspeed;
  y += yspeed;

  if (x > width - ballDiameter / 2 || x < ballDiameter / 2) {
    xspeed *= -1;
  }
  if (y > height - ballDiameter / 2 || y < ballDiameter / 2) {
    yspeed *= -1;
  }
}
