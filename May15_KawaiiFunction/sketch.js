 

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51); 
  holderOfKawaii(150, 150);
  
  sparkles(20, 20, 15, 45, 20, 65, 45, 45);
  sparkles(450, 450, 420, 475, 460, 475, 420, 465);
  sparkles(365, 350, 320, 340, 370, 370, 385, 340);
  sparkles(470, 20, 400, 45, 350, 80, 470, 40);
}
  
function holderOfKawaii (xloc, yloc, wdiam, hdiam) {
  fill(255, 232, 229)
  rect(xloc, yloc, 150, 150);
}

function sparkles (x1, y1, x2, y2, x3, y3, x4, y4){
  quad(x1, y2, x2, y2, x3, y3, x4, y4);
}
//function sparkles(xloc, yloc,)