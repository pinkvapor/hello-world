//Amanda's sketch with movement!!! yAY!!

var dot;// here I state the variable name and then on the next line
dot = 50// I assign a number to it
var mark;
mark = 150;
var wat;
wat = 100;
var bgOne;
bgOne = 255;
var bgTwo;
bgTwo = 235;
var bgThree;
bgThree = 224
var speed;// here I'm stating speed although I didn't use it on this example
speed = 3;

function setup() {
  createCanvas (300, 300);// creates the size of my canvas
}

function draw() {
  point (dot, mark);// here I'm using the variables to make shapes
  background(bgOne, bgTwo, bgThree)
  point(50, 150)
  fill(51)
  ellipse(mark, 100, 25, 25)
  
 mark = mark + 3// here is where I state that the variable mark is going to be increased by 3. and since
 // its under the draw function that means p5 will repeat the motion again and make the illusion that it is moving
  
}