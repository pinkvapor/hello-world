//Amanda's first project created with object literal notation! With some help and guidance from Prof Hayes objectLiteral code! (fanfare music) instead of using the regular variables, we use object literal notation which basically takes more then one assignment and uses the same variable name.
var pink = {// the variables name. kinda like the folder name
  a: 75,// and now the files names inside the folder! and they are all fall under the same name. Kinda like a last name
  b: 75,// they all share this last name but mean different things!
  diam: 25,// kinda like different people who share the same last name!!!!!
  r: 66,
  g: 244,
  b: 149,
  
}


function setup() {
  createCanvas(200, 200)
}

function draw() {
  background(254, 238, 253);
  noStroke();
  fill(pink.r, pink.g, pink.b)// instead of having many variables I can use the same variable and just a different extension for that meaning
  ellipse(pink.a, pink.b, pink.diam, pink.diam)// you can access these parts of the variable by writing the name and then adding a period behind and then the letter or name of that extension.
  // this code is different then other code is that it takes up less space to mean the same things you could do with different variables-
  // for example instead of 
  // var pink = 55
  // var blue= 25
  // var green = 75
  // I can do this!
  // var pink = { (also the reason we use the curly bracket is to keep all those extra files safe from bothering anything else)
  // a: 55,
  // b: 25,
  // c: 75,
  //Then just use it as pink.a, pink.b, and so forth!
  // thank you and enjoy my green dot in pink!
}