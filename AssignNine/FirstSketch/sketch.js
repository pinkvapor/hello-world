//Amanda's first sketch in p5.js! 5/11/17


function setup() { // only happens once on the screen
  createCanvas(250,250); // sets the size of the canvas
}

function draw() { // loops in the canvas
  strokeWeight(7); // stroke weight determines the thickness of the line below
  line(70, 20,140, 60); // sets the coordinates to make a line by writing- line (x1, y1, x2, y2) which are my points in which I make a line.
  strokeWeight(1); // stroke weight determines the thickness of the line below
  ellipse(90, 150, 85, 85); // ellipse makes an oval. it is determined by the diameter which is the middle of the circle. then how high and wide you want your circle to be (x1,y 2, width, height) 
  
}