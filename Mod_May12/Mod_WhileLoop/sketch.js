//Made by Prof Hayes and Modded by Amanda!


function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(244, 225, 244);// changed the background color to something lighter

	var y = 0;
	while (y <= width)// tried to change it to width to see if there are changes but none  {
		stroke(0);
		fill(66, 197, 244);
		quad(200, y, 50, 50);// for the while function I used a quad instead
		y = y + 50;
	}

	for (y = 0; y <= height; y += 50) {
		stroke(255);
		fill(131, 65, 244);
		triangle(300, y, 50, 50, 150, 150);// same for the triangle
	}
}