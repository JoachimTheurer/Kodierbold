function setup() {
//Leinwand (Canvas) und Hintergrund
  createCanvas(200, 200);
  background(235);
}

function draw() {
//Zwei Dreiecke = eine "Fliege"
  triangle(020, 30, 100, 100, 020, 180);
  triangle(180, 30, 100, 100, 180, 180);
}