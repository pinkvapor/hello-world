/*  
Code by Dawn C. Hayes March, 2017, Modded by Amanda!
*/


function setup() {
	createCanvas(600, 400);
	background(0, 64, 135);
}

function draw() {
	strokeWeight(0.5); //changed the strokeweight
	stroke(255);

	for (var y = 0; y <= width; y += 20) { //  here y stands for the first point of where the triangles will start from
		for (var r = 0; r <= height; r += 20) { // same as y excepts its by heigh and spaced out by 20
			fill(mouseX, random(255), mouseY); // will change by the mouses position
			triangle(y, r, 50, 50, 30, 30); // the triangle's position!
		}
	}
}