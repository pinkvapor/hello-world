//Amanda's sketch explaining why order matters!


function setup() {
  createCanvas(400, 400);
  //background (51) for example if I put the background here it would only happen once and whatever shape I create next would
  // also affect the background being made.
}

function draw() {
  background(51)
  ellipse(200, 200, 50) //as you can see I put the background above my shape. If I had put the background below the ellipse 
  //then I would have had it covered by the background. It would look like my shape didnt exist
  //background(51) //for example take off the comment infront of the background on line 14 and add the comment out on line 11.
  // and you'll see what happens. its like the shape doesn't exist.
}