function setup() {
  createCanvas(220, 200);
  background(235);
  rectMode(CENTER);
}

function draw() {
  /* Funktionsaufruf mit zwei Argumenten  */
  hase(40, 65); // x-Wert, y-Wert
}

/* Funktion anlegen mit zwei Argumenten  */
function hase(x, y) {  // x, y für Position
  fill("pink");

	/* x-Wert 'x' und y-Wert 'y' weitergeben */
  circle(x, y, 40); // gezeichnet an x=40, y=65
}
