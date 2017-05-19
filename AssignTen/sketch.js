//Amanda's sketch! showing variables being used to make shapes and color!
var dot;
dot = 50
var mark;
mark = 150;
var wat;
wat = 100;
var newR;// here I started to make the background and how it'll work is I state the variable and then on the next line
newR = 255//I'm stating the number that I'm assigning it to
var newG;
newG = 235;
var newB;
newB = 224

function setup() {
  createCanvas (300, 300);
}

function draw() {
  point (dot, mark);
  background(newR, newG, newB)
  point(50, 150)
  ellipse(50, 100, 25, 25)
  
}