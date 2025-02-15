let durchmesser = 50;

function setup() {
  createCanvas(220, 200);
  background("gold");
}

function draw() {
  fill(0, 0, 139, 100); // blau
  circle(60, 60, durchmesser);
  fill(255, 0, 0, 100); // rot
  circle(170, 60, durchmesser);
  fill(139, 69, 19, 100); // braun
  circle(60, 155, durchmesser);
  fill(0, 100, 0, 100); // grün
  circle(170, 155, durchmesser);
  fill(245, 245, 245, 100); // weiss
  circle(110, 102, durchmesser);
}
