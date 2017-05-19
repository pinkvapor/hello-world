var circle = {
  x: 200,
  y: 200,
  diam: 50,
  r: 66,
  g: 244,
  b: 209
  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(254, 238, 253);
  noStroke();
  fill(circle.r, circle.g, circle.b);
  ellipse(circle.x, circle.y, circle.diam, circle.diam);
}