function setup() {
  createCanvas(2000, 1000);
  background(220);
}

function draw() {
  //opties
  rect (20, 20, 220, 280);
  fill ("red");
  rect (30, 30, 200, 80);
  fill ("blue");
  rect (30, 120, 200, 80);
  fill ("green");
  rect (30, 210, 200, 80);
  fill (250);


}

function keyPressed() {
  //klik functie
  if (keyCode === BACKSPACE) {
  background(220);
  //figuren random
  for (let i = 0; i < 100; i++) {
    fill (random(256), random(256), random(256));
    triangle (random(-100, 2100), random(-100, 2100), random(-100, 2100), random(-100, 2100), random(-100, 2100), random(-100, 200));
    square (random(-100, 2300), random(-100, 2300), random(-100, 200));
    circle (random(-100, 2300), random(-100, 2300), random(-100, 200));
    

  }
 
  }

}
