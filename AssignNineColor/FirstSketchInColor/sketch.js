//Amanda's first sketch but now with color~ in p5.js! 5/11/17


function setup() { // only happens once on the screen
  createCanvas(250,250); // sets the size of the canvas
}

function draw() { // loops in the canvas
  background(254,238, 253) // this sets the color of the background of the canvas 
  strokeWeight(7); // stroke weight determines the thickness of the line below
  line(70, 20,140, 60); // sets the coordinates to make a line by writing- line (x1, y1, x2, y2) which are my points in which I make a line.
  strokeWeight(1); // stroke weight determines the thickness of the line below
  fill(237,243,252); // fills all shapes below this line of color with the color determinded by the RGB scale in the ()
  ellipse(90, 150, 85, 85); // ellipse makes an oval. it is determined by the diameter which is the middle of the circle. then how high and wide you want your circle to be (x1,y 2, width, height) 
  //I noticed as I first tried to color in the background as well as my shapes that order is really important when it comes to code
  //I put the background last and it somehow erased my shapes and then I realized the computer reads things differently then a human would. they would know I just wanted to make the background pink and show my shapes since thats why I have them out anyways
  //So its very important that placement is taken in consideration.
}