function setup() {
  createCanvas (400,400);
}
 
 var Y = 75;
 var speed = 3;
 
 
function draw() {
  background(125,55,255);
  fill(51);
  ellipse(75,150,60,60);
  ellipse(Y +50, 150-50,60,60);
    Y = Y + speed;
}
 
 