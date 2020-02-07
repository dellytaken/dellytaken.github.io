function setup() {
  createCanvas(400, 400);
    background(220);
}

function draw() {

  line(0,0,400,400);
  strokeWeight(5);
  stroke(0,255,0);
  fill(0,0,255);
  rect(mouseX,mouseY,200,200);
  fill(255,0,255);
  noStroke();
  ellipse(250,300,100,100);
}

function mousePressed()
{
	background(220);
}
